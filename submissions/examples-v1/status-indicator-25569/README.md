# Status Indicator Component

Small colored dots for online, away, busy, and offline states — commonly used next to avatars.

## Files

- `style.css` — Component CSS (to be moved to `components/status-indicator.css`)
- `demo.html` — Live demo with all states and avatar integration

## Usage

```html
<span class="ease-status ease-status-online"></span>
```

With avatar positioning:

```html
<div style="position:relative; display:inline-block;">
  <img class="ease-avatar" src="..." alt="User">
  <span class="ease-status ease-status-online ease-status-bordered ease-status-positioned"></span>
</div>
```

## Variants

| Class | Purpose |
|-------|---------|
| `.ease-status` | Base indicator (neutral-400) |
| `.ease-status-online` | Green + pulse animation |
| `.ease-status-away` | Yellow |
| `.ease-status-busy` | Red |
| `.ease-status-offline` | Gray |
| `.ease-status-sm` | 8px dot |
| `.ease-status-lg` | 14px dot |
| `.ease-status-bordered` | White ring around dot |
| `.ease-status-positioned` | Bottom-right absolute positioning |

Custom color via `--ease-status-color` CSS variable.
