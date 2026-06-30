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
});
