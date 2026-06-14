(function () {
  "use strict";

  const ACTIVE_CLASS = "is-active";
  const OVERLAY_SELECTOR = ".ease-modal-overlay";
  const MODAL_SELECTOR = ".ease-modal";
  const FOCUSABLE_SELECTOR = [
    "a[href]",
    "button:not([disabled])",
    "textarea:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ].join(", ");

  let activeOverlay = null;
  let previouslyFocused = null;

  function getOverlayFromTarget(target) {
    if (!target) return null;

    const value = target.trim();
    if (!value) return null;

    const id = value.charAt(0) === "#" ? value.slice(1) : value;
    const byId = document.getElementById(id);
    if (byId && byId.matches(OVERLAY_SELECTOR)) {
      return byId;
    }

    try {
      const bySelector = document.querySelector(value);
      return bySelector && bySelector.matches(OVERLAY_SELECTOR)
        ? bySelector
        : null;
    } catch (e) {
      return null;
    }
  }

  function getFocusableElements(overlay) {
    return Array.from(overlay.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
      (element) => {
        return (
          !element.hasAttribute("disabled") &&
          element.getAttribute("aria-hidden") !== "true"
        );
      }
    );
  }

  function focusModal(overlay) {
    const modal = overlay.querySelector(MODAL_SELECTOR);
    if (!modal) return;

    if (!modal.hasAttribute("tabindex")) {
      modal.setAttribute("tabindex", "-1");
    }

    modal.focus({ preventScroll: true });
  }

  function setBodyLock() {
    const hasActiveModal = document.querySelector(
      OVERLAY_SELECTOR + "." + ACTIVE_CLASS
    );
    document.body.style.overflow = hasActiveModal ? "hidden" : "";
  }

  function openModal(overlay) {
    if (!overlay || !overlay.matches(OVERLAY_SELECTOR)) return;

    if (activeOverlay && activeOverlay !== overlay) {
      closeModal(activeOverlay, { restoreFocus: false });
    }

    previouslyFocused = document.activeElement;
    activeOverlay = overlay;
    overlay.classList.add(ACTIVE_CLASS);
    overlay.setAttribute("aria-hidden", "false");
    setBodyLock();
    focusModal(overlay);
  }

  function closeModal(overlay, options) {
    const modalOverlay = overlay || activeOverlay;
    const shouldRestoreFocus = !options || options.restoreFocus !== false;

    if (!modalOverlay || !modalOverlay.matches(OVERLAY_SELECTOR)) return;

    modalOverlay.classList.remove(ACTIVE_CLASS);
    modalOverlay.setAttribute("aria-hidden", "true");

    if (activeOverlay === modalOverlay) {
      activeOverlay = null;
    }

    setBodyLock();

    if (
      shouldRestoreFocus &&
      previouslyFocused &&
      typeof previouslyFocused.focus === "function"
    ) {
      previouslyFocused.focus({ preventScroll: true });
    }
  }

  function handleOpenClick(event) {
    const trigger = event.target.closest("[data-modal-target]");
    if (!trigger) return false;

    const overlay = getOverlayFromTarget(
      trigger.getAttribute("data-modal-target")
    );
    if (!overlay) return false;

    event.preventDefault();
    openModal(overlay);
    return true;
  }

  function handleCloseClick(event) {
    const closeControl = event.target.closest(
      "[data-modal-close], .ease-modal-close"
    );
    if (!closeControl) return false;

    const overlay = closeControl.closest(OVERLAY_SELECTOR);
    if (!overlay) return false;

    event.preventDefault();
    closeModal(overlay);
    return true;
  }

  function handleTabKey(event) {
    const focusableElements = getFocusableElements(activeOverlay);

    if (focusableElements.length === 0) {
      event.preventDefault();
      focusModal(activeOverlay);
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  function initializeModals() {
    const overlays = document.querySelectorAll(OVERLAY_SELECTOR);

    overlays.forEach((overlay) => {
      if (!overlay.hasAttribute("aria-hidden")) {
        overlay.setAttribute(
          "aria-hidden",
          overlay.classList.contains(ACTIVE_CLASS) ? "false" : "true"
        );
      }

      if (overlay.classList.contains(ACTIVE_CLASS)) {
        activeOverlay = overlay;
      }
    });

    setBodyLock();
  }

  document.addEventListener("click", function (event) {
    if (handleOpenClick(event)) return;
    handleCloseClick(event);
  });

  document.addEventListener("keydown", function (event) {
    if (!activeOverlay) return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeModal(activeOverlay);
    } else if (event.key === "Tab") {
      handleTabKey(event);
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeModals);
  } else {
    initializeModals();
  }

  window.EaseMotionModal = {
    open(target) {
      openModal(
        typeof target === "string" ? getOverlayFromTarget(target) : target
      );
    },
    close(target) {
      closeModal(
        typeof target === "string" ? getOverlayFromTarget(target) : target
      );
    },
    getActive() {
      return activeOverlay;
    },
  };
})();
