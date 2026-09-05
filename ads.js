const AD_HREF = "https://højlydt.dk/";
const AD_ALT = "Reklame for Højlydt.dk";

const VERTICAL_SIZE = { width: 160, height: 600 };
const HORIZONTAL_SIZE = { width: 680, height: 90 };

const VERTICAL_ADS = ["vertical-a.webp", "vertical-b.webp"];
const HORIZONTAL_ADS = ["horizontal-a.webp", "horizontal-b.webp", "horizontal-c.webp"];

const PAGE_ADS = {
  "index.html": {
    vertical: ["vertical-a.webp", "vertical-b.webp"],
    horizontal: ["horizontal-a.webp", "horizontal-b.webp"],
  },
  "regler.html": {
    vertical: ["vertical-b.webp", "vertical-a.webp"],
    horizontal: ["horizontal-b.webp", "horizontal-c.webp"],
  },
  "guides/drukspil.html": {
    vertical: ["vertical-a.webp", "vertical-b.webp"],
    horizontal: ["horizontal-c.webp", "horizontal-a.webp"],
  },
};

let pageAdsMounted = false;

function sitePrefix() {
  const stylesheet = document.querySelector('link[href$="styles.css"]');
  if (!stylesheet) return "";
  const href = stylesheet.getAttribute("href") || "";
  return href === "styles.css" ? "" : href.replace(/styles\.css$/, "");
}

function pageKey() {
  const path = window.location.pathname.replace(/\\/g, "/");
  const match = path.match(/([^/]+\/)?[^/]+\.html$/);
  return match ? match[0] : "index.html";
}

function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function pickFrom(list, offset) {
  return list[offset % list.length];
}

function adsForPage() {
  const key = pageKey();
  if (PAGE_ADS[key]) return PAGE_ADS[key];

  const seed = hashString(key);
  return {
    vertical: [
      pickFrom(VERTICAL_ADS, seed),
      pickFrom(VERTICAL_ADS, seed + 1),
    ],
    horizontal: [
      pickFrom(HORIZONTAL_ADS, seed),
      pickFrom(HORIZONTAL_ADS, seed + 1),
    ],
  };
}

function adImageSrc(filename) {
  return `${sitePrefix()}assets/ads/${filename}`;
}

function adHref(filename, variant) {
  const url = new URL(AD_HREF);
  url.searchParams.set("utm_source", "hueklip.dk");
  url.searchParams.set("utm_medium", "banner");
  url.searchParams.set("utm_campaign", "hueklip");
  url.searchParams.set("utm_content", filename.replace(/\.[^.]+$/, "") || variant);
  return url.toString();
}

function createAdLink(filename, variant) {
  const size = variant === "vertical" ? VERTICAL_SIZE : HORIZONTAL_SIZE;
  const link = document.createElement("a");
  link.className = `ad-banner ad-banner--${variant}`;
  link.href = adHref(filename, variant);
  link.target = "_blank";
  link.rel = "noopener noreferrer sponsored";
  link.setAttribute("aria-label", AD_ALT);

  const img = document.createElement("img");
  img.src = adImageSrc(filename);
  img.alt = AD_ALT;
  img.width = size.width;
  img.height = size.height;
  img.decoding = "async";
  img.loading = variant === "vertical" ? "eager" : "lazy";

  const label = document.createElement("span");
  label.className = "ad-banner__label";
  label.textContent = "Betalt reklame";

  link.appendChild(label);
  link.appendChild(img);
  return link;
}

function mountAd(container, filename, variant) {
  if (!container || !filename) return;
  container.innerHTML = "";
  container.classList.add("ad-slot", `ad-slot--${variant}`);
  container.appendChild(createAdLink(filename, variant));
}

function initPageAds() {
  if (pageAdsMounted) return;
  pageAdsMounted = true;

  const plan = adsForPage();
  const verticalContainers = document.querySelectorAll("[data-ad-type='vertical']");
  const horizontalContainers = document.querySelectorAll("[data-ad-type='horizontal']");

  verticalContainers.forEach((container, index) => {
    const filename = container.dataset.adImage || plan.vertical[index] || plan.vertical[0];
    mountAd(container, filename, "vertical");
  });

  horizontalContainers.forEach((container, index) => {
    const filename = container.dataset.adImage || plan.horizontal[index] || plan.horizontal[0];
    mountAd(container, filename, "horizontal");
  });
}

document.addEventListener("DOMContentLoaded", initPageAds);
