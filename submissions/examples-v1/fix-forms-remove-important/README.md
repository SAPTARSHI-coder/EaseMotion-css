# Fix: Remove !important from Validation State Styles in forms.css

## Problem

`components/forms.css` used `!important` on validation state styles:

```css
.ease-input-success,
.ease-input-success:focus-visible {
  border-color: var(--ease-color-success) !important;
  box-shadow: 0 0 0 3px var(--ease-color-success-alpha) !important;
}
```

Using `!important` in component CSS makes it impossible for users to override validation styles without also using `!important` — breaking the cascade for legitimate customisations.

## Solution

Remove `!important` from all 9 validation state declarations. The `@layer easemotion-components` system already ensures lower specificity than unlayered user styles, making `!important` unnecessary.

## Before vs After

```css
/* ❌ Before */
.ease-input-danger {
  border-color: var(--ease-color-danger) !important;
}

/* ✅ After */
.ease-input-danger {
  border-color: var(--ease-color-danger);
}

/* ✅ User override now works cleanly */
.my-form .ease-input-danger {
  border-color: #ff6b6b;
}
```

## Usage

```html
<div class="ease-field ease-field-success">
  <label class="ease-field-label">Email</label>
  <input class="ease-input ease-input-success" type="email" />
</div>

<div class="ease-field ease-field-danger">
  <label class="ease-field-label">Password</label>
  <input class="ease-input ease-input-danger" type="password" />
</div>
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses `@layer` for cascade management — `!important` defeats this system and makes the framework harder to customise. Removing it restores the intended cascade behaviour.

Fixes #10246
