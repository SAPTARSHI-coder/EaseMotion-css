/**
 * copy.js — Accessible copy-to-clipboard handler
 *
 * Responsibilities:
 *  1. Copy the text in `data-copy` to the clipboard.
 *  2. Give visual feedback via a CSS class on the button.
 *  3. Announce "Copied!" to screen readers via an aria-live region.
 *
 * No external dependencies. Works by opening the file directly in a browser.
 */

(function () {
  "use strict";

  /** Writes `text` to the clipboard. Returns a Promise<boolean>. */
  async function copyText(text) {
    // Prefer the modern Clipboard API (requires a secure context or user gesture).
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // Fall through to the legacy approach below.
      }
    }

    // Legacy fallback: create a temporary textarea, select its content, copy.
    const textarea = document.createElement("textarea");
    textarea.value = text;
    // Position off-screen so it is invisible but still selectable.
    textarea.style.cssText =
      "position:fixed;top:-9999px;left:-9999px;opacity:0;";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    let success = false;
    try {
      success = document.execCommand("copy");
    } catch (_) {
      // execCommand is deprecated in some browsers; failure is handled below.
    }

    document.body.removeChild(textarea);
    return success;
  }

  /** Announce a message via the aria-live region for screen readers. */
  function announce(message) {
    const region = document.getElementById("copy-announcement");
    if (!region) return;

    // Clear first so repeated copies are re-announced even if the text is the same.
    region.textContent = "";

    // A brief timeout lets assistive technology register the cleared state
    // before the new message is inserted.
    setTimeout(function () {
      region.textContent = message;
    }, 50);
  }

  /** Attach click listeners to every button that has a [data-copy] attribute. */
  function initCopyButtons() {
    var buttons = document.querySelectorAll("[data-copy]");

    buttons.forEach(function (button) {
      button.addEventListener("click", async function () {
        var textToCopy = button.getAttribute("data-copy");
        if (!textToCopy) return;

        var success = await copyText(textToCopy);

        if (!success) {
          // If copying truly failed, let the user know.
          announce("Copy failed. Please copy manually.");
          return;
        }

        // ── Visual feedback ──────────────────────────────────────
        var originalLabel = button.getAttribute("aria-label");
        var originalText = button.textContent.trim();

        button.classList.add("is-copied");

        // Update the aria-label so screen readers announce the "Copied!" state.
        if (originalLabel) {
          button.setAttribute("aria-label", originalLabel + " — Copied!");
        }
        button.textContent = "✓ Copied!";

        // ── Screen-reader announcement ───────────────────────────
        // Announce what was copied so users do not have to infer it.
        var copyTarget = originalLabel
          ? originalLabel.replace(/^Copy\s+/i, "") // e.g. "--ease-speed-fast variable"
          : textToCopy;
        announce("Copied " + copyTarget);

        // ── Reset after 2 s ──────────────────────────────────────
        setTimeout(function () {
          button.classList.remove("is-copied");
          button.textContent = originalText;

          if (originalLabel) {
            button.setAttribute("aria-label", originalLabel);
          }
        }, 2000);
      });
    });
  }

  // Run after the DOM is ready.
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCopyButtons);
  } else {
    initCopyButtons();
  }
})();
