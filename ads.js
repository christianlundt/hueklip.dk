const AD_CLIENT = "ca-pub-8289871084577228";
const SLOT_HORIZONTAL = "9254373791";
const SLOT_VERTICAL = "3974126951";

let modalAdPushed = false;

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

function initPageAds() {
  document.querySelectorAll("[data-ad-type='vertical']").forEach((container) => {
    mountAd(container, SLOT_VERTICAL, "vertical");
    pushAd(container);
  });

  const listAd = document.getElementById("list-bottom-ad");
  if (listAd) {
    mountAd(listAd, SLOT_HORIZONTAL, "horizontal");
    pushAd(listAd);
  }

  const modalAd = document.getElementById("modal-bottom-ad");
  if (modalAd) {
    mountAd(modalAd, SLOT_HORIZONTAL, "horizontal");
  }
}

function initModalAd() {
  if (modalAdPushed) return;
  const modalAd = document.getElementById("modal-bottom-ad");
  if (!modalAd) return;
  if (!modalAd.querySelector("ins.adsbygoogle")) {
    mountAd(modalAd, SLOT_HORIZONTAL, "horizontal");
  }
  pushAd(modalAd);
  modalAdPushed = true;
}
