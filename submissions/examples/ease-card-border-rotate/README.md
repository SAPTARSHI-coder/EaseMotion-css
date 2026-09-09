# Animated Conic-Gradient Border

A conic-gradient border that continuously rotates around a card's edge, built using the `@property` animated-angle technique.

## 🎥 Preview

Open `demo.html` in a browser to see four cards, each demonstrating a different speed/thickness variant of the rotating border effect.

## ✨ How It Works

1. **`@property --ease-angle`**
   Registers a custom property with `syntax: "<angle>"`, which lets the browser smoothly interpolate the angle value across keyframes (a plain CSS variable can't be animated this way — it just jumps).

   ```css
   @property --ease-angle {
     syntax: "<angle>";
     inherits: false;
     initial-value: 0deg;
   }
   ```

2. **Conic-gradient on a pseudo-element**
   The rotating gradient lives on `.card::before`, not on the card itself. This keeps the card's content and background completely untouched.

   ```css
   .card::before {
     background: conic-gradient(
       from var(--ease-angle),
       var(--ease-color-1),
       var(--ease-color-2),
       var(--ease-color-3),
       var(--ease-color-4),
       var(--ease-color-1)
     );
   }
   ```

3. **Masked down to just the border ring**
   A dual-layer mask (`content-box` + full box, combined with `mask-composite: exclude`) cuts out the center of the pseudo-element, leaving only a ring the width of the border visible.

   ```css
   .card::before {
     padding: var(--ease-border-width);
     mask:
       linear-gradient(#000 0 0) content-box,
       linear-gradient(#000 0 0);
     mask-composite: exclude;
   }
   ```

4. **Animating the angle**
   A keyframe animation drives `--ease-angle` from `0deg` to `360deg`, and because of the `@property` registration, the conic-gradient rotates smoothly instead of snapping.

   ```css
   @keyframes ease-border-rotate {
     from { --ease-angle: 0deg; }
     to   { --ease-angle: 360deg; }
   }
   ```

5. **Configurable speed**
   The `--ease-border-rotate-speed` custom property controls the animation duration, so any card can override its rotation speed individually.

   ```css
   .card::before {
     animation: ease-border-rotate var(--ease-border-rotate-speed) linear infinite;
   }
   ```

## ✅ Acceptance Criteria

- [x] `@property --ease-angle` defined for animatable rotation
- [x] Conic-gradient applied on a pseudo-element, masked to the border area only
- [x] `--ease-border-rotate-speed` custom property used to control rotation speed
- [x] Bonus: blurred glow echo (`::after`) and `prefers-reduced-motion` fallback

## 🎛️ Customizable Variables

| Variable | Description | Default |
|---|---|---|
| `--ease-angle` | Driven by the animation; do not set manually | `0deg` |
| `--ease-border-rotate-speed` | Full-rotation duration | `4s` |
| `--ease-border-width` | Thickness of the gradient border | `3px` |
| `--ease-border-radius` | Corner radius of the card and border | `16px` |
| `--ease-color-1` … `--ease-color-4` | Gradient stop colors | cyan / violet / pink / yellow |

## 📂 Files

- `demo.html` — Markup with four example cards (default, fast, slow, thick)
- `style.css` — All styling, including the `@property` declaration, mask, and keyframes

## ♿ Accessibility

The animation is disabled when the user has `prefers-reduced-motion: reduce` set in their OS/browser preferences.

## 🌐 Browser Support

Relies on `@property` (Houdini) and `mask-composite`. Supported in current versions of Chrome, Edge, and Safari. Firefox support for `@property` landed in v128+; older versions will show a static (non-rotating) gradient border as a graceful fallback.