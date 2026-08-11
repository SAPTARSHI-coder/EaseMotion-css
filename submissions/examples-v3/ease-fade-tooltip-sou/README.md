# Fade-In Tooltip for Responsive Dashboard Layouts

A pure CSS animated tooltip utilizing a smooth fade-in transition with subtle scale and translate motion, designed to complement responsive dashboard interfaces. Zero JavaScript, fully responsive, keyboard accessible, and exposes custom parameters via standard CSS custom properties.

---

## 1. What does this do?

It attaches an elegant fade-in tooltip to any element using simple `data-tooltip` attributes, supporting four directional positions (top, right, bottom, left), triggered on both hover and keyboard focus — all using only pure HTML and CSS.

---

## 2. How is it used?

The component uses `data-tooltip` and `data-tooltip-pos` attributes combined with `::before` and `::after` pseudo-elements. No wrapper markup is needed — just add attributes to any element.

### Basic HTML structure:

```html
<!-- Default (top) tooltip -->
<button data-tooltip="Save your work">Save</button>

<!-- Tooltip with explicit position -->
<button data-tooltip="Delete this item" data-tooltip-pos="bottom">Delete</button>
<button data-tooltip="Open menu" data-tooltip-pos="right">Menu</button>
<button data-tooltip="Back to top" data-tooltip-pos="left">Top</button>

<!-- Info icon on a metric card -->
<span
  class="info-icon"
  data-tooltip="Sum of all confirmed sales in the last 30 days"
  data-tooltip-pos="top"
  tabindex="0"
  role="button"
  aria-label="Info: Total Revenue"
>i</span>
```

### Supported positions:

| `data-tooltip-pos` | Behavior                                  |
| ------------------ | ----------------------------------------- |
| `top` *(default)*  | Tooltip appears above the anchor          |
| `bottom`           | Tooltip appears below the anchor          |
| `right`            | Tooltip appears to the right of the anchor |
| `left`             | Tooltip appears to the left of the anchor  |

### Customization via CSS Custom Properties:

You can override any of these variables on `:root` or on a specific element to fine-tune behavior:

| Custom Property           | Default                              | Description                          |
| ------------------------- | ------------------------------------ | ------------------------------------ |
| `--tooltip-duration`      | `0.25s`                              | Duration of the fade-in animation    |
| `--tooltip-delay`         | `0.15s`                              | Delay before the tooltip appears     |
| `--tooltip-easing`        | `cubic-bezier(0.4, 0, 0.2, 1)`       | Easing curve for the transition      |
| `--tooltip-offset`        | `10px`                               | Distance from the anchor element     |
| `--tooltip-translate`     | `6px`                                | Distance of the slide-in motion      |
| `--tooltip-scale-start`   | `0.96`                               | Initial scale before appearing       |
| `--tooltip-radius`        | `6px`                                | Border radius of the tooltip bubble  |
| `--tooltip-max-width`     | `220px`                              | Maximum width of the tooltip         |
| `--tooltip-font-size`     | `0.8rem`                             | Font size inside the tooltip         |
| `--tooltip-padding`       | `0.55rem 0.8rem`                     | Inner padding of the tooltip         |
| `--tooltip-bg`            | `#ffffff`                            | Background color of the tooltip      |
| `--tooltip-color`         | `#0e1220`                            | Text color of the tooltip            |
| `--tooltip-shadow`        | `0 10px 25px rgba(0,0,0,0.45)`       | Drop shadow of the tooltip           |

### Example — Override for a slower, darker tooltip:

```css
:root {
  --tooltip-duration: 0.4s;
  --tooltip-delay: 0.3s;
  --tooltip-bg: #1f2540;
  --tooltip-color: #ffffff;
}
```

---

## 3. Why is it useful?

This component fits **EaseMotion CSS's philosophy** in several important ways:

- **Zero JavaScript overhead** — pure CSS interaction via pseudo-elements and `attr()` keeps bundles lean and aligns with EaseMotion's animation-first philosophy.
- **Attribute-driven API** — the `data-tooltip` + `data-tooltip-pos` pattern is instantly familiar (used by Bootstrap, Tippy.js, etc.) and requires zero wrapper markup.
- **Highly reusable primitive** — works on buttons, icons, links, form fields, table cells, and any element that can host pseudo-elements.
- **Fully accessible** — triggers on both `:hover` and `:focus-visible` (keyboard), supports `tabindex="0"` + `role="button"` + `aria-label` on non-interactive elements, and honors `prefers-reduced-motion`.
- **Responsive by default** — the tooltip bubble uses `max-width` and `width: max-content` to gracefully wrap long text, with mobile-tuned sizes at smaller viewports.
- **Extensible via custom properties** — 13 CSS variables let designers restyle timing, easing, offset, dimensions, colors, and shadow without touching the core CSS.
- **Four-direction support** — top, right, bottom, and left positioning cover every common dashboard layout scenario.
- **Modern aesthetic** — subtle scale + translate motion feels premium and non-intrusive, with a clean directional arrow via a second pseudo-element.

It fills a highly requested modern UI pattern in the EaseMotion examples library, giving contributors a proven starting point for interactive dashboard and admin interfaces.

---

## Accessibility Notes

- Tooltips trigger on **both** `:hover` (mouse) and `:focus-visible` (keyboard), ensuring keyboard-only users get the same information as mouse users.
- Non-interactive elements (like the metric info icons) include `tabindex="0"`, `role="button"`, and `aria-label` so screen readers announce them properly.
- Tooltips include a small **delay** before appearing (`--tooltip-delay: 0.15s`), preventing accidental triggering during quick cursor sweeps.
- The tooltip content lives in the DOM via `attr(data-tooltip)`, making it readable by screen readers when focused.
- The fade-in animation respects the user's `prefers-reduced-motion` preference and reduces to `0.01ms` when requested.

---

## Browser Support

Works in all modern browsers that support CSS `attr()`, `:focus-visible`, and pseudo-element transitions:
- Chrome / Edge 88+
- Firefox 85+
- Safari 15.4+

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux) for issue [#34258](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/34258).
