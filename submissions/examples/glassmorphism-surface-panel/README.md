# Glassmorphism Surface Panel

A general-purpose frosted glass surface component for modals, cards, and floating panels.

## Usage

```html
<div class="ease-glass-panel">
  <!-- content -->
</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-glass-panel` | Base component |
| `ease-glass-panel--subtle` | Low blur, for background panels |
| `ease-glass-panel--strong` | High blur, for modals |
| `ease-glass-panel--rounded` | Extra rounded corners |
| `ease-glass-panel--sharp` | Sharper corners |
| `ease-glass-panel--pill` | Pill shape |
| `ease-glass-panel--hoverable` | Hover + active states |

## Dark Mode

Automatically adapts via `prefers-color-scheme: dark`.

## Browser Support

Requires `backdrop-filter` support:
- Chrome 76+
- Firefox 103+
- Safari 9+

Degrades gracefully to a semi-transparent surface on unsupported browsers.