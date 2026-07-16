# Rainbow Gradient Text Cycle

Text fill that continuously cycles through full-spectrum rainbow colors, using `background-clip: text` combined with an animated `background-position`.

## 🎥 Preview

Open `demo.html` in a browser to see the effect at multiple speeds and sizes.

## ✨ How It Works

1. **A wide, looping linear-gradient** spans the full rainbow spectrum and repeats its first color at the end, so it loops seamlessly:

   ```css
   .rainbow-text {
     background-image: linear-gradient(
       90deg,
       #ff0000, #ff8a00, #ffe600, #00ff6a,
       #00d4ff, #6a5bff, #ff00d4, #ff0000
     );
     background-size: 200% 100%;
   }
   ```

   The gradient is sized at `200% 100%` — twice the element's width — so there's room to slide it without ever revealing a hard edge.

2. **Clipped to the text shape** using `background-clip: text`, with the text's own fill color made transparent so the gradient shows through instead:

   ```css
   .rainbow-text {
     background-clip: text;
     -webkit-background-clip: text;
     color: transparent;
     -webkit-text-fill-color: transparent;
   }
   ```

3. **Animating the gradient position** slides the rainbow horizontally through the text. Because the gradient is double-width and ends on the same color it starts with, the loop is seamless:

   ```css
   @keyframes ease-rainbow-cycle {
     to {
       background-position: -200% 50%;
     }
   }

   .rainbow-text {
     animation: ease-rainbow-cycle var(--ease-rainbow-speed) linear infinite;
   }
   ```

## ✅ Acceptance Criteria

- [x] `background-clip: text` + animated `linear-gradient` position
- [x] Full spectrum color cycle (red → orange → yellow → green → cyan → blue → magenta → red)
- [x] `--ease-rainbow-speed` custom property controls cycle duration

## 🎴 ease-card Component

Each example is now wrapped in a reusable `.ease-card` container — a simple, themeable card design used to present each variant cleanly:

```html
<div class="ease-card">
  <h2 class="rainbow-text">Default Speed</h2>
  <p class="ease-card__meta">--ease-rainbow-speed: 4s</p>
</div>
```

| Variable | Description | Default |
|---|---|---|
| `--ease-card-bg` | Card background color | `#16161f` |
| `--ease-card-border-color` | Card border color | `rgba(255,255,255,0.08)` |
| `--ease-card-radius` | Corner radius | `16px` |
| `--ease-card-padding` | Inner padding | `2rem 1.75rem` |
| `--ease-card-gap` | Gap between card children | `0.6rem` |
| `--ease-card-shadow` | Drop shadow | `0 8px 24px rgba(0,0,0,0.35)` |
| `--ease-card-accent` | Accent color for `.ease-card--accent` top border | `#6a5bff` |

Use the `.ease-card--accent` modifier to add a colored top border for featured/highlighted examples.

## 🎛️ Customizable Variables

| Variable | Description | Default |
|---|---|---|
| `--ease-rainbow-speed` | Duration of one full color cycle | `4s` |

Gradient colors are set directly on `background-image`; swap the color stops to use a different palette (e.g. pastel, neon, brand colors) while keeping the same animation.

## 📂 Files

- `demo.html` — Markup with five example text elements (default, fast, slow, small, bold)
- `style.css` — All styling, including the gradient, clip, and keyframe animation

## ♿ Accessibility

When `prefers-reduced-motion: reduce` is set, the animation is disabled and the gradient is frozen at its midpoint, so text remains legible and colorful without motion.

## 🌐 Browser Support

`background-clip: text` is widely supported in modern browsers but still requires the `-webkit-` prefix in some (notably Safari), which is included here. No fallback is needed beyond that — unsupported browsers will simply show solid black/default text color rather than failing visibly.