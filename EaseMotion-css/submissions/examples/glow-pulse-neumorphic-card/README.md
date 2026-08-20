# Glow Pulse Neumorphic Card

A pure CSS card component with a soft **Glow Pulse** animation on hover/focus, styled with a Neumorphic Soft aesthetic. Zero JavaScript required.

## Usage

```html
<link rel="stylesheet" href="style.css" />

<div class="glow-pulse-card" tabindex="0">
  <h3>Glow Pulse Card</h3>
  <p>Your content here.</p>
</div>
```

## Customization

Configure the animation via CSS custom properties:

| Property         | Default    | Description                          |
|-------------------|------------|---------------------------------------|
| `--glow-color`    | `#6c63ff`  | Color of the pulsing glow             |
| `--glow-duration` | `2.2s`     | Duration of one pulse cycle           |
| `--glow-easing`   | `ease-in-out` | Animation timing function          |
| `--glow-scale`    | `1.03`     | Scale factor applied on hover/focus   |
| `--card-bg`       | `#e0e5ec`  | Card background color                 |
| `--card-radius`   | `20px`     | Card corner radius                    |

Example override:

```html
<div class="glow-pulse-card" style="--glow-color: #ff6363; --glow-duration: 1.5s;">
  ...
</div>
```

## Accessibility

- Card is keyboard-focusable via `tabindex="0"`.
- Glow animation triggers on both `:hover` and `:focus-visible`.
- A visible focus ring is added via `box-shadow` for keyboard users.

## Responsive

Card scales to full width on small viewports (`max-width: 480px`).

## Why it fits EaseMotion CSS

Uses standard CSS custom properties for full runtime configurability, keeps to a human-readable class name (`glow-pulse-card`), and requires zero JavaScript — in line with EaseMotion's animation-first, lightweight philosophy.