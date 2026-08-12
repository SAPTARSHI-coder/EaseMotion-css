# Minimalist Outline CSS Form Component

A pure HTML + Vanilla CSS form component featuring a clean, modern, lightweight "Minimalist Outline" visual identity with thin borders, restrained typography, native validation states, and subtle focus transitions.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Minimalist Outline Identity**: Crisp 1px borders (`border: 1px solid var(--form-border)`), restrained border radius (`6px`), generous whitespace, and understated typography.
- **Semantic & Accessible**: Complete `<form>` structure with associated `<label for="...">` elements, text inputs, email inputs, selects, textareas, custom outlined checkboxes, and submit buttons.
- **Native HTML Validation**: Built-in support for `:user-invalid` / `:invalid:not(:placeholder-shown)` with clear error outlines (`--form-error`).
- **Clear `:focus-visible` States**: High-contrast focus outlines on active controls (`:focus-visible`).
- **Responsive & Dark Mode**: Fully responsive layout adapts seamlessly across mobile viewports (320px–1440px+), `@media (prefers-color-scheme)`, and `@media (prefers-reduced-motion: reduce)`.

## Usage

Include `style.css` and use semantic HTML:

```html
<form class="minimal-form">
  <div class="form-field">
    <label for="name" class="field-label">Full Name</label>
    <input type="text" id="name" name="name" class="minimal-input" required />
  </div>

  <div class="form-field">
    <label for="email" class="field-label">Email Address</label>
    <input
      type="email"
      id="email"
      name="email"
      class="minimal-input"
      required
    />
  </div>

  <button type="submit" class="minimal-btn">Send Message</button>
</form>
```

### Customization Variables

```css
:root {
  --form-bg: #f8fafc;
  --form-surface: #ffffff;
  --form-border: #cbd5e1;
  --form-text: #0f172a;
  --form-accent: #0f172a;
  --form-accent-focus: #2563eb;
  --form-error: #dc2626;
}
```
