# CSS Hover Pagination

An elegant, semantic, and highly performant pagination component featuring a smooth, elastic zoom background hover interaction. Built with **Zero JavaScript**, vanilla CSS, and accessibility-first practices.

---

## Features

- **Elastic Background Highlight:** A smooth, spring-like background circular highlight scales up behind numbers and controls on hover or keyboard focus.
- **Active Pagination Indicator:** The active page utilizes an `aria-current="page"` selector to apply a solid, high-visibility brand background style.
- **Dark Mode Support:** Built with CSS Custom Properties that automatically swap colors using standard media preferences (`prefers-color-scheme`).
- **Responsive Stacking:** Uses responsive element rules to hide mid-range pagination numbers on narrow/mobile viewports, preventing horizontal scrolling or layout wrapping.
- **Hardware-Accelerated:** Transitions animate only `transform: scale()` and `opacity` to run exclusively on the browser's compositor thread (GPU), keeping interactions at a solid 60 FPS.
- **Reduced Motion Friendly:** Detects `prefers-reduced-motion: reduce` and strips scale animations entirely, transitioning cleanly via instant opacity fades.
- **A11y Compliant:** Employs explicit `:focus-visible` outline rings with offsets, semantic container tags, and ARIA state labels.

---

## HTML Structure

The component uses clean, semantic HTML5 elements:

```html
<nav class="ehp-nav" aria-label="Pagination Navigation">
  <ul class="ehp-list">
    <!-- Previous Link -->
    <li class="ehp-item">
      <a href="#prev" class="ehp-btn ehp-btn--wide" aria-label="Previous page">
        <span>&larr; Prev</span>
      </a>
    </li>

    <!-- Page Items -->
    <li class="ehp-item">
      <a href="#page1" class="ehp-btn">
        <span>1</span>
      </a>
    </li>
    <li class="ehp-item">
      <a href="#page2" class="ehp-btn" aria-current="page">
        <span>2</span>
      </a>
    </li>
    <li class="ehp-item">
      <a href="#page3" class="ehp-btn ehp-btn--responsive-hide">
        <span>3</span>
      </a>
    </li>

    <!-- Ellipsis -->
    <li class="ehp-item" aria-hidden="true">
      <span class="ehp-ellipsis">...</span>
    </li>

    <li class="ehp-item">
      <a href="#page10" class="ehp-btn">
        <span>10</span>
      </a>
    </li>

    <!-- Next Link -->
    <li class="ehp-item">
      <a href="#next" class="ehp-btn ehp-btn--wide" aria-label="Next page">
        <span>Next &rarr;</span>
      </a>
    </li>
  </ul>
</nav>
```

---

## CSS Classes

| Class Name                  | Type     | Description                                                                   |
| :-------------------------- | :------- | :---------------------------------------------------------------------------- |
| `.ehp-pagination-wrapper`   | Scope    | Root reset class to isolate font weights and metrics.                         |
| `.ehp-nav`                  | Block    | Semantic `<nav>` packaging container.                                         |
| `.ehp-list`                 | Element  | Flex-aligned row list of pagination items.                                    |
| `.ehp-item`                 | Element  | Individual page container.                                                    |
| `.ehp-btn`                  | Element  | Interactive click/tap controls (handles circles and scaling backgrounds).     |
| `.ehp-btn--wide`            | Modifier | Expanded horizontal capsule design used for "Prev" and "Next" text tags.      |
| `.ehp-btn--responsive-hide` | Utility  | Hides elements on viewports `< 520px` to maintain a compact mobile footprint. |
| `.ehp-ellipsis`             | Element  | Styled indicator dots representing collapsed ranges.                          |

---

## Interaction Mechanics & Preferences

### Hover & Focus Transitions

Hover indicators animate the `::before` pseudo-element from `transform: scale(0)` to `transform: scale(1)`. The transition timing curve uses a spring-like cubic bezier curve:
`transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`.

### Reduced Motion Settings

If users prefer decreased motion, the CSS resets translation parameters to preserve comfort:

```css
@media (prefers-reduced-motion: reduce) {
  .ehp-btn::before {
    transform: scale(0) !important;
    transition: opacity 0.08s ease !important;
  }
  .ehp-btn:hover::before {
    transform: none !important;
    opacity: 1 !important;
  }
}
```

### Accessibility Outline Rings

Visible keyboard focus rings apply explicitly on focus tabs:

```css
.ehp-btn:focus-visible {
  outline: 2px solid var(--ehp-focus-ring);
  outline-offset: 2px;
}
```

This guarantees mouse-users don't see distracting rings while keyboard navigators get visible tab focus paths.
