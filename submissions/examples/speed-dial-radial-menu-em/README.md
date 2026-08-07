# Floating Action Speed Dial Radial Menu

> A floating action button (FAB) speed dial menu featuring staggered micro-action pop-in animations, tooltip labels, 135-degree rotational trigger transitions, and full accessibility support.

## Features

- **Rotational Trigger Transition** — FAB icon smoothly rotates 135° into an 'X' close icon when opened.
- **Staggered Pop-in Motion** — Sub-action buttons animate outward with staggered `transition-delay` offsets (`--delay-index`).
- **Tooltip Text Labels** — Text labels slide in smoothly alongside each action item.
- **Click & Keyboard Dismissal** — Automatically closes when clicking outside or pressing the <kbd>Esc</kbd> key.
- **Accessibility Ready** — `aria-expanded`, `aria-haspopup`, `aria-controls`, `role="menu"`, `role="menuitem"`, and `:focus-visible` outline rings.
- **High Contrast & Reduced Motion** — Supports Windows `@media (forced-colors: active)` and `@media (prefers-reduced-motion: reduce)`.

## Files

```
submissions/examples/speed-dial-radial-menu-em/
├── demo.html    — Interactive demo page showcasing the speed dial FAB
├── style.css    — Design tokens, rotation transform, staggered animations & layout
├── script.js    — Toggle logic, outside click & Escape key dismissal handlers
└── README.md    — Component documentation
```

## Design Tokens (CSS Variables)

| Variable | Default Value | Purpose |
|---|---|---|
| `--sd-primary` | `#6366f1` | Main trigger button gradient start |
| `--sd-primary-hover` | `#4f46e5` | Main trigger hover state |
| `--sd-trigger-size` | `56px` | FAB trigger diameter |
| `--sd-action-size` | `44px` | Sub-action button diameter |
| `--sd-stagger-step` | `0.05s` | Stagger delay increment per item |

## Usage

```html
<div class="speed-dial" id="speed-dial-menu">
  <ul class="speed-dial__list" role="menu">
    <li class="speed-dial__item" style="--delay-index: 1;">
      <span class="speed-dial__tooltip">New Document</span>
      <button type="button" class="speed-dial__action">...</button>
    </li>
    <!-- Additional action items with --delay-index: 2, 3, etc. -->
  </ul>

  <button type="button" class="speed-dial__trigger" aria-expanded="false">
    <span class="speed-dial__icon-wrapper">
      <svg class="speed-dial__icon">...</svg>
    </span>
  </button>
</div>
```

## Acceptance Criteria ✅

- [x] Trigger icon rotates 45/135 degrees when toggled open.
- [x] Sub-action buttons animate outward with staggered transition delays.
- [x] Tooltip text labels appear smoothly alongside each action item.
- [x] Clicking outside the open speed dial closes the menu.
- [x] Esc key dismisses the open menu state.
- [x] File naming matches CI requirements (`demo.html`, `style.css`, `script.js`, `README.md`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) project.
