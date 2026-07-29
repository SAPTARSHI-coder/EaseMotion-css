# Scroll-Reveal Dynamic Node Tracking

## What does this do?

It introduces `MutationObserver` tracking to scroll-reveal (`core/reveal.js`) so that dynamically appended elements (`.ease-reveal`) are automatically observed and animated upon scrolling into view, resolving compatibility issues in single-page apps (SPAs) and dynamic components.

## How is it used?

Under the hood, `core/reveal.js` is updated to watch the DOM for new element insertions and automatically links them to the existing `IntersectionObserver`:

```javascript
if ("MutationObserver" in window && "IntersectionObserver" in window) {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.classList.contains("ease-reveal")) {
            intersectionObserver.observe(node);
          }
          var children = node.querySelectorAll(".ease-reveal");
          children.forEach(function (child) {
            intersectionObserver.observe(child);
          });
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
```

## Why is it useful?

It ensures that asynchronously loaded layouts, infinite scrolls, and page-routing in frameworks like React, Vue, or Svelte transition dynamically added components correctly without requiring a full page refresh.
