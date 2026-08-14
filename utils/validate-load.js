/**
 * validateEaseMotionLoad — dev-mode helper to catch out-of-order CSS loading.
 * Checks whether core/variables.css loaded before this script runs, by
 * testing a sentinel custom property. Logs a console warning if missing.
 *
 * Usage: import and call once during development, e.g.
 *   import { validateEaseMotionLoad } from "./utils/validate-load.js";
 *   validateEaseMotionLoad();
 */
export function validateEaseMotionLoad() {
  if (typeof window === "undefined" || typeof getComputedStyle === "undefined") {
    return;
  }

  const sentinelValue = getComputedStyle(document.documentElement)
    .getPropertyValue("--ease-version")
    .trim();

  if (!sentinelValue) {
    console.warn(
      "[EaseMotion] core/variables.css does not appear to be loaded, or " +
      "loaded after other EaseMotion files. All var(--ease-*) properties " +
      "will silently resolve to initial values. Check your <link> order — " +
      "variables.css must load first."
    );
  }
}
