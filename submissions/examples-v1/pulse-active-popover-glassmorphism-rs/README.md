# Pulse-Active Popover — Glassmorphism UI

A pure CSS animated popover with pulse-active interaction, styled for glassmorphism UI aesthetics.

## Features

- **4 glass cards** — Feature Info, Color Palette, Pulse Animation, Accessibility
- **Frosted glass effect** — `backdrop-filter: blur()` with semi-transparent surface
- **Gradient accents** — Purple gradient for text and buttons with glow
- **Pulse-active animation** — Smooth scale pulse on open
- **4 position variants** — Bottom, Top, Right, Left (switchable via radio buttons)
- **Dark/light mode** — Automatic via `prefers-color-scheme`
- **Reduced motion** — Respects `prefers-reduced-motion: reduce`
- **Forced colors** — Respects `forced-colors: active`
- **Keyboard accessible** — Tab navigation, Space/Enter to toggle

## Custom Properties

| Variable                   | Default                          | Description                     |
| -------------------------- | -------------------------------- | ------------------------------- |
| `--popover-duration`       | `0.35s`                          | Open/close transition duration  |
| `--popover-ease`           | `cubic-bezier(0.22, 1, 0.36, 1)` | Transition easing               |
| `--popover-pulse-duration` | `2s`                             | Pulse animation cycle time      |
| `--popover-pulse-scale`    | `1.04`                           | Scale factor at pulse peak      |
| `--popover-max-width`      | `300px`                          | Maximum popover width           |
| `--popover-gap`            | `10px`                           | Gap between trigger and popover |

## Usage

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css"
/>
<link rel="stylesheet" href="style.css" />

<div class="glass-card">
  <div class="pulse-popover-gm">
    <input type="checkbox" id="my-popover" class="pulse-popover-toggle-gm" />
    <label for="my-popover" class="pulse-popover-trigger-gm">Open</label>
    <div class="pulse-popover-content-gm" data-position="bottom" role="dialog">
      <div class="popover-header">
        <h4>Title</h4>
        <button type="button" class="popover-close">×</button>
      </div>
      <div class="popover-body"><p>Content here...</p></div>
      <div class="popover-footer">
        <button type="button" class="popover-btn">Action</button>
      </div>
    </div>
  </div>
</div>
```
