# CSS Morphing Border Card

A modern, high-performance card component set featuring smooth, hardware-accelerated morphing border effects. The cards morph fluidly between sharp geometric rectangles and organic fluid blobs on hover and focus.

## 🚀 Features

- **Pure CSS Implementation:** Zero JavaScript dependencies, maximizing rendering performance by offloading animation frames directly to the compositor thread.
- **Three Unique Visual Styles:**
  1. **Classic Morph:** The entire card container's borders morph organically.
  2. **Ambient Glow:** The card content remains static to ensure maximum text readability, while an organic fluid blur glow morphs behind it.
  3. **Profile Morph:** Interactive morphing image masks for clean, interactive avatar components.
- **Full Keyboard Navigation support:** Interactive states (`:hover`) are mapped 1-to-1 with focus states (`:focus-visible` / `:focus-within`) for complete keyboard navigation accessibility.
- **A11y Compliant:** Includes proper semantic HTML structure (`<article>`), ARIA labelling (`aria-labelledby`, `aria-describedby`), and a strict `@media (prefers-reduced-motion: reduce)` media query that instantly degrades animations gracefully for users with motion sensitivities.

## 🛠️ Usage

Copy the relevant HTML markup from [demo.html](file:///Users/mallarapuujwal9gmail.com/GSSOC2026ease/EaseMotion-cssUM/submissions/examples/70157-css-morphing-border-card/demo.html) and link the [style.css](file:///Users/mallarapuujwal9gmail.com/GSSOC2026ease/EaseMotion-cssUM/submissions/examples/70157-css-morphing-border-card/style.css) stylesheet to your project.

### CSS Customization

You can fully customize the speed, colors, and shape properties of the card borders using the CSS custom properties defined in `:root`:

```css
:root {
  --color-bg: #0b0f19;
  --color-card-bg: #131a26;
  --transition-speed: 0.6s;
  --grad-primary: linear-gradient(135deg, #6366f1, #a855f7, #ec4899);
}
```
