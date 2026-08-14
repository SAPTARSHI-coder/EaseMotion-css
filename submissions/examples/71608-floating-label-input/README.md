# Floating Label Input Component (`ease-floating-input`)

A pure HTML + Vanilla CSS floating label input component featuring smooth `transform: translateY(-0.65rem) scale(0.85)` label elevation driven natively by `:focus-within` and `:not(:placeholder-shown)` pseudo-classes, validation state modifiers, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript.

## Features

- **Pure HTML + CSS**: 100% responsive floating label input interaction without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **`:focus-within` & `:not(:placeholder-shown)` Mechanics**: Uses native CSS pseudo-classes paired with `<input placeholder=" ">` to detect both active user focus and non-empty field values automatically.
- **Smooth `transform` Motion**: Elevates `<label>` smoothly with `transform-origin: left top` to prevent font blurring or layout reflows during scale animation.
- **100% Accessible**: Labels are explicitly associated with inputs via matching `id` and `for` attributes. Preserves native focus indicators (`:focus-visible`) and includes `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important;`).
- **Theme Adaptability & Validation States**: Supports dark space surface default presentation, light theme adaptation (`@media (prefers-color-scheme)`), success (`.ease-floating-success`), and error (`.ease-floating-error`) state modifiers.

## Usage

Include `style.css` and use semantic HTML:

```html
<!-- Floating Label Text Input -->
<div class="ease-floating-input">
  <input
    type="text"
    id="email"
    class="floating-field"
    placeholder=" "
    required
  />
  <label for="email" class="floating-label">Email Address</label>
</div>

<!-- Floating Label Textarea -->
<div class="ease-floating-input">
  <textarea
    id="message"
    class="floating-field"
    placeholder=" "
    rows="3"
  ></textarea>
  <label for="message" class="floating-label">Your Message</label>
</div>

<!-- Success Validation State -->
<div class="ease-floating-input ease-floating-success">
  <input
    type="text"
    id="verified-id"
    class="floating-field"
    placeholder=" "
    value="user@domain.com"
  />
  <label for="verified-id" class="floating-label">Verified Email</label>
</div>
```

### Customization Variables

```css
.ease-floating-input {
  --float-duration: 0.25s;
  --float-scale: 0.85;
  --float-primary: #0284c7;
  --float-border: #cbd5e1;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/71608-floating-label-input/demo.html) directly in any modern web browser to interact with the floating label input component offline.
