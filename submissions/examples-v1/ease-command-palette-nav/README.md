# ease-command-palette-nav

A command palette modal with **keyboard-navigable rows** (arrow keys + Enter), a distinct **Recent** section, fuzzy-match highlighting, and a dedicated **empty state** — extending the classic command palette pattern beyond static entrance animation.

## Why this is different

Most command palette utilities stop at a scale-in overlay with hover states. This one adds:

- **Real keyboard navigation** — `ArrowUp`/`ArrowDown` move an `aria-selected` active row via `:focus`, not just `:hover`; `Enter` executes the selected command
- **Recent section** — a visually distinct top group (accent-colored title) separate from categorized command groups
- **Fuzzy-match highlighting** — matched substrings wrap in `<mark>` for visual feedback while typing
- **Empty state** — a dedicated "No results found" view instead of a blank list
- **Density variant** — `ease-cpnav-palette--compact` modifier for tighter row spacing

## Classes

| Class | Description |
|---|---|
| `ease-cpnav-overlay` | Fixed backdrop with blur |
| `ease-cpnav-palette` | Modal container, scale-in animation |
| `ease-cpnav-palette--compact` | Tighter row spacing variant |
| `ease-cpnav-search` | Search bar wrapper |
| `ease-cpnav-input` | Filter input |
| `ease-cpnav-esc` | ESC keyboard hint badge |
| `ease-cpnav-list` | Scrollable command list |
| `ease-cpnav-group` | Command section group |
| `ease-cpnav-group--recent` | Recent section, accent-tinted title |
| `ease-cpnav-group-title` | Group header |
| `ease-cpnav-divider` | Divider between groups |
| `ease-cpnav-item` | Focusable command row (`tabindex="0"`) |
| `ease-cpnav-item-icon` | Icon slot |
| `ease-cpnav-item-label` | Label text (supports `<mark>` highlighting) |
| `ease-cpnav-kbd` | Keyboard shortcut badge |
| `ease-cpnav-empty` | Empty-state container |

## Usage

1. Link `style.css` and include the script block from `demo.html`.
2. Trigger `openPalette()` from a button, or bind it to `⌘K` / `Ctrl+K` in your app.
3. Navigate with arrow keys, filter by typing, press `Enter` to execute, `Esc` to close.

```html
<button id="openBtn">Open Command Palette</button>
<div class="ease-cpnav-overlay" id="overlay">
  <div class="ease-cpnav-palette" id="palette">
    <!-- search + list markup, see demo.html -->
  </div>
</div>