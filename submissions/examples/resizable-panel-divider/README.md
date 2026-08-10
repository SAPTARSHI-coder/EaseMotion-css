# Animated Resizable Panel Divider

**EaseMotion CSS — Issue #15836**
`submissions/examples/resizable-panel-divider/`

A draggable split-panel divider with smooth CSS animations for hover, active drag, snap flash, and collapse chevron rotation.

## Files

| File | Purpose |
|---|---|
| `style.css` | All component styles and keyframes |
| `demo.html` | Live demo with default and dark variants |
| `README.md` | This file |

## Classes

| Class | Element | Behaviour |
|---|---|---|
| `ease-panel-row` | `div` | Flex row container for panels |
| `ease-panel` | `div` | Individual resizable panel |
| `ease-panel-divider` | `div` | Draggable handle; widens + brightens on hover |
| `ease-panel-divider-active` | `ease-panel-divider` | Applied while dragging; full highlight |
| `ease-panel-snap-flash` | `ease-panel-divider` | Amber flash when panel hits min/max snap point |
| `ease-panel-collapse-icon` | `span` | Chevron button; rotates to indicate collapse direction |
| `is-collapsed` | `ease-panel-divider` | Rotates chevron when left panel is collapsed |

## Themes

| Class on `ease-panel-row` | Look |
|---|---|
| *(none)* | Default — indigo accent on white |
| `ease-panel-theme-dark` | Deep navy, violet accent |

## Usage

```html
<div class="ease-panel-row">
  <div class="ease-panel">Sidebar content</div>
  <div class="ease-panel-divider">
    <span class="ease-panel-collapse-icon">
      <svg viewBox="0 0 12 12"><polyline points="8,2 4,6 8,10"/></svg>
    </span>
  </div>
  <div class="ease-panel">Main content</div>
</div>
```

## Notes

- All visual states are pure CSS
- JS handles drag distance and collapse toggle only
- `prefers-reduced-motion` respected

## Contributor

**Akanksha Thakur** (`@thakurakanksha288`) — GSSoC 2026