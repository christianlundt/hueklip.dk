const AD_CLIENT = "ca-pub-8289871084577228";
const SLOT_HORIZONTAL = "9254373791";
const SLOT_VERTICAL = "3974126951";

let adsScriptLoaded = false;

function canShowAds() {
  return typeof hasAnalyticsConsent === "function" && hasAnalyticsConsent();
}

function loadAdSenseScript() {
  if (adsScriptLoaded || document.querySelector('script[src*="adsbygoogle.js"]')) {
    adsScriptLoaded = true;
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`;
    script.crossOrigin = "anonymous";
    script.onload = () => {
      adsScriptLoaded = true;
      resolve();
    };
    script.onerror = resolve;
    document.head.appendChild(script);
  });
}

function createAdUnit(slotId) {
  const ins = document.createElement("ins");
  ins.className = "adsbygoogle";
  ins.style.display = "block";
  ins.setAttribute("data-ad-client", AD_CLIENT);
  ins.setAttribute("data-ad-slot", slotId);
  ins.setAttribute("data-ad-format", "auto");
  ins.setAttribute("data-full-width-responsive", "true");
  return ins;
}

function mountAd(container, slotId, variant) {
  container.innerHTML = "";
  container.classList.add("ad-slot", `ad-slot--${variant}`);
  container.appendChild(createAdUnit(slotId));
}

function pushAd(container) {
  const ins = container.querySelector("ins.adsbygoogle");
  if (!ins || ins.dataset.adRequested === "true") return;
  ins.dataset.adRequested = "true";
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (_) {
    /* AdSense blokeret eller ikke klar endnu */
  }
}

async function initPageAds() {
  if (!canShowAds()) return;

  await loadAdSenseScript();

  document.querySelectorAll("[data-ad-type='vertical']").forEach((container) => {
    mountAd(container, SLOT_VERTICAL, "vertical");
    pushAd(container);
  });

  const listAd = document.getElementById("list-bottom-ad");
  if (listAd) {
    mountAd(listAd, SLOT_HORIZONTAL, "horizontal");
    pushAd(listAd);
  }
}
