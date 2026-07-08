document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("clip-search");
  const label = document.querySelector('label[for="clip-search"]');
  const rows = Array.from(document.querySelectorAll(".clip-row-wrap"));
  const sections = Array.from(document.querySelectorAll(".clip-section"));
  const noResults = document.getElementById("no-results");
  const classicTitle = document.getElementById("classic-title");
  const sectionDivider = document.getElementById("section-divider");
  const tagFilters = document.getElementById("clip-tag-filters");
  const countLabel = document.body.dataset.countLabel || "hue-klip";
  const total = rows.length;

  function getActiveTags() {
    if (!tagFilters) return [];
    return Array.from(tagFilters.querySelectorAll(".tag-filter:checked")).map((checkbox) => checkbox.dataset.tag);
  }

  function rowMatchesTags(row, activeTags) {
    if (activeTags.length === 0) return true;
    const rowTags = (row.dataset.tags || "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    return activeTags.some((tag) => rowTags.includes(tag));
  }

  function updateFilterToggle(activeTags) {
    if (!tagFilters) return;
    const toggle = tagFilters.querySelector(".filter-dropdown__toggle");
    const labelEl = tagFilters.querySelector(".filter-dropdown__label");
    if (!toggle || !labelEl) return;

    toggle.classList.toggle("filter-dropdown__toggle--active", activeTags.length > 0);
    labelEl.textContent = activeTags.length > 0 ? `Filtrer (${activeTags.length})` : "Filtrer";
  }

  function updateLabel(visible, isFiltering) {
    if (label) {
      label.textContent = `Søg i ${isFiltering ? visible : total} ${countLabel}`;
    }
  }

  function updateSections() {
    sections.forEach((section) => {
      const sectionRows = section.querySelectorAll(".clip-row-wrap");
      const hasVisible = Array.from(sectionRows).some((row) => !row.classList.contains("is-filtered-out"));
      section.classList.toggle("clip-section--empty", !hasVisible);
    });
  }

  function filterRows() {
    const q = input ? input.value.trim().toLowerCase() : "";
    const activeTags = getActiveTags();
    const isFiltering = q.length > 0 || activeTags.length > 0;
    let visibleClassic = 0;
    let visibleRest = 0;

    rows.forEach((row) => {
      const matchesSearch = !q || row.textContent.toLowerCase().includes(q);
      const matchesTags = rowMatchesTags(row, activeTags);
      const show = matchesSearch && matchesTags;
      row.classList.toggle("is-filtered-out", !show);

      if (show) {
        if (row.dataset.classic === "true") visibleClassic++;
        else visibleRest++;
      }
    });

    const visibleTotal = visibleClassic + visibleRest;

    updateSections();
    updateFilterToggle(activeTags);

    if (noResults) noResults.classList.toggle("visible", isFiltering && visibleTotal === 0);
    if (classicTitle) classicTitle.classList.toggle("clip-section__title--hidden", visibleClassic === 0);
    if (sectionDivider) {
      sectionDivider.classList.toggle("section-divider--hidden", visibleClassic === 0 || visibleRest === 0);
    }

    updateLabel(visibleTotal, isFiltering);
  }

  function initFilterDropdown() {
    if (!tagFilters) return;

    const toggle = tagFilters.querySelector(".filter-dropdown__toggle");
    const menu = tagFilters.querySelector(".filter-dropdown__menu");
    if (!toggle || !menu) return;

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
      if (!tagFilters.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    tagFilters.addEventListener("change", (event) => {
      if (event.target.matches(".tag-filter")) filterRows();
    });
  }

  if (input) input.addEventListener("input", filterRows);

  initFilterDropdown();
  updateFilterToggle([]);
  updateLabel(total, false);
});
