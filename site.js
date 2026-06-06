function initHuePage(items, pageConfig) {
  const classicTbody = document.getElementById("clip-tbody-classic");
  const restTbody = document.getElementById("clip-tbody-rest");
  const searchInput = document.getElementById("clip-search");
  const searchMeta = document.getElementById("search-meta");
  const noResults = document.getElementById("no-results");
  const classicTitle = document.getElementById("classic-title");
  const sectionDivider = document.getElementById("section-divider");

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function iconStyleAttr(item) {
    if (item.rotation == null || item.rotation === 0) return "";
    return ` style="transform: rotate(${Number(item.rotation)}deg)"`;
  }

  function itemHref(item) {
    return `${pageConfig.itemBasePath}${encodeURIComponent(item.id)}.html`;
  }

  function createRow(item) {
    const tr = document.createElement("tr");
    tr.dataset.id = item.id;
    tr.setAttribute("role", "row");
    tr.innerHTML = `
      <td class="col-icon" role="gridcell"><i class="${item.icon}"${iconStyleAttr(item)} aria-hidden="true"></i></td>
      <td class="col-name" role="gridcell"><a class="clip-link" href="${escapeHtml(itemHref(item))}">${escapeHtml(item.name)}</a></td>
      <td class="col-desc" role="gridcell">${escapeHtml(item.desc)}</td>
    `;
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

  initPageLabels();
  renderRows();
}
