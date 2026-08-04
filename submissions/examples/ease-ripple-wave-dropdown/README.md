# Ease Ripple-Wave Dropdown

## Description
A dropdown menu styled for fintech dashboard account switchers/action menus, where opening the panel triggers a ripple-wave reveal — a `clip-path: circle()` expansion from the trigger's anchor point combined with a concentric ring pulse — rather than a plain slide or fade. Menu items cascade in staggered once the panel opens. Driven entirely by a hidden checkbox — zero JavaScript.

## Features
- Ripple-wave panel reveal using animated `clip-path: circle()` expanding from the trigger corner
- Concentric ring pulse animation layered on top of the clip-path expansion for extra "wave" emphasis
- Radial ripple burst on the trigger button itself when clicked
- Staggered menu item entrance
- Chevron icon rotates on open
- Fully keyboard accessible (checkbox + label toggle, focusable menu items with visible `:focus-visible` outlines)
- Closes automatically when reduced-motion is preferred is handled gracefully with an opacity-only fallback
- Fully customizable via CSS custom properties
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-ripple-dropdown">
  <input type="checkbox" id="ddToggle" class="dd-toggle-input" />

  <label for="ddToggle" class="dd-trigger" tabindex="0">
    <span class="dd-avatar">SA</span>
    <span class="dd-trigger-text">
      <span class="dd-name">User Name</span>
      <span class="dd-sub">Account Type</span>
    </span>
    <svg class="dd-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
  </label>

  <div class="dd-panel">
    <a href="#" class="dd-item"><svg>...</svg>Menu Item</a>
    <div class="dd-divider"></div>
    <a href="#" class="dd-item is-danger"><svg>...</svg>Log Out</a>
  </div>
</div>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--dd-duration` | `0.4s` | Panel reveal transition duration |
| `--dd-easing` | `cubic-bezier(0.16, 1, 0.3, 1)` | Panel reveal timing function |
| `--ripple-duration` | `0.9s` | Trigger ripple burst duration |
| `--ripple-color` | `rgba(13, 148, 136, 0.25)` | Ripple/wave accent color |
| `--accent` | `#0d9488` | Avatar gradient / focus outline color |
| `--dd-radius` | `14px` | Panel corner rounding |

## Accessibility
Built on a native checkbox/label toggle (fully keyboard operable), with the trigger and each menu item independently focusable and visibly outlined on `:focus-visible`. Under `prefers-reduced-motion`, the clip-path/ripple animations are disabled and the panel instead shows/hides via a simple `display` toggle.

## Files
- `demo.html` — live working example (account switcher dropdown)
- `style.css` — component styles and all ripple-wave animations
- `README.md` — this file