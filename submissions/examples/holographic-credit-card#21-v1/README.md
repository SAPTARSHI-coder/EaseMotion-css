## Description
This PR introduces the **Holographic Credit Card** — a premium, interactive 3D card component featuring holographic overlays, rainbow gradients, shine sweeps, and floating particles. Built entirely with pure CSS.

## Related Issue
Closes #<Issue_Number>

## Type of Change
- [x] ✨ New feature
- [ ] 🐛 Bug fix
- [ ] 📝 Documentation update

## Components Added
- 📁 New Folder: `holographic-credit-card/`
- 📄 `demo.html`: Complete card structure with chip, contactless icon, card number, holder info, logo, and particle elements.
- 🎨 `style.css`: 250+ lines of advanced CSS including 3D transforms, `mix-blend-mode`, `conic-gradient`, `hue-rotate` animation, and multi-layer compositing.
- 📖 `README.md`: Full documentation with customization guide and browser support info.

## Technical Highlights
- **3D Transforms**: `perspective`, `preserve-3d`, `rotateX/Y` for realistic card tilt.
- **Blend Modes**: `mix-blend-mode: overlay` and `color-dodge` for holographic effects.
- **Conic Gradient**: Spinning rainbow layer with `hue-rotate` keyframes.
- **Shine Effect**: Diagonal gradient sweep using `transform: translateX()`.
- **Particle System**: Six floating particles with independent animation delays.
- **Responsive**: Scales down for mobile viewports.

## How Has This Been Tested?
- Tested on Chrome, Firefox, and Safari for 3D transform and blend mode support.
- Verified smooth hover transitions at 60FPS.
- Confirmed responsive behavior on mobile screens.
- Zero JavaScript used — all interactions are CSS hover states.

## Checklist:
- [x] My code follows the style guidelines of EaseMotion CSS.
- [x] I have added a comprehensive `README.md`.
- [x] The code is pure CSS with zero dependencies.
- [x] All animations use CSS keyframes and custom properties.
- [x] The component is responsive and mobile-friendly.
- [x] No external images or fonts required.