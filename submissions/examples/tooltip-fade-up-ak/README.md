# Tooltip with Fade-In-Up Animation

Closes #56638

### What does this do?
A pure CSS tooltip component built with `::before`/`::after` pseudo-elements, using a `data-tooltip` attribute for the label. It fades and slides up into view on hover or focus.

### How is it used?
```html
<button class="tooltip-trigger" data-tooltip="This is a helpful tip!">
  Hover me
</button>
```

### Why is it useful?
No JavaScript or extra markup is needed — the tooltip text lives in a `data-tooltip` attribute and is rendered via `::before`, with `::after` forming the arrow. The fade-in-up entrance gives it a polished, EaseMotion-style feel, and it's keyboard-accessible via `:focus-visible` and respects `prefers-reduced-motion`.
