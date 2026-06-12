/**
 * EaseMotion CSS — Auto Stagger
 * Submission #4384
 *
 * Progressive enhancement strategy:
 *
 * TIER 1 — sibling-index() (Chrome 2026+, Firefox experimental)
 *   Pure CSS. animation-delay: calc(sibling-index() * var(--stagger-delay))
 *   The browser reads the DOM index natively. Zero JS for animation.
 *
 * TIER 2 — IntersectionObserver fallback (all other browsers)
 *   JS fires when the group enters the viewport, then applies
 *   inline animation-delay to each child based on its index.
 *   Matches the CSS behavior exactly.
 *
 * Usage:
 *   <div class="auto-stagger" style="--stagger-delay: 80ms">
 *     <div>Child 1</div>  <- delay: 0ms
 *     <div>Child 2</div>  <- delay: 80ms
 *     <div>Child 3</div>  <- delay: 160ms
 *   </div>
 */

(function () {
  "use strict";

  // Check native sibling-index() support
  const hasNative = CSS.supports(
    "animation-delay",
    "calc(sibling-index() * 1ms)"
  );

  // Animation hidden/visible states for fallback
  const animStates = {
    "auto-stagger--slide-up": {
      hidden: { opacity: "0", transform: "translateY(24px)" },
      visible: { opacity: "1", transform: "translateY(0)" },
    },
    "auto-stagger--slide-left": {
      hidden: { opacity: "0", transform: "translateX(-24px)" },
      visible: { opacity: "1", transform: "translateX(0)" },
    },
    "auto-stagger--fade": {
      hidden: { opacity: "0", transform: "none" },
      visible: { opacity: "1", transform: "none" },
    },
    "auto-stagger--zoom": {
      hidden: { opacity: "0", transform: "scale(0.88)" },
      visible: { opacity: "1", transform: "scale(1)" },
    },
    // Default
    default: {
      hidden: { opacity: "0", transform: "translateY(24px)" },
      visible: { opacity: "1", transform: "translateY(0)" },
    },
  };

  function getAnimState(group) {
    for (const key of Object.keys(animStates)) {
      if (key !== "default" && group.classList.contains(key)) {
        return animStates[key];
      }
    }
    return animStates.default;
  }

  function getDelay(group) {
    // Try CSS variable first
    const cssVal = getComputedStyle(group)
      .getPropertyValue("--stagger-delay")
      .trim();
    if (cssVal) {
      const ms = parseFloat(cssVal);
      return isNaN(ms) ? 80 : ms;
    }
    // Fallback to data attribute
    return parseInt(group.dataset.stagger, 10) || 80;
  }

  function initGroup(group) {
    // If native supported, CSS handles everything — just mark as ready
    if (hasNative) {
      group.classList.add("as-native");
      return;
    }

    // Fallback: IntersectionObserver
    const children = Array.from(group.children);
    const anim = getAnimState(group);
    const delayMs = getDelay(group);

    // Set initial hidden state
    children.forEach((child) => {
      Object.assign(child.style, anim.hidden);
      child.style.transition = "opacity 0.55s ease, transform 0.55s ease";
      child.style.willChange = "opacity, transform";
    });

    let fired = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !fired) {
            fired = true;
            observer.disconnect();

            children.forEach((child, i) => {
              setTimeout(() => {
                Object.assign(child.style, anim.visible);
                child.style.willChange = "auto";
              }, i * delayMs);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(group);
  }

  function init() {
    document.querySelectorAll(".auto-stagger").forEach(initGroup);
  }

  // MutationObserver for dynamic content
  const mo = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (node.classList?.contains("auto-stagger")) initGroup(node);
          node.querySelectorAll?.(".auto-stagger").forEach(initGroup);
        }
      });
    });
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      init();
      mo.observe(document.body, { childList: true, subtree: true });
    });
  } else {
    init();
    mo.observe(document.body, { childList: true, subtree: true });
  }

  // Public API
  window.EaseAutoStagger = { init, hasNative };
})();
