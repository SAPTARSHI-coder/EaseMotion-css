# Post Card Social

A social media post card component with animated interactions. Features a like button with heartbeat bounce, expandable comments section, share button with slide-in platform options, and a bookmark toggle — all with smooth animated feedback.

## Features

- Like button with heartbeat keyframe animation
- Expandable comment section with input
- Share button revealing platform options
- Bookmark toggle with bounce effect
- Animated feedback on all interactive elements
- Customizable via CSS custom properties

## Usage

```html
<link rel="stylesheet" href="style.css">
```

```html
<div class="pcs-card">
  <!-- header, body, actions, share-options, comments -->
</div>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--pcs-duration` | `0.3s` | Transition duration |
| `--pcs-card-bg` | `#ffffff` | Card background |
| `--pcs-primary` | `#636ae2` | Primary accent color |
| `--pcs-like-color` | `#ef4444` | Like button active color |
| `--pcs-share-color` | `#22c55e` | Share button active color |
| `--pcs-radius` | `16px` | Card border radius |

## License

MIT
