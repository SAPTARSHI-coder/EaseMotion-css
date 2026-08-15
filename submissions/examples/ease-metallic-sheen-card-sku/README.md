# CSS Card: Metallic Sheen Variation

An elegant, semantic, and highly optimized card component featuring a subtle, hardware-accelerated **Metallic Sheen sweep** animation. Built with **Zero JavaScript**, standard vanilla CSS, and accessibility-first practices.

---

## Features

- **Subtle Metallic Sheen:** A soft, modern diagonal reflection band sweeps across the card face on hover and keyboard focus.
- **Metallic Finishes:** Four detailed, multi-stop brushed metal gradients (Silver, Gold, Titanium, and Rose Gold) for high visual appeal.
- **Compositor Accelerated:** The sweep animation transforms only `transform: translateX() skewX()`, which executes entirely on the browser's compositor thread (GPU). This avoids CPU layout shifts or repaint frames, preserving a stable 60 FPS scrolling.
- **A11y Compliant:** High-contrast text values are explicitly set per-metal-finish to satisfy WCAG AA/AAA standards. Focus outlines use negative offsets to prevent clipping inside the rounded boundaries.
- **Reduced Motion Support:** Seamlessly detects `prefers-reduced-motion: reduce` to disable the motion translation entirely, falling back to instant opacity changes.
- **Theme-Adaptive:** Adapts automatically to light/dark themes using system query states (`prefers-color-scheme`).

---

## HTML Structure

The component uses clean, semantic HTML5 elements:

```html
<article class="ems-card ems-card--silver">
  <div class="ems-card__content">
    <h3 class="ems-card__title">Card Heading</h3>
    <p class="ems-card__text">
      This is the description text for the metallic sheen card.
    </p>
  </div>
  <div class="ems-card__action">
    <a href="#link" class="ems-card__btn">Explore More</a>
  </div>
</article>
```

---

## CSS Classes

| Class Name            | Type     | Description                                                              |
| :-------------------- | :------- | :----------------------------------------------------------------------- |
| `.ems-card-wrapper`   | Scope    | Root namespace reset wrapper to prevent style bleed.                     |
| `.ems-card`           | Block    | Main card layout. Configures rounded corners, bounds, and shadows.       |
| `.ems-card__content`  | Element  | Holds text layers and handles z-indexing above the sheen.                |
| `.ems-card__title`    | Element  | Title of the card.                                                       |
| `.ems-card__text`     | Element  | Description text.                                                        |
| `.ems-card__action`   | Element  | Holds interactive CTA links/buttons.                                     |
| `.ems-card__btn`      | Element  | The semantic button/link element.                                        |
| `.ems-card--silver`   | Modifier | Styled with a polished Chrome/Silver finish and high-contrast text.      |
| `.ems-card--gold`     | Modifier | Styled with a champagne Gold finish and high-contrast text.              |
| `.ems-card--titanium` | Modifier | Styled with a deep brushed Titanium/Steel finish and high-contrast text. |
| `.ems-card--rosegold` | Modifier | Styled with a soft rose Gold/Copper finish and high-contrast text.       |

---

## How the Animation Works

1. **Reflection Layer:** The sheen is constructed as a diagonal gradient using an absolute positioned pseudo-element (`::after`) spanning `200%` width.
2. **Translate Sweep:** When hovered (`:hover`), focused inside (`:focus-within`), or directly focused (`:focus-visible`), the CSS keyframe moves the layer:
   `transform: translateX(-100%) skewX(-25deg)` &rarr; `transform: translateX(100%) skewX(-25deg)`.
3. **Restrained Execution:** Using `forwards` ensures the sheen sweeps once across the card and stops, creating a clean, professional hover response rather than an distracting infinite loop.

---

## Accessibility and Performance

- **Reduced Motion:** If user preferences request reduced motion, the CSS strips translate motion entirely:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .ems-card::after {
      animation: none !important;
      display: none !important;
    }
  }
  ```
- **Tap Targets:** Interactive buttons meet mobile visual spacing and tap targets (minimum `38px` base, scaling to `44px` on coarse pointers).
- **Keyboard Tab Support:** The sweep triggers on keyboard focus via `:focus-within` on the card parent, providing direct visual feedback to keyboard users.
