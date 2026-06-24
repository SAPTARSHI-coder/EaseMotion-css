# ease-neon

Neon glow text and border utility classes for EaseMotion CSS.
Zero JavaScript. Pure CSS `text-shadow` and `box-shadow` layering.

## Classes

| Class | Description |
|---|---|
| `.ease-neon` | Base neon text glow (default: purple) |
| `.ease-neon-purple` | Purple neon color |
| `.ease-neon-blue` | Electric blue neon |
| `.ease-neon-green` | Matrix green neon |
| `.ease-neon-pink` | Hot pink neon |
| `.ease-neon-red` | Red neon |
| `.ease-neon-yellow` | Yellow neon |
| `.ease-neon-border` | Neon glow on element border |
| `.ease-neon-flicker` | Realistic flicker animation |
| `.ease-neon-pulse` | Soft pulse animation |

## Usage

```html
<!-- Neon text -->
<h1 class="ease-neon ease-neon-pink">NEON LIGHTS</h1>

<!-- Neon border card -->
<div class="ease-neon-border ease-neon-blue">Glowing Card</div>

<!-- Flicker animation -->
<h2 class="ease-neon ease-neon-green ease-neon-flicker">FLICKER</h2>

<!-- Pulse animation -->
<h2 class="ease-neon ease-neon-blue ease-neon-pulse">PULSE</h2>

<!-- Composable: border + text glow -->
<button class="ease-neon ease-neon-pink ease-neon-border ease-neon-pink">Launch</button>
```

## How it works

Color is controlled by a single CSS custom property `--ease-neon-color`.
Color modifier classes set this variable, so `.ease-neon` and `.ease-neon-border`
both pick it up automatically — no duplication needed.

## Accessibility

Respects `prefers-reduced-motion` — flicker and pulse animations are
disabled for users who prefer reduced motion.
