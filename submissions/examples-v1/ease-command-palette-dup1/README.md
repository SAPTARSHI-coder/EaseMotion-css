# ease-command-palette

A `Ctrl+K` / `Cmd+K` style command palette with a smooth fade + scale entrance animation, animated search input, and a searchable command list with hover/focus states — the kind of interface pattern found in developer tools, docs sites, and admin dashboards.

## Features

- 🎨 Smooth fade + scale entrance/exit animation on the palette
- ⌨️ Keyboard-friendly: `Ctrl+K` / `Cmd+K` toggles it open, `Esc` closes it, `↑`/`↓` navigate the list
- 🔍 Animated, focus-styled search input
- 📋 Grouped, searchable command list with hover and focus-visible states
- 🌙 Light and dark theme support via `[data-theme]`
- 📱 Fully responsive layout
- ⚡ Lightweight — minimal JS only for open/close/keyboard logic; all visuals are CSS
- ♿ Accessible: `role="dialog"` + `aria-modal`, `role="listbox"`/`role="option"` with `aria-selected`, focus is moved into the search input on open and returned to the launcher on close
- 🧠 Respects `prefers-reduced-motion`

## Usage

```html
<button class="ease-cmdp-launcher" id="myLauncher" type="button" aria-haspopup="dialog">
  Search commands…
  <span class="ease-cmdp-kbd">Ctrl</span>
  <span class="ease-cmdp-kbd">K</span>
</button>

<div class="ease-cmdp-overlay" id="myOverlay">
  <div class="ease-cmdp-palette" role="dialog" aria-modal="true" aria-label="Command palette">
    <div class="ease-cmdp-search-wrap">
      <input class="ease-cmdp-search-input" type="text" placeholder="Type a command…" />
    </div>
    <ul class="ease-cmdp-list" role="listbox">
      <li class="ease-cmdp-item" role="option" tabindex="0">
        <span class="ease-cmdp-item-label">Go to Dashboard</span>
        <span class="ease-cmdp-item-shortcut">G D</span>
      </li>
    </ul>
  </div>
</div>
```

Toggle the `.is-open` class on `.ease-cmdp-overlay` to open/close the palette — see `demo.html` for a complete working example including keyboard shortcut wiring.

## CSS Variables

| Variable                  | Default    | Description                          |
|----------------------------|------------|-----------------------------------------|
| `--ease-cmdp-overlay`       | `rgba(15,23,42,0.5)` | Backdrop overlay color       |
| `--ease-cmdp-bg`            | `#ffffff`  | Palette background                     |
| `--ease-cmdp-border`        | `#e2e8f0`  | Border color                           |
| `--ease-cmdp-text`          | `#0f172a`  | Primary text color                     |
| `--ease-cmdp-muted`         | `#64748b`  | Secondary/placeholder text color       |
| `--ease-cmdp-accent`        | `#6366f1`  | Icon accent color                      |
| `--ease-cmdp-hover-bg`      | `#eef2ff`  | Item hover/active background           |
| `--ease-cmdp-radius`        | `0.9rem`   | Palette corner radius                  |
| `--ease-cmdp-duration`      | `0.2s`     | Entrance/exit animation duration        |
| `--ease-cmdp-easing`        | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrance animation easing |
| `--ease-cmdp-max-width`     | `480px`    | Max palette width                       |

## Accessibility

- The palette uses `role="dialog"` with `aria-modal="true"` and an `aria-label`.
- The command list uses `role="listbox"` with each command as `role="option"` and `aria-selected` reflecting the active item.
- Opening the palette moves focus into the search input; closing it returns focus to the launcher button, preserving keyboard flow.
- `Esc` closes the palette; `↑`/`↓` move the active selection.
- All entrance/exit and hover transitions are disabled under `prefers-reduced-motion: reduce`.

## Browser Support

Works in all modern browsers supporting CSS custom properties and CSS transitions (Chrome, Firefox, Safari, Edge). No experimental CSS features used.