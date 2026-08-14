# Animated Progress Bars

Scroll-triggered progress bars for dashboards, skill sections, and
form validation summaries. Each bar fills — and its percentage label
counts up — only once it scrolls into view, using
`IntersectionObserver`. The fill motion itself is a pure CSS
transition.

## How it works

### Markup

Each bar declares its target percentage as a data attribute — nothing
else needs to be precomputed:

```html
<div class="progress-bar" data-progress data-value="72">
  <div class="progress-bar__label">
    <span>JavaScript</span>
    <span class="progress-bar__percent" data-percent>0%</span>
  </div>
  <div class="progress-bar__track">
    <div class="progress-bar__fill" data-fill></div>
  </div>
</div>
```

### Scroll trigger

One `IntersectionObserver` watches every `[data-progress]` element. The
first time a bar crosses 40% into view, its fill width is set to the
target percentage (which CSS then animates via `transition: width`),
and the observer stops watching that bar — so scrolling past it again
doesn't replay the animation:

```js
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    var bar = entry.target;
    var value = bar.getAttribute("data-value");
    bar.querySelector("[data-fill]").style.width = value + "%";
    observer.unobserve(bar);
  });
}, { threshold: 0.4 });
```

### Counting label

The percentage label counts up from 0 to its target value over the
same duration as the fill, using `requestAnimationFrame` — this is the
only piece of custom JS animation in the demo; everything visual
(the fill itself) stays in CSS.

## Usage

Add a new bar by copying the markup block above and changing three
things: the `data-value`, the label text, and nothing else — the
script auto-discovers every `[data-progress]` element on the page.

## Why it fits EaseMotion CSS

The fill motion — the actual visual animation — is a single CSS
`transition` on `width`. JavaScript only decides *when* to reveal each
bar and *what* value to count toward; it never animates anything
itself. That mirrors EaseMotion's separation of orchestration (JS) from
motion (CSS), and the component is a single composable block with no
external dependencies.

## Accessibility

- `@media (prefers-reduced-motion: reduce)` disables the fill
  transition and skips the counting animation — the bar and label jump
  straight to their final values instead.
- Bars use plain semantic markup with visible text labels, so screen
  readers announce both the skill name and its percentage as normal
  page content.

## Files

- `demo.html` — four sample skill bars, a scroll spacer to demonstrate
  the trigger, and the `IntersectionObserver` + counting-label script.
- `style.css` — track, fill, gradient, and label styling.
- `README.md` — this file.
