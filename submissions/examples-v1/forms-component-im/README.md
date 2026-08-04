# Forms Component

## What does this do?
A complete, validation-ready form styling kit — text inputs, textarea, select, checkbox/radio — sharing a consistent visual language with animated focus glow, success/danger validation states, field hints, size variants, and a disabled state. Uses the framework's existing `--ease-color-*` tokens, so dark mode works automatically without any separate overrides.

## How to use it
```html
<!-- Basic field -->
<div class="ease-field">
  <label class="ease-field-label" for="username">Username</label>
  <input class="ease-input" type="text" id="username" placeholder="Enter username">
</div>

<!-- Validation states -->
<div class="ease-field ease-field-success">
  <label class="ease-field-label">Email (Valid)</label>
  <input class="ease-input ease-input-success" type="email" value="user@domain.com">
  <span class="ease-field-hint ease-field-hint-success">Looks good!</span>
</div>

<div class="ease-field ease-field-danger">
  <label class="ease-field-label">Password (Error)</label>
  <input class="ease-input ease-input-danger" type="password" value="123">
  <span class="ease-field-hint ease-field-hint-danger">Password must be at least 8 characters.</span>
</div>

<!-- Textarea and select -->
<textarea class="ease-textarea" placeholder="Your message..."></textarea>
<select class="ease-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Size variants -->
<input class="ease-input ease-input-sm" type="text">
<input class="ease-input ease-input-lg" type="text">

<!-- Checkbox / radio -->
<label class="ease-checkbox-field">
  <input type="checkbox" class="ease-checkbox">
  <span>Subscribe to newsletter</span>
</label>
```

## Classes
| Class | Purpose |
|---|---|
| `.ease-field` | Label + input wrapper, vertical spacing |
| `.ease-field-label` | Styled label |
| `.ease-input` / `.ease-textarea` / `.ease-select` | Core styled form elements, shared focus glow |
| `.ease-field-success` / `.ease-field-danger` | Validation state — recolors label, border, and focus glow |
| `.ease-input-success` / `.ease-input-danger` | Apply validation color directly to an input |
| `.ease-field-hint` (`-success`/`-danger`) | Small helper/error text below a field |
| `.ease-input-sm` / `.ease-input-lg` | Size variants |
| `.ease-checkbox-field`, `.ease-checkbox`, `.ease-radio` | Styled checkbox/radio with native `accent-color` and a small press animation |

## Focus glow
```css
.ease-input:focus {
  border-color: var(--ease-color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--ease-color-primary) 22%, transparent);
}
```
Validation states reuse the same glow pattern with `--ease-color-success`/`--ease-color-danger` instead.

## Dark mode
No separate dark-mode rules are needed — every color in this component references `--ease-color-surface`, `--ease-color-text`, `--ease-color-muted`, `--ease-color-primary`, `--ease-color-success`, and `--ease-color-danger`, all of which the framework already redefines under `prefers-color-scheme: dark` in `core/variables.css`.

## Why it fits EaseMotion CSS
Forms are one of the most common UI elements on any site, and EaseMotion currently has no styled form input components — developers fall back to unstyled native elements that clash with the rest of an EaseMotion-styled page. This adds a cohesive, animation-first form kit consistent with the framework's existing button/card aesthetic, with `prefers-reduced-motion` shortening all transitions and removing the checkbox/radio press animation.
