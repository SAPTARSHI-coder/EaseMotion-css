# CSS Staggered Entrance Accordion — Interactive Interface Layout

A pure CSS accordion where items animate into view one after another on page load, using incremental `:nth-child()` animation delays.

## CSS Custom Properties

| Property                            | Default   | Description                          |
|----------------------------------------|-----------|------------------------------------------|
| `--ease-accordion-stagger-delay`       | `80ms`    | Base delay multiplied per item index       |
| `--ease-accordion-entrance-duration`   | `0.5s`    | Entrance animation duration                |
| `--ease-accordion-entrance-easing`     | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrance easing curve |
| `--ease-accordion-bg`                  | `#ffffff` | Item background color                      |
| `--ease-accordion-accent`              | `#4f46e5` | Icon and focus ring color                  |
| `--ease-accordion-radius`              | `12px`    | Item corner radius                         |

## Usage

```html
<div class="ease-accordion">
  <div class="ease-accordion__item"> <!-- 1st item, no extra delay needed -->
    <button class="ease-accordion__header" aria-expanded="false">Question 1</button>
    <div class="ease-accordion__panel">...</div>
  </div>
  <div class="ease-accordion__item"> <!-- 2nd item, delayed automatically -->
    <button class="ease-accordion__header" aria-expanded="false">Question 2</button>
    <div class="ease-accordion__panel">...</div>
  </div>
</div>
```

Stagger delays are wired via `:nth-child(1)` through `:nth-child(5)` by default — extend the CSS with more `:nth-child` rules for longer lists.

## Accessibility

- Entrance animation is purely visual and doesn't affect interactivity — accordion items are immediately clickable even mid-animation.
- Native `<button>` headers with `aria-expanded`.
- `prefers-reduced-motion: reduce` disables the entrance animation entirely (items render fully visible immediately).

## Why it fits EaseMotion CSS

Uses `ease-` prefixed classes and a CSS custom property for stagger timing, consistent with the framework's zero-dependency philosophy. Demonstrates a common "cascading reveal" pattern achievable with pure CSS `:nth-child` delays, no JS orchestration needed.
