function initHuePage(items, pageConfig) {
  const classicTbody = document.getElementById("clip-tbody-classic");
  const restTbody = document.getElementById("clip-tbody-rest");
  const searchInput = document.getElementById("clip-search");
  const searchMeta = document.getElementById("search-meta");
  const noResults = document.getElementById("no-results");
  const classicTitle = document.getElementById("classic-title");
  const sectionDivider = document.getElementById("section-divider");
  const overlay = document.getElementById("modal-overlay");
  const modalEl = document.querySelector(".modal");
  const modalTitle = document.getElementById("modal-title");
  const modalIcon = document.getElementById("modal-icon");
  const modalExample = document.getElementById("modal-example");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  let lastFocused = null;

  const VIDEO_EXT = /\.(mp4|webm|ogg|mov)(\?.*)?$/i;

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function escapeAttr(str) {
    return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  function iconStyleAttr(item) {
    if (item.rotation == null || item.rotation === 0) return "";
    return ` style="transform: rotate(${Number(item.rotation)}deg)"`;
  }

  function hasExample(item) {
    return typeof item.example === "string" && item.example.trim() !== "";
  }

  function renderExampleMarkup(item) {
    if (!hasExample(item)) return "";

    const path = item.example.trim();
    const alt = `Eksempel på ${item.name}`;

    if (VIDEO_EXT.test(path)) {
      return `<figure class="modal-example__media"><video src="${escapeAttr(path)}" controls playsinline preload="metadata" title="${escapeAttr(alt)}"></video></figure>`;
    }

    return `<figure class="modal-example__media"><img src="${escapeAttr(path)}" alt="${escapeAttr(alt)}" loading="lazy"></figure>`;
  }

  function createRow(item) {
    const tr = document.createElement("tr");
    tr.tabIndex = 0;
    tr.dataset.id = item.id;
    tr.setAttribute("role", "row");
    tr.innerHTML = `
      <td class="col-icon" role="gridcell"><i class="${item.icon}"${iconStyleAttr(item)} aria-hidden="true"></i></td>
      <td class="col-name" role="gridcell">${escapeHtml(item.name)}</td>
      <td class="col-desc" role="gridcell">${escapeHtml(item.desc)}</td>
    `;
    tr.addEventListener("click", () => openModal(item, tr));
    tr.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(item, tr);
      }
    });
    return tr;
  }

  function renderRows(filter = "") {
    const q = filter.trim().toLowerCase();
    classicTbody.innerHTML = "";
    restTbody.innerHTML = "";
    let visibleClassic = 0;
    let visibleRest = 0;

    items.forEach((item) => {
      const haystack = (item.name + " " + item.desc + " " + item.detail).toLowerCase();
      if (q && !haystack.includes(q)) return;

      const row = createRow(item);
      if (item.classic) {
        classicTbody.appendChild(row);
        visibleClassic++;
      } else {
        restTbody.appendChild(row);
        visibleRest++;
      }
    });

    const visibleTotal = visibleClassic + visibleRest;
    const isSearching = q.length > 0;

    noResults.classList.toggle("visible", visibleTotal === 0);
    classicTitle.classList.toggle("clip-section__title--hidden", visibleClassic === 0 || isSearching);
    sectionDivider.classList.toggle("section-divider--hidden", visibleClassic === 0 || visibleRest === 0 || isSearching);

    searchMeta.textContent = isSearching
      ? `${visibleTotal} ${pageConfig.countLabel} fundet`
      : `${items.length} ${pageConfig.countLabel} i alt`;
  }

  function openModal(item, row) {
    lastFocused = row;
    modalTitle.textContent = item.name;
    modalIcon.innerHTML = `<i class="${item.icon}"${iconStyleAttr(item)}></i>`;

    const showExample = hasExample(item);
    if (showExample) {
      modalExample.innerHTML = renderExampleMarkup(item);
      modalExample.hidden = false;
    } else {
      modalExample.innerHTML = "";
      modalExample.hidden = true;
    }

    modalEl.classList.toggle("modal--with-example", showExample);

    modalBody.innerHTML = `
      <p>${escapeHtml(item.desc)}</p>
      <p>${escapeHtml(item.detail)}</p>
      <p>${pageConfig.modalContact}</p>
    `;

    overlay.hidden = false;
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
    initModalAd();
    modalClose.focus();
  }

  function closeModal() {
    const video = modalExample.querySelector("video");
    if (video) video.pause();

    overlay.classList.remove("open");
    overlay.hidden = true;
    modalEl.classList.remove("modal--with-example");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function initPageLabels() {
    const searchLabel = document.querySelector('label[for="clip-search"]');
    if (searchLabel) searchLabel.textContent = pageConfig.searchLabel;
    if (searchInput) searchInput.placeholder = pageConfig.searchPlaceholder;
    if (classicTitle) classicTitle.textContent = pageConfig.classicTitle;
    if (noResults) noResults.textContent = pageConfig.noResults;

    const classicTable = document.querySelector(".clip-section[aria-labelledby='classic-title'] .clip-list");
    if (classicTable) classicTable.setAttribute("aria-label", pageConfig.classicAria);

    const restTable = document.querySelector(".clip-section:not([aria-labelledby]) .clip-list");
    if (restTable) restTable.setAttribute("aria-label", pageConfig.restAria);
  }

  searchInput.addEventListener("input", () => renderRows(searchInput.value));

  modalClose.addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  initPageAds();

  initPageLabels();
  renderRows();
}
