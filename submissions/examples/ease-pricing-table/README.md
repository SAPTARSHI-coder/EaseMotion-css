# EaseMotion — `ease-pricing-table`

Interactive pricing comparison cards for showcasing subscription plans side-by-side.

---

## Features

- **Flexible grid layout** — cards wrap naturally, responsive by default
- **Featured card** — highlight a recommended plan with `featured` class and badge
- **Hover lift** — cards elevate on hover with shadow
- **Feature list** — checkmarks via CSS `mask` icons (no external assets)
- **3 button styles** — primary, outline, ghost
- **Uses design tokens** — references `--ease-color-*`, `--ease-space-*`, `--ease-shadow-*`
- **Dark mode** — automatic via `prefers-color-scheme: dark`
- **Reduced motion** — disables hover transitions when `prefers-reduced-motion: reduce`

---

## Usage

```html
<div class="ease-pricing-table">
  <div class="ease-pricing-card">
    <h2 class="ease-pricing-name">Starter</h2>
    <div class="ease-pricing-price">
      $9 <span class="ease-pricing-period">/month</span>
    </div>
    <ul class="ease-pricing-features">
      <li>5 Projects</li>
      <li class="na">Advanced Analytics</li>
    </ul>
    <button class="ease-pricing-btn ease-pricing-btn--primary">
      Get Started
    </button>
  </div>

  <!-- Featured card -->
  <div class="ease-pricing-card featured">
    <span class="ease-pricing-badge">Most Popular</span>
    <h2 class="ease-pricing-name">Pro</h2>
    ...
  </div>
</div>
```

### Marking features as unavailable

Add `class="na"` to any `<li>` to show a cross icon instead of a checkmark:

```html
<li class="na">Custom Domain</li>
```

---

## CSS Variables

| Variable                  | Default | Description                        |
| ------------------------- | ------- | ---------------------------------- |
| `--ease-pricing-card-min` | `260px` | Minimum card width before wrapping |

---

## Why does it fit EaseMotion CSS?

Pricing tables are a common UI pattern for SaaS products, developer tools, and subscription services. This component provides a polished, interactive layout that follows the framework's animation-first approach with hover lifts and featured card emphasis.

---

## Files

1. **`style.css`** — component CSS with card layout, badges, feature icons, buttons
2. **`demo.html`** — interactive demo (Starter, Pro, Enterprise plans)
3. **`README.md`** — documentation and usage examples

---

## Notes

- Feature check/cross icons use CSS `mask` with inline SVG data URIs — no icon library required.
- The `.featured` class adds a primary-colour border and elevated shadow. Add the badge element for the label.
- Cards use `flex: 1` with `min-width` — they stack vertically on narrow screens automatically.
