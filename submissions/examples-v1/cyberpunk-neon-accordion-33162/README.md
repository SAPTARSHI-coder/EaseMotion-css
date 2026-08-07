# Cyberpunk Neon 3D Perspective Accordion (Phase #33162)

A pure CSS, zero-dependency animated accordion built for the EaseMotion framework. It utilizes standard `perspective`, 3D transforms, and CSS Grid rendering for butter-smooth interactions mapping to a dark cyber-aesthetic.

## 🚀 Technical Highlights
- **Zero JS:** Relies on the HTML radio input hack mapped to `<label>` tags for managing state.
- **Accessible:** Uses `.sr-only` visually hidden rules so the radio inputs remain naturally focusable via keyboard (`Tab` and `Space`/`Enter` keys).
- **Grid Layout Animation:** Escapes the traditional `max-height` CSS trap by animating `grid-template-rows` from `0fr` to `1fr` for flawless height calculation.
- **Hardware Accelerated:** Animations rely strictly on `transform`, `opacity`, and pseudo-3D `translateZ` pushing.

## ⚙️ CSS Custom Properties Config

Exposed standard properties injected at the `:root` level for immediate framework consumption.

| Variable | Default Value | Description |
| :--- | :--- | :--- |
| `--ease-timing-33162` | `0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)` | Master animation timing and elasticity curve. |
| `--tilt-angle-33162` | `6deg` | Maximum degree of rotation applied to the X/Y axis on hover. |
| `--scale-factor-33162` | `1.02` | Pop-out dimensional scaling applied during hover interaction. |

## 🛠️ Usage
1. Open `demo.html` locally.
2. Use the mouse to trigger the 3D hover states.
3. Click headers to test smooth content expansion.
4. Use the `Tab` key to verify the `:focus-visible` dashed yellow accessibility outlines.