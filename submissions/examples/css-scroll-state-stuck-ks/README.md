# CSS scroll-state(stuck:) Container Query

Demonstrates the `@container scroll-state(stuck:)` feature — a cutting-edge CSS container query that detects when `position: sticky` elements are actively stuck to their scroll container. Zero JavaScript.

## What does this do?

Three practical demos showing how `scroll-state(stuck:)` replaces IntersectionObserver and scroll events with pure CSS:

1. **Sticky section headers** — headers change color and show a STUCK indicator when pinned to the top
2. **Sticky table of contents** — TOC items auto-highlight as the current section
3. **Sticky table headers** — table header row transforms when stuck during scroll

## How is it used?

```html
<link rel="stylesheet" href="style.css">

<div class="scroll-container">
  <div class="section-header">Section Title</div>
  <div class="section-body">...</div>
</div>
```

```css
.scroll-container {
  container-type: scroll-state;
  container-name: scroller;
  overflow-y: auto;
  max-height: 600px;
}

.section-header {
  position: sticky;
  top: 0;
}

@container scroller scroll-state(stuck: top) {
  .section-header {
    background: var(--accent);
    color: white;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
  }
}
```

## Why is it useful?

Before `scroll-state()`, detecting a stuck element required JavaScript (`IntersectionObserver` with `rootMargin`, or scroll event listeners with `getBoundingClientRect()`). This CSS-only approach:

- Works entirely on the compositor thread — zero main-thread cost
- No JavaScript, no observers, no event listeners
- Reacts instantly to scroll position changes
- Falls back gracefully in unsupported browsers (sticky still works, just without visual changes)

Fits the EaseMotion philosophy: expressive, readable CSS that describes intent without imperative code.

## Browser Support

Currently requires Chrome 133+ with `#enable-experimental-web-platform-features` flag. Expected to ship broadly as part of the CSS scroll-state container queries specification.
