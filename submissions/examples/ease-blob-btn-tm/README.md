# ease-blob-btn

A button with an organic blob morphing background animation that continuously changes shape.

## Issue
[#64947](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/64947)

## Feature Overview
Animated blob-shaped button using CSS border-radius morphing via keyframes. The shape continuously changes between organic forms creating an alive, breathing effect. Supports multiple colors, sizes, and states.

## Design Tokens

| Token | Default | Description |
|---|---|---|
| `--blob-primary` | `#a855f7` | Primary background color |
| `--blob-secondary` | `#6366f1` | Secondary color variant |
| `--blob-accent` | `#ec4899` | Accent color variant |
| `--blob-bg` | `#0f0f23` | Page background |
| `--blob-text` | `#f8fafc` | Button text color |
| `--blob-radius` | `30% 70% 70% 30% / 30% 30% 70% 70%` | Initial border radius |
| `--blob-duration` | `8s` | Animation cycle duration |

## Variants

| Class | Description |
|---|---|
| `.blob-secondary` | Indigo background |
| `.blob-accent` | Pink background |
| `.blob-sm` | Small size (8px 20px padding) |
| `.blob-lg` | Large size (18px 48px padding) |
| `.blob-xl` | Extra large size |
| `.blob-outline` | Transparent with colored border |
| `.blob-icon` | Circular icon button (52x52px) |
| `.blob-loading` | Shows spinner, disables interaction |
| `.blob-disabled` | Disabled state, animation paused |

## Usage

```html
<link rel="stylesheet" href="style.css" />
<button class="blob-btn">Get Started</button>
<button class="blob-btn blob-accent blob-lg">Large Accent</button>
<button class="blob-btn blob-outline">Outlined</button>
```

## Accessibility
- Uses semantic `<button>` element
- Disabled state supported with `disabled` attribute
- Focus-visible outline for keyboard navigation
- Respects `prefers-reduced-motion` (animation paused)
