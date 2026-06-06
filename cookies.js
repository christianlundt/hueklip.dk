const COOKIE_KEY = "hueklip-cookie-consent";
const GA_ID = "G-JGZYX58HW6";

function getConsent() {
  try {
    return localStorage.getItem(COOKIE_KEY);
  } catch (_) {
    return null;
  }
}

function setConsent(value) {
  try {
    localStorage.setItem(COOKIE_KEY, value);
  } catch (_) {
    /* Ignorer hvis localStorage er blokeret */
  }
}

function hasAnalyticsConsent() {
  return getConsent() === "accepted";
}

function closeCookieBanner(banner) {
  banner.remove();
  document.body.classList.remove("cookie-banner-open");
}

function ensureCookieBanner() {
  if (getConsent() || document.getElementById("cookie-banner")) return;

  document.body.classList.add("cookie-banner-open");

  const banner = document.createElement("div");
  banner.id = "cookie-banner";
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-labelledby", "cookie-banner-title");
  banner.setAttribute("aria-modal", "true");
  banner.innerHTML = `
    <div class="cookie-banner__inner">
      <h2 id="cookie-banner-title">Cookies på Hueklip.dk</h2>
      <p>
        Vi bruger cookies til at vise annoncer via Google AdSense og til statistik via Google Analytics.
        Du skal vælge, om du accepterer eller afviser cookies, før du kan bruge siden. Læs mere i vores
        <a href="${resolvePath("cookiepolitik.html")}">cookiepolitik</a>.
      </p>
      <div class="cookie-banner__actions">
        <button type="button" class="cookie-banner__btn cookie-banner__btn--accept" id="cookie-accept">Accepter cookies</button>
        <button type="button" class="cookie-banner__btn cookie-banner__btn--decline" id="cookie-decline">Afvis cookies</button>
      </div>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById("cookie-accept").addEventListener("click", () => {
    setConsent("accepted");
    closeCookieBanner(banner);
    initAnalytics();
    initPageAds();
  });

  document.getElementById("cookie-decline").addEventListener("click", () => {
    setConsent("declined");
    closeCookieBanner(banner);
  });
}

function resolvePath(path) {
  const inSubfolder = window.location.pathname.includes("/klip/") || window.location.pathname.includes("/regler/");
  if (inSubfolder) return `../${path}`;
  return path;
}

function initCookieConsent() {
  ensureCookieBanner();
  if (hasAnalyticsConsent()) {
    initAnalytics();
    if (typeof initPageAds === "function") initPageAds();
  }
}

document.addEventListener("DOMContentLoaded", initCookieConsent);
