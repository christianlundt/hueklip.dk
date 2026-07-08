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

function createAdUnit(slotId, variant) {
  const ins = document.createElement("ins");
  ins.className = "adsbygoogle";
  ins.style.display = "block";
  ins.setAttribute("data-ad-client", AD_CLIENT);
  ins.setAttribute("data-ad-slot", slotId);

  if (variant === "vertical") {
    ins.setAttribute("data-ad-format", "vertical");
    ins.style.minHeight = "250px";
  } else {
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    ins.style.minHeight = "90px";
  }

  return ins;
}

function mountAd(container, slotId, variant) {
  container.innerHTML = "";
  container.classList.add("ad-slot", `ad-slot--${variant}`);
  container.appendChild(createAdUnit(slotId, variant));
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

  const verticalContainers = document.querySelectorAll("[data-ad-type='vertical']");
  const listAd = document.getElementById("list-bottom-ad");
  if (verticalContainers.length === 0 && !listAd) return;

  await loadAdSenseScript();

  verticalContainers.forEach((container) => {
    mountAd(container, SLOT_VERTICAL, "vertical");
    pushAd(container);
  });

  if (listAd) {
    mountAd(listAd, SLOT_HORIZONTAL, "horizontal");
    pushAd(listAd);
  }
}
