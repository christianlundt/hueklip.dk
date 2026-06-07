document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("clip-search");
  const label = document.querySelector('label[for="clip-search"]');
  const rows = Array.from(document.querySelectorAll(".clip-row-wrap"));
  const noResults = document.getElementById("no-results");
  const classicTitle = document.getElementById("classic-title");
  const sectionDivider = document.getElementById("section-divider");
  const countLabel = document.body.dataset.countLabel || "hue-klip";
  const total = rows.length;

  function updateLabel(visible, isSearching) {
    if (label) {
      label.textContent = `Søg i ${isSearching ? visible : total} ${countLabel}`;
    }
  }

  function filterRows() {
    const q = input.value.trim().toLowerCase();
    const isSearching = q.length > 0;
    let visibleClassic = 0;
    let visibleRest = 0;

    rows.forEach((row) => {
      const show = !q || row.textContent.toLowerCase().includes(q);
      row.hidden = !show;
      if (show) {
        if (row.dataset.classic === "true") visibleClassic++;
        else visibleRest++;
      }
    });

    const visibleTotal = visibleClassic + visibleRest;

    if (noResults) noResults.classList.toggle("visible", isSearching && visibleTotal === 0);
    if (classicTitle) classicTitle.classList.toggle("clip-section__title--hidden", visibleClassic === 0 || isSearching);
    if (sectionDivider) {
      sectionDivider.classList.toggle("section-divider--hidden", visibleClassic === 0 || visibleRest === 0 || isSearching);
    }

    updateLabel(visibleTotal, isSearching);
  }

  if (input) input.addEventListener("input", filterRows);
  updateLabel(total, false);
});
