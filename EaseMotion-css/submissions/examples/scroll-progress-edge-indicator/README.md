# Scroll Progress Edge Indicator

A lightweight scroll progress utility that displays the user's reading
progress along the edge of the viewport.

## What does it do?

The indicator fills vertically as the user moves through the document.

It:

- Tracks the current document scroll position.
- Updates as the user scrolls up or down.
- Uses a fixed edge position so it remains visible.
- Requires no external libraries or assets.
- Respects `prefers-reduced-motion`.

## How do I use it?

Add the indicator markup:

```html
<div class="scroll-progress" aria-hidden="true">
  <span class="scroll-progress__bar"></span>
</div>
```
The progress element can then be styled with:

.scroll-progress {
  position: fixed;
  top: 0;
  right: 0;
  width: 5px;
  height: 100vh;
}

.scroll-progress__bar {
  display: block;
  width: 100%;
  height: 0;
}

A small JavaScript handler calculates the percentage of the document that has
been scrolled:

const scrollableHeight =
  document.documentElement.scrollHeight - window.innerHeight;

const progress =
  scrollableHeight > 0
    ? (window.scrollY / scrollableHeight) * 100
    : 0;

progressBar.style.height = `${progress}%`;
Why use it?

The utility is useful for:

Long-form articles
Documentation pages
Portfolios
Tutorials
Product pages
Landing pages

The demo is completely self-contained and works by opening demo.html
directly in a browser.

