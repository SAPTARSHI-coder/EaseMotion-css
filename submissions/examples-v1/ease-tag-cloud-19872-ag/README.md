# Animated Tag Cloud Component

This submission implements the `ease-tag-cloud` component — a flexible, animated tag cloud where each tag's visual weight (size and opacity) is driven by the `--ease-tag-weight` CSS custom property (1–5), with staggered entrance animations and an elastic hover interaction.

---

## How Weight Sizing Works

The `--ease-tag-weight` variable (1–5) is set directly on each `.ease-tag` element via inline `style`. The CSS maps it to font size and opacity:

```css
.ease-tag {
  --_w: var(--ease-tag-weight, 3);
  /* Linear interpolation: weight 1-5 → 0.75rem to 1.6rem */
  font-size: calc(0.75rem + (var(--_w) - 1) * 0.2125rem);
}
```

Opacity levels per weight are defined via CSS custom property fallbacks and attribute selectors, ensuring the animation can target the correct final opacity for each tag.

## Usage

```html
<div class="ease-tag-cloud">
  <a href="#" class="ease-tag" style="--ease-tag-weight: 5;">CSS Animation</a>
  <a href="#" class="ease-tag" style="--ease-tag-weight: 2;">Performance</a>
</div>
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Verify tags animate in one by one with an upward scale-fade entrance.
3. Verify heavier tags (weight 5) are larger and fully opaque; lighter tags (weight 1) are smaller and more transparent.
4. Hover any tag — verify it scales up elastically and highlights purple.
5. Enable `prefers-reduced-motion` — verify all animations are suppressed.
