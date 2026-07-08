document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document
    .querySelectorAll(".detail-embed iframe[width][height], .detail-embed video[width][height], .detail-embed img[width][height]")
    .forEach((element) => {
      const width = Number.parseInt(element.getAttribute("width"), 10);
      const height = Number.parseInt(element.getAttribute("height"), 10);
      if (width > 0 && height > 0) {
        element.style.aspectRatio = `${width} / ${height}`;
        element.style.maxWidth = `${width}px`;
      }
    });

  initNavbarDropdown();
  wrapBannerTags();
});

function wrapBannerTags() {
  document.querySelectorAll("a.clip-row").forEach((row) => {
    const tags = row.querySelectorAll(":scope > .col-tag");
    if (tags.length === 0 || row.querySelector(".col-tags")) return;

    const wrap = document.createElement("span");
    wrap.className = "col-tags";
    tags[0].before(wrap);
    tags.forEach((tag) => wrap.appendChild(tag));
  });
}

function sitePrefix() {
  const stylesheet = document.querySelector('link[href$="styles.css"]');
  if (!stylesheet) return "";
  const href = stylesheet.getAttribute("href") || "";
  return href === "styles.css" ? "" : href.replace(/styles\.css$/, "");
}

function initNavbarDropdown() {
  const nav = document.querySelector(".navbar-nav");
  if (!nav || nav.querySelector(".navbar-dropdown")) return;

  const prefix = sitePrefix();
  const dropdown = document.createElement("div");
  dropdown.className = "navbar-dropdown";
  dropdown.innerHTML = `
    <button type="button" class="navbar-dropdown__toggle" aria-expanded="false" aria-haspopup="true">
      Mere
      <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
    </button>
    <ul class="navbar-dropdown__menu" role="menu" hidden>
      <li role="none"><a role="menuitem" href="${prefix}kontakt.html">Kontakt & om os</a></li>
      <li role="none"><a role="menuitem" href="${prefix}guides/drukspil.html">Drukspil</a></li>
    </ul>
  `;

  nav.appendChild(dropdown);

  const toggle = dropdown.querySelector(".navbar-dropdown__toggle");
  const menu = dropdown.querySelector(".navbar-dropdown__menu");

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  }

  toggle.addEventListener("click", () => {
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
