/**
 * EaseMotion Framework Patch: Accessible Tooltips
 * Solves the critical WCAG failure where CSS pseudo-element tooltips
 * are ignored by screen readers and cannot be focused via keyboard.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Find all tooltips in the DOM
  const tooltips = document.querySelectorAll(".ease-tooltip");

  tooltips.forEach((tooltip) => {
    // 1. Make the tooltip keyboard focusable if it isn't already
    if (!tooltip.hasAttribute("tabindex")) {
      tooltip.setAttribute("tabindex", "0");
    }

    // 2. Inject screen-reader-only text so assistive tech can read the tooltip
    const tooltipText = tooltip.getAttribute("data-tooltip");

    // Prevent duplicating the span if the script runs multiple times
    if (tooltipText && !tooltip.querySelector(".ease-sr-only-tooltip")) {
      const srSpan = document.createElement("span");

      // Use the framework's built-in .ease-sr-only utility class!
      srSpan.className = "ease-sr-only ease-sr-only-tooltip";
      srSpan.textContent = ` (Tooltip: ${tooltipText})`;

      tooltip.appendChild(srSpan);
    }
  });
});
