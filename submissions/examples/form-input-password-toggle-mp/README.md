# Password Input Toggle (`form-input-password-toggle-mp`)

## What does this do?
A password input field with a built-in eye icon button that toggles the field between masked (`•••••`) and plain-text visibility, with smooth hover/focus states and no external icon library.

## How is it used?
```html
<div class="password-field-mp">
  <label for="pwd-mp">Password</label>
  <div class="password-input-wrap-mp">
    <input type="password" id="pwd-mp" class="password-input-mp" placeholder="Enter your password" />
    <button type="button" class="password-toggle-btn-mp" aria-label="Show password" aria-pressed="false">
      <!-- eye / eye-off SVG icons, toggled via JS -->
    </button>
  </div>
</div>
```
Clicking `.password-toggle-btn-mp` flips the input's `type` attribute between `password` and `text`, and swaps the eye / eye-off SVG icons. `aria-pressed` and `aria-label` update on each toggle for screen reader support.

## Why is it useful?
Password visibility toggles are one of the most common form UX patterns on the web, but are often implemented inaccessibly (no ARIA state, no keyboard focus styling, reliance on external icon fonts). This component is fully self-contained (inline SVGs, no CDN/icon-font dependency), keyboard-accessible, and fits EaseMotion CSS's philosophy of lightweight, dependency-free, drop-in UI utilities.
