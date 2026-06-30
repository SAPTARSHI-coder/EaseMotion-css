# Cyberpunk Terminal Grid

## What does this do?

This submission creates a futuristic terminal component with a glowing grid overlay, animated scan lines, and stylized command output for sci-fi dashboards, portfolio heroes, and hacker-inspired UI sections.

## How is it used?

Apply the base structure to any container and add the classes you want to emphasize:

```html
<div class="ease-hacker-grid ease-hacker-cyan">
  <div class="ease-hacker-line"></div>
  <div class="terminal-body">
    <p class="terminal-prompt">&gt; connecting to node...</p>
    <p class="terminal-output">[SYS] relay online</p>
  </div>
</div>
```

## Why is it useful?

It fits EaseMotion CSS by pairing motion-first visuals with reusable, CSS-only styling that feels polished, animated, and easy to adapt for modern interfaces.

## Features

- Cyberpunk-themed terminal panel
- Animated scan line and data-stream styling
- Glow effects and grid background overlay
- Responsive layout for hero sections and cards
- Variants for green, cyan, red, purple, and matrix-inspired looks

## Available classes

- `ease-hacker-grid` — base terminal panel
- `ease-hacker-line` — moving scan line effect
- `ease-hacker-green`, `ease-hacker-cyan`, `ease-hacker-red`, `ease-hacker-purple`, `ease-hacker-matrix` — color variants

## Animation controls

Use the custom properties below to tune the motion and visuals:

```css
:root {
  --ease-hacker-scan-speed: 2.6s;
  --ease-hacker-radius: 20px;
  --ease-hacker-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
  --ease-hacker-padding: 1.2rem;
  --ease-hacker-transition: 240ms cubic-bezier(0.22, 1, 0.36, 1);
}
```

## CSS variable customization

The component also supports:

- `--ease-hacker-bg`
- `--ease-hacker-color`
- `--ease-hacker-glow`
- `--ease-hacker-grid-color`

## Browser compatibility

Works in modern evergreen browsers that support CSS gradients, transforms, backdrop filters, and `prefers-reduced-motion`.

## Accessibility considerations

- Keeps contrast readable for text and prompt labels
- Respects `prefers-reduced-motion` by disabling animated scan effects
- Avoids dependency on JavaScript or flashing effects for core usability
