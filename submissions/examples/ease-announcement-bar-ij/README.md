# Announcement Bar

> A top-fixed announcement bar that slides in/out, cycles through multiple messages, and includes a progress-backed auto-dismiss. Built with CSS custom properties and JavaScript.

## Features

- Slides in from top, slides up on dismiss
- Cycles through multiple announcements with crossfade
- Progress bar tracking time until next message
- CTA button with pulse animation
- Dismiss button with slide-up + fade transition
- Reset button to show the bar again

## Usage

Include the stylesheet and HTML structure with `.ab-bar`. Call the JavaScript to start the cycle.

```html
<link rel="stylesheet" href="style.css" />
```

```html
<div class="ab-bar" id="announcementBar">...</div>
```

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ab-duration` | `0.5s` | Slide in/out transition duration |
| `--ab-bar-bg` | `#1a1a2e` | Bar background color |
| `--ab-text-color` | `#ffffff` | Text color |
| `--ab-cta-color` | `#e94560` | CTA button background |
| `--ab-height` | `56px` | Bar height |

## Browser Support

Chrome, Firefox, Safari, Edge — any browser supporting CSS `translateY`, `@keyframes`, and `transition`.

## License

MIT
