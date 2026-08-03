# Glitter Glassmorphic Maintenance Page (EaseMotion)

A visually stunning, responsive, and self-contained Scheduled Maintenance Page component designed after modern Glassmorphism overlays and ambient glittering stars.

Built entirely with pure HTML and CSS, leveraging the design tokens and layout classes of the **EaseMotion CSS** animation library.

---

## 🧱 Project Structure

- **`demo.html`**: A fully functional showcase containing the maintenance notification overlay, animated gears, and progress states.
- **`style.css`**: Component styling defining the glassmorphic card, background blobs, twinkling glitter particles, and animated SVGs.
- **`README.md`**: Explanatory documentation of design, features, and library integration.

---

## 🚀 Run the Demo

To view the live showcase:
1. Make sure `easemotion.css` is built and available at the root of the repository (referred to as `../../../easemotion.css` in `demo.html`).
2. Open `demo.html` directly in any web browser, or serve it using a lightweight local web server:
   ```bash
   npx serve submissions/examples/glitter-maintenance-page-bk/
   ```

---

## ✨ Features & Glassmorphic Design Patterns

1. **Ambient Background Glow Blobs**:
   - Features three large, highly blurred background circles (`.ambient-blob`) that drift in slow, overlapping alternate cycles (`float-blob-*`), simulating rich, dynamic colored lighting behind the glass layout.
2. **Twinkling Glitter Stars (`ease-kf-twinkle`)**:
   - Staggered vector star elements (`.glitter-sparkle`) that scale, rotate, and fade in/out infinitely to produce a sparkling, glittering background environment.
3. **High-Fidelity Glassmorphism**:
   - The card uses a high backdrop blur (`backdrop-filter: blur(20px)`), an semi-transparent glass border (`rgba(255,255,255,0.08)`), and an inset light border reflection. On hover, a glittering sheening shine sweeps across the card face.
4. **Synchronized Spinning Gears**:
   - An interactive center illustration featuring a primary gear rotating clockwise (`gear-spin-clockwise`) and a secondary gear mesh rotating counter-clockwise (`gear-spin-counter`), flanked by active sparkles.
5. **Shimmering Progress Bar**:
   - Displays upgrade completion at 92%. The progress fill uses a multi-color gradient that continuously shifts and sweeps (`progress-color-shift`), creating a liquid-like glowing energy pulse.
6. **Pure CSS and Interactive Actions**:
   - Built to run entirely in CSS with a focusable, highly responsive primary action button and supporting status hyperlinks.

---

## 🎛️ EaseMotion CSS Integration

| Resource / Class | Applied to | Description / Purpose |
|---|---|---|
| `--ease-font-sans` | Body wrapper | Standardizes clean, premium typography (`Inter`) |
| `--ease-space-*` | Margin, padding, gaps | Follows the library's layout grids and spacing scale |
| `--ease-radius-lg` / `xl` | Card, buttons | Unifies the border-radius styling across components |
| `--ease-color-primary` | Main gear, button outlines | Brand primary color token |
| `--ease-color-secondary` | Secondary gear, sparkles | Brand secondary color token |
| `--ease-color-info` | Blobs, links | System info color token |
| `ease-fade-in` | Card container | Fades the entire maintenance card in on first load |
| `ease-slide-up` | Card container | Slides the card upward gracefully during initialization |
| `ease-ease` | CSS animations | Standard library timing function for smooth easing |

---

## ♿ Accessibility & Performance

- **Semantic HTML**: Built using `<main>`, `<section>`, and `<header>` landmarks. Included role attributes (`role="progressbar"`) and label bindings (`aria-labelledby`, `aria-valuenow`).
- **Reduced Motion Support**: Inside `@media (prefers-reduced-motion: reduce)`, all infinite rotation animations, background drifting, and color-shifting progress bars are completely deactivated. Particles render as static elements to maintain accessibility safety.
- **GPU Optimized Rendering**: All floating and sweeping animations are bound to `transform` and `opacity` to keep rendering in the compositor layer and prevent paint recalculation overhead.
