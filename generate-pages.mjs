import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const HEAD_TRACKING = `  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JGZYX58HW6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JGZYX58HW6');
</script>`;

const HEAD_ADSENSE = `  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8289871084577228"
     crossorigin="anonymous"></script>`;

function loadData(filename, varName) {
  const code = readFileSync(filename, "utf8");
  const sandbox = {};
  const fn = new Function(`${code}; return ${varName};`);
  return fn();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, "&#39;");
}

function iconStyle(item) {
  if (item.rotation == null || item.rotation === 0) return "";
  return ` style="transform: rotate(${Number(item.rotation)}deg)"`;
}

function getContent(item, type) {
  if (Array.isArray(item.content) && item.content.length) return item.content;
  const paragraphs = [];
  if (item.detail && item.detail.trim()) paragraphs.push(item.detail.trim());
  if (type === "clip") {
    paragraphs.push(
      `${item.name} er et hue-klip, som mange studenter kender fra traditionen om at markere oplevelser i svedbåndet på studenterhuen. Klippet placeres typisk som et lille snit i svedbåndet og fungerer som et minde fra studietiden.`
    );
    paragraphs.push(
      "Traditionerne omkring hue-klip varierer fra skole til skole og fra region til region. På Hueklip.dk samler vi de klip, vi kender – kender du variationer eller andre navne for dette klip, hører vi gerne fra dig."
    );
  } else {
    paragraphs.push(
      `${item.name} er en uformel hue-regel, som mange danske studenter kender og følger som en del af studentertraditionen. Reglerne handler ofte om respekt for huen, studentervognen og de oplevelser, man deler med klassekammeraterne.`
    );
    paragraphs.push(
      "Reglerne kan variere lokalt og mellem forskellige gymnasier. Vi samler dem her for at bevare traditionen – har du en regel, vi mangler, er du velkommen til at sende den til os."
    );
  }
  return paragraphs;
}

function renderExample(item, prefix) {
  if (!item.example || !item.example.trim()) return "";
  const path = item.example.trim();
  const alt = escapeAttr(`Eksempel på ${item.name}`);
  const isVideo = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(path);
  const src = escapeAttr(`${prefix}${path}`);
  if (isVideo) {
    return `<figure class="detail-example"><video src="${src}" controls playsinline preload="metadata" title="${alt}"></video></figure>`;
  }
  return `<figure class="detail-example"><img src="${src}" alt="${alt}" loading="lazy"></figure>`;
}

function renderDetailPage(item, type) {
  const isClip = type === "clip";
  const folder = isClip ? "klip" : "regler";
  const listTitle = isClip ? "Hue-klip" : "Hue-regler";
  const listHref = isClip ? "../index.html" : "../regler.html";
  const typeLabel = isClip ? "Hue-klip" : "Hue-regel";
  const contactText = isClip
    ? "Kender du variationer af dette klip?"
    : "Kender du andre regler eller variationer?";
  const paragraphs = getContent(item, type);
  const bodyHtml = paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n          ");
  const exampleHtml = renderExample(item, "../");

  return `<!DOCTYPE html>
<html lang="da">
<head>
${HEAD_TRACKING}
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeAttr(item.name)} – ${escapeAttr(item.desc)}. Læs mere om denne ${escapeAttr(typeLabel.toLowerCase())} på Hueklip.dk.">
  <title>${escapeHtml(item.name)} – Hueklip.dk</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer">
  <link rel="stylesheet" href="../styles.css">
${HEAD_ADSENSE}
</head>
<body>
  <header class="navbar">
    <div class="site-center navbar-inner">
      <a href="../index.html" class="navbar-logo">
        <img src="../logo.png" alt="Hueklip.dk logo">
      </a>
      <nav class="navbar-nav" aria-label="Hovednavigation">
        <a href="../index.html" class="navbar-nav__link${isClip ? " navbar-nav__link--active" : ""}">Hue-klip</a>
        <a href="../regler.html" class="navbar-nav__link${!isClip ? " navbar-nav__link--active" : ""}">Hue-regler</a>
      </nav>
    </div>
  </header>

  <main class="detail-page site-center">
    <nav class="breadcrumb" aria-label="Brødkrumme">
      <a href="${listHref}">${listTitle}</a>
      <span aria-hidden="true">›</span>
      <span>${escapeHtml(item.name)}</span>
    </nav>

    <article class="detail-card">
      <header class="detail-header">
        <div class="detail-icon" aria-hidden="true"><i class="${item.icon}"${iconStyle(item)}></i></div>
        <p class="detail-label">${typeLabel}</p>
        <h1>${escapeHtml(item.name)}</h1>
        <p class="detail-lead">${escapeHtml(item.desc)}</p>
      </header>

      <div class="detail-body">
        ${bodyHtml}
      </div>

      ${exampleHtml}

      <p class="detail-contact">${contactText} Skriv til <a href="mailto:info@hueklip.dk">info@hueklip.dk</a>.</p>
    </article>

    <aside class="detail-bottom-ad" id="list-bottom-ad" aria-label="Reklame"></aside>
  </main>

  <footer class="footer">
    <nav class="footer-nav" aria-label="Footer">
      <a href="../kontakt.html">Kontakt &amp; om os</a>
      <a href="../privatlivspolitik.html">Privatlivspolitik</a>
      <a href="../cookiepolitik.html">Cookiepolitik</a>
    </nav>
    <p>&copy; <span id="year"></span> Hueklip.dk</p>
  </footer>

  <script src="../cookies.js"></script>
  <script src="../analytics.js"></script>
  <script src="../ads.js"></script>
  <script src="../layout.js"></script>
</body>
</html>
`;
}

const clips = loadData("clips-data.js", "clips");
const rules = loadData("regler-data.js", "rules");

mkdirSync("klip", { recursive: true });
mkdirSync("regler", { recursive: true });

clips.forEach((item) => {
  writeFileSync(join("klip", `${item.id}.html`), renderDetailPage(item, "clip"));
});

rules.forEach((item) => {
  writeFileSync(join("regler", `${item.id}.html`), renderDetailPage(item, "rule"));
});

console.log(`Genererede ${clips.length} klip-sider og ${rules.length} regel-sider.`);
