# Draw-Border Line Accordion for Product Catalog Layouts

A pure CSS animated accordion utilizing a smooth draw-border line transition, designed to complement product catalog interfaces. Zero JavaScript, fully responsive, keyboard accessible, and exposes custom parameters via standard CSS custom properties.

---

## 1. What does this do?

It creates an interactive product accordion where each item's border draws itself in two stages (top-right, then bottom-left) on hover, focus, or open — while smoothly expanding to reveal rich product details, all using only pure HTML and CSS.

---

## 2. How is it used?

The component uses a hidden checkbox pattern combined with two pseudo-element borders animated via `clip-path` to achieve the draw effect. Wrap each product in an `.accordion-item` container.

### Basic HTML structure:

```html
<div class="accordion-item">
  <input type="checkbox" id="acc-1" class="accordion-toggle" />
  <label for="acc-1" class="accordion-header" role="button" tabindex="0">
    <span class="product-meta">
      <span class="product-tag">New</span>
      <span class="product-title">Product Name</span>
    </span>
    <span class="product-price">$249</span>
    <span class="accordion-icon" aria-hidden="true"></span>
  </label>

  <div class="accordion-body">
    <div class="accordion-content">
      <p>Product description...</p>
      <ul class="feature-list">
        <li>Feature one</li>
        <li>Feature two</li>
      </ul>
      <button type="button" class="cta-btn">Add to Cart →</button>
    </div>
  </div>
</div>
```

### Customization via CSS Custom Properties:

You can override any of these variables on `:root` or on a specific `.accordion-item` to fine-tune behavior:

| Custom Property         | Default                              | Description                          |
| ----------------------- | ------------------------------------ | ------------------------------------ |
| `--draw-duration`       | `0.7s`                               | Duration of the border-draw animation |
| `--draw-easing`         | `cubic-bezier(0.77, 0, 0.175, 1)`    | Easing curve for the border draw     |
| `--expand-duration`     | `0.5s`                               | Duration of the content expansion    |
| `--expand-easing`       | `cubic-bezier(0.4, 0, 0.2, 1)`       | Easing curve for expansion           |
| `--border-width`        | `2px`                                | Thickness of the animated border     |
| `--item-radius`         | `12px`                               | Border radius of accordion items     |
| `--item-max-height`     | `500px`                              | Max expanded height per item         |

### Example — Override for a slower, thicker border draw:

```css
.accordion-item {
  --draw-duration: 1.2s;
  --border-width: 3px;
}
```

---

## 3. Why is it useful?

This component fits **EaseMotion CSS's philosophy** in several important ways:

- **Zero JavaScript overhead** — pure CSS interaction using the checkbox-hack pattern keeps bundles lean and aligns with EaseMotion's animation-first philosophy.
- **Unique visual signature** — the two-stage border-draw effect (via animated `clip-path` on pseudo-elements) is instantly recognizable and elevates ordinary product lists into a premium catalog experience.
- **Highly reusable primitive** — works for product catalogs, FAQ sections, feature comparison lists, pricing tiers, and settings panels.
- **Fully accessible** — includes `role="button"`, `tabindex="0"`, `aria-label` attributes, visible `:focus-visible` outlines, animated chevron indicator, and honors `prefers-reduced-motion`.
- **Responsive by default** — adapts gracefully from mobile to desktop with flex-based header layout and appropriate padding adjustments.
- **Extensible via custom properties** — designers can restyle timing, easing, border thickness, and radius without touching the core CSS.
- **Modern aesthetic** — dark theme with an accent teal border, gradient tags, and smooth cubic-bezier easing feel premium out of the box.

It fills a highly requested modern UI pattern in the EaseMotion examples library, giving contributors a proven starting point for animation-driven catalog and list interfaces.

---

## Accessibility Notes

- Every accordion header includes `role="button"` and `tabindex="0"` so keyboard users can `Tab` through them.
- Focus states use `:focus-visible` so mouse users aren't distracted by outlines, but keyboard users get clear feedback.
- The chevron icon animates from `+` to `×` on expand, providing a clear visual state indicator alongside the border draw.
- The border-draw and expand animations respect the user's `prefers-reduced-motion` preference and reduce to `0.01ms` when requested.
- Semantic markup preserves heading structure and screen-reader accessibility.

---

## Browser Support

Works in all modern browsers that support CSS `clip-path`, `:has()`, and `:focus-visible`:
- Chrome / Edge 105+
- Firefox 121+
- Safari 15.4+

*Note: The `:has()` selector powers the focus/checked border draw; older browsers will still show the hover animation but may skip the focus-triggered draw.*

---

## Author

Submitted by [@soumyasekharshee265-ux](https://github.com/soumyasekharshee265-ux) for issue [#33185](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/33185).
