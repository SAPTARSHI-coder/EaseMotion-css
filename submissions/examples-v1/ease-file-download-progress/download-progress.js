/**
 * Ease File Download Progress
 * Demo-only simulation of a download progressing from 0–100%.
 * All visual states (fill, shimmer, completion) are CSS-driven via
 * the --fill-percent custom property and the .is-complete class.
 */
(function () {
  const container = document.querySelector(".ease-download");
  if (!container) return;

  const fill = container.querySelector(".download-fill");
  const percentLabel = container.querySelector(".download-percent");
  const statusLabel = container.querySelector(".file-status");

  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 12 + 4;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      container.classList.add("is-complete");
      statusLabel.textContent = "Download complete";
    } else {
      statusLabel.textContent = `Downloading… ${Math.round(progress)}%`;
    }

    fill.style.setProperty("--fill-percent", `${progress}%`);
    fill.style.transform = `scaleX(${progress / 100})`;
    percentLabel.textContent = `${Math.round(progress)}%`;
  }, 400);
})();