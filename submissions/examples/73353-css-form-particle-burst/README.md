# Particle Burst CSS Form Component

A pure HTML + Vanilla CSS form component featuring a "Particle Burst" visual identity with CSS-only radial-gradient particle points (`radial-gradient(circle at 15% 20%, rgba(56, 189, 248, 0.6)...)`), focus-within particle dispersion keyframes (`@keyframes particle-burst`), pointer-safe pseudo-elements (`pointer-events: none`), and native HTML validation styling.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Particle Burst Identity**: CSS-only radial gradient particle dots, focus-within particle dispersion overlays, particle submit button with hover glow sweep, and pointer-safe pseudo-elements (`pointer-events: none`).
- **100% Accessible**: Built using semantic `<form>`, explicit `<label for="...">` associations, native `<input>` / `<textarea>` / `<select>` controls, and clear `:focus-visible` indicators.
- **Native HTML Validation**: Built-in `:user-invalid` / `:invalid` styling with rose error particle glow (`#f43f5e`).
- **Clear `:focus-visible` States**: Dedicated focus outlines on active inputs and buttons.
- **Responsive & Mobile Ready**: Single-column flex layout scales cleanly across mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports `@media (prefers-color-scheme)` and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<form class="particle-form" action="#" method="post">
  <div class="form-field">
    <label for="name" class="field-label">Name</label>
    <div class="input-wrapper">
      <input id="name" name="name" class="form-input" type="text" required />
      <span class="field-particle-burst" aria-hidden="true"></span>
    </div>
  </div>

  <button type="submit" class="particle-submit">Send Message</button>
</form>
```

### Customization Variables

```css
:root {
  --particle-bg: #0f172a;
  --particle-surface: #1e293b;
  --particle-accent: #38bdf8;
  --particle-error: #f43f5e;
}
```
