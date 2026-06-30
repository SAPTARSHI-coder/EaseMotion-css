# Font Smoothing Antialiased (`ease-font-smooth-antialiased`)

A demonstration of the `-webkit-font-smoothing: antialiased` utility, considered the "secret sauce" for premium dark mode typography.

## 🚀 Features & EaseMotion Showcase

- **Crisp Dark Modes**: By default, macOS and iOS browsers use subpixel antialiasing. On dark backgrounds, this causes light-colored text to visually bleed, making the font look artificially heavier and slightly blurry. Switching to `antialiased` (and `grayscale` for Firefox) stops this bleed, restoring the font's intended crisp, thin weight.
- **Agency Aesthetic**: This is the exact CSS property used heavily by design-forward companies like Apple, Stripe, and Vercel to make their typography look flawless on high-DPI retina screens.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser (preferably on a Mac or iOS device to see the full native effect). All required CSS is inside `style.css`.

To apply premium smoothing to an element (or usually the whole `body` in a dark mode app):

```html
<body class="ease-font-antialiased">
  <!-- Crisp text everywhere -->
</body>
```
