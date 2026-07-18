# Glass Morphism Panel Utilities

A collection of frosted-glass UI panel utilities built with EaseMotion CSS design tokens. These utilities create premium, modern interfaces using `backdrop-filter`, semi-transparent backgrounds, and layered borders.

## Features

- **6 accent variants**: default, primary, secondary, success, danger, warning, info
- **Size modifiers**: `--sm`, `--lg`, `--xl`, `--pill`
- **Interactive states**: hoverable lift + glow, focus-visible outlines
- **Component variants**: panels, cards with header/body/footer, badges, buttons, inputs
- **Dark mode**: automatic via `prefers-color-scheme`
- **Reduced motion**: respects `prefers-reduced-motion`

## Design Tokens Used

| Token | Value |
|-------|-------|
| `--ease-speed-fast` | 150ms |
| `--ease-speed-medium` | 300ms |
| `--ease-ease` | cubic-bezier(0.4, 0, 0.2, 1) |
| `--ease-color-primary` | #6c63ff |
| `--ease-color-surface` | #ffffff |
| `--ease-radius-lg` | 1rem |
| `--ease-glow-primary` | 0 0 16px rgba(108,99,255,0.45) |
| `--ease-font-sans` | Inter, system-ui |

## Usage

Apply the `.glass-panel` class to any container:

```html
<div class="glass-panel">
  Frosted glass content here
</div>
```

Add accent variants with modifier classes:

```html
<div class="glass-panel glass-panel--primary">
  Purple-tinted glass panel
</div>
```

Interactive hover effect:

```html
<div class="glass-panel glass-panel--hoverable glass-panel--dark">
  Hover me for lift + glow
</div>
```

Glass card with structured sections:

```html
<div class="glass-card">
  <div class="glass-card__header">Title</div>
  <div class="glass-card__body">Content</div>
  <div class="glass-card__footer">Footer</div>
</div>
```

## Browser Support

`backdrop-filter` is supported in Chrome 76+, Firefox 103+, Safari 9+. For unsupported browsers, the panels gracefully degrade to solid semi-transparent backgrounds.

## Files

- `style.css` — all glass morphism utilities
- `demo.html` — interactive showcase
- `README.md` — this documentation
