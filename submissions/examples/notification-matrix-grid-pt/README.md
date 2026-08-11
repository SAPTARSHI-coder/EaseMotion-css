# Notification Preference Matrix Grid with Staggered Checkbox Animations

> A high-performance, accessible notification settings matrix component built with HTML5, CSS custom properties, smooth SVG/CSS morphing toggle switches, column master toggles with staggered ripple animations, and a responsive mobile card stack fallback.

## Features

- **Custom Animated Toggle Switches** — Fully custom `<input type="checkbox" role="switch">` controls with smooth sliding thumb animations (`transform: translateX()`), background color gradient glow, and a morphing checkmark icon.
- **Staggered Column Ripple Animations** — Header "Select All" column master switches trigger a cascading visual ripple effect across all rows using `setTimeout` per row index (`.is-rippling` scale bounce animation).
- **Quick Preset Actions** — Instant "Enable All", "Mute All", and "Recommended Defaults" preset controls with staggered matrix animation cascades.
- **Floating Save Status Bar** — Unsaved change detection banner floating at the bottom screen with "Discard" reset action, "Saving..." spinner state, and success toast confirmation.
- **Mobile Stacked Card View** — Under `640px` viewport width, the matrix table seamlessly transforms into mobile-friendly stacked card blocks with responsive channel label pills.
- **Accessibility Ready** — Keyboard navigation support with visible focus ring (`:focus-visible`), standard `role="switch"`, and dynamic `aria-checked="true/false"` attributes.

---

## Directory Structure

```
submissions/examples/notification-matrix-grid-pt/
├── index.html    — Accessible HTML table structure with sticky headers, rows, and save banner
├── style.css    — Custom switch styling, ripple keyframes, card glassmorphic layout, and mobile breakpoints
├── script.js    — Column master toggles, staggered ripple loop, state comparison, and toast status
└── README.md    — Component documentation
```

---

## Design Tokens (CSS Variables)

| Variable | Default Value | Purpose |
|---|---|---|
| `--card-bg` | `rgba(15, 23, 42, 0.75)` | Glassmorphic background color for matrix container |
| `--primary-indigo` | `#6366f1` | Indigo accent for active toggle switches and buttons |
| `--primary-violet` | `#8b5cf6` | Violet accent gradient for checked states |
| `--switch-track-off` | `rgba(255, 255, 255, 0.12)` | Background track color when toggle is OFF |
| `--switch-glow` | `rgba(99, 102, 241, 0.4)` | Box-shadow glow effect for active switches |

---

## Usage

```html
<table class="notification-table" role="grid" aria-label="Notification Preference Matrix">
  <thead>
    <tr>
      <th scope="col">Notification Event</th>
      <th scope="col">
        <!-- Master Column Switch -->
        <input type="checkbox" class="toggle-switch master-switch" data-channel="email" role="switch" aria-checked="false">
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="matrix-row">
      <td class="cell-event">Security Alerts</td>
      <td class="cell-toggle">
        <input type="checkbox" class="toggle-switch cell-switch" data-channel="email" role="switch" aria-checked="true" checked>
      </td>
    </tr>
  </tbody>
</table>
```

---

## Acceptance Criteria Checklist ✅

- [x] Self-contained in `submissions/examples/notification-matrix-grid-pt/`.
- [x] Custom toggle switches animate smoothly between ON and OFF states with checkmark morphing icon.
- [x] Clicking column header "Select All" triggers a staggered visual ripple toggle across all rows.
- [x] Modifying any toggle triggers an unsaved changes indicator banner with save & discard capabilities.
- [x] Layout transforms cleanly into mobile-friendly card stacks under 640px viewport width.
- [x] Preserves native focus ring and accessibility attributes (`aria-checked`, `role="switch"`).

---

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
