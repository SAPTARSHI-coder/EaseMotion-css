# ease-password-strength

## What does this do?

Provides a CSS-only password strength indicator component with a visual meter bar, dynamic color transitions, and real-time feedback labels. The CSS handles all styling and transitions; minimal JavaScript analyzes the password (length, character diversity) and toggles state classes.

## How is it used?

Add the strength meter markup and a small JS function that toggles `.is-weak`, `.is-medium`, or `.is-strong` on the bar and text elements:

```html
<div class="ease-password-strength">
  <div class="ease-password-strength-bar" id="bar"></div>
  <div class="ease-password-strength-label">
    <span class="ease-password-strength-text" id="text">No password</span>
  </div>
</div>
```

```js
// Toggle strength classes
bar.className = 'ease-password-strength-bar';
bar.classList.add('is-strong');
text.className = 'ease-password-strength-text';
text.classList.add('is-strong');
```

### Strength levels

| Class | Width | Color | Meaning |
| --- | --- | --- | --- |
| (none) | 0% | Gray | No password |
| `is-weak` | 25% | Red | Fewer than 2 character types or short |
| `is-medium` | 60% | Orange | 2–3 character types |
| `is-strong` | 100% | Green | 8+ chars and 4 character types |

## Why is it useful?

Password strength indicators are a standard UX pattern in sign-up forms, password change dialogs, and account settings. This component gives developers a ready-to-use, themeable pattern with smooth transitions and accessibility support.

## Features

- Visual strength bar with smooth width and color transitions
- Four states: empty, weak (red), medium (orange), strong (green)
- Configurable via `--ease-color-danger`, `--ease-color-warning`, `--ease-color-success` tokens
- Accompanying text label with matching color
- Password requirements checklist (optional)
- Respects `prefers-reduced-motion`
