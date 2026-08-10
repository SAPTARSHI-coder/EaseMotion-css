/**
 * Accessible Keyboard Tabs — EaseMotion CSS
 *
 * This is the one piece of this submission that genuinely can't be done
 * in CSS: intercepting arrow-key presses and moving focus between tabs.
 * That's the actual bug this issue reports (#60880 — "Tab components
 * lack keyboard arrow key navigation support"), so faking a CSS-only fix
 * wouldn't actually fix it. Everything else — colors, spacing, the
 * sliding indicator's transition, the panel fade — stays in style.css;
 * this file only ever touches `aria-*`, `tabindex`, `hidden`, and the
 * indicator's transform/width.
 *
 * Implements the WAI-ARIA Authoring Practices Guide "Tabs" pattern with
 * automatic activation:
 * https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
 *
 *   ArrowRight / ArrowDown  → move to + select the next tab (wraps)
 *   ArrowLeft  / ArrowUp    → move to + select the previous tab (wraps)
 *   Home                    → move to + select the first tab
 *   End                     → move to + select the last tab
 *   Click                   → select that tab directly
 *
 * Roving tabindex: only the selected tab is in the Tab order
 * (tabindex="0"); every other tab is tabindex="-1" and reached with the
 * arrow keys instead, per the APG pattern — this is what lets a user
 * Tab into the widget once, then arrow around it, then Tab back out.
 *
 * Works on every `.ease-tabs` block on the page independently, so a
 * consumer can drop in more than one tab group without conflicts.
 */
 
(function () {
  function initTabs(root) {
    var tabs = Array.prototype.slice.call(
      root.querySelectorAll('[role="tab"]')
    );
    var indicator = root.querySelector(".ease-tabs__indicator");
 
    if (!tabs.length) return;
 
    function panelFor(tab) {
      return document.getElementById(tab.getAttribute("aria-controls"));
    }
 
    function moveIndicatorTo(tab) {
      if (!indicator) return;
      indicator.style.transform = "translateX(" + tab.offsetLeft + "px)";
      indicator.style.width = tab.offsetWidth + "px";
    }
 
    function selectTab(tab, options) {
      var focusToo = !options || options.focus !== false;
 
      tabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute("aria-selected", selected ? "true" : "false");
        t.tabIndex = selected ? 0 : -1;
 
        var panel = panelFor(t);
        if (panel) panel.hidden = !selected;
      });
 
      moveIndicatorTo(tab);
      if (focusToo) tab.focus();
    }
 
    function handleKeydown(event) {
      var currentIndex = tabs.indexOf(document.activeElement);
      if (currentIndex === -1) return;
 
      var targetIndex = null;
 
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          targetIndex = (currentIndex + 1) % tabs.length;
          break;
        case "ArrowLeft":
        case "ArrowUp":
          targetIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          break;
        case "Home":
          targetIndex = 0;
          break;
        case "End":
          targetIndex = tabs.length - 1;
          break;
        default:
          return; // not a key this widget cares about — let it bubble
      }
 
      event.preventDefault();
      selectTab(tabs[targetIndex]);
    }
 
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        selectTab(tab, { focus: false });
      });
    });
 
    root.addEventListener("keydown", handleKeydown);
 
    // Keep the indicator aligned if the layout reflows (font load,
    // window resize, wrapping to two rows on narrow viewports).
    window.addEventListener("resize", function () {
      var current = tabs.find(function (t) {
        return t.getAttribute("aria-selected") === "true";
      });
      if (current) moveIndicatorTo(current);
    });
 
    var initial =
      tabs.find(function (t) {
        return t.getAttribute("aria-selected") === "true";
      }) || tabs[0];
    moveIndicatorTo(initial);
  }
 
  document.querySelectorAll(".ease-tabs").forEach(initTabs);
})();
 