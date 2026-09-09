# Glowing Stepper Nav (SaaS Modern)

A pure CSS, hardware-accelerated glowing progress stepper component styled for modern SaaS interfaces and onboarding flows.

## 🌟 Highlights

- **Zero JavaScript Dependencies:** Pure CSS implementation leveraging accessible semantic HTML markup (`<nav>`, `<ol>`, `aria-current="step"`).
- **Hardware-Accelerated Glow Effect:** Uses GPU-friendly `transform: scale3d()` and layered `box-shadow` pulses on the active state.
- **Fully Responsive:** Smoothly shifts from a horizontal track on desktop/tablet to a vertical left-anchored pipeline on mobile screens (< 640px).
- **Comprehensive Accessibility:**
  - `prefers-reduced-motion: reduce` overrides to halt spatial keyframe pulses.
  - Full Windows High Contrast Mode (`forced-colors: active`) support.
  - WCAG 2.1 AA dual-ring keyboard focus indicators (`:focus-visible`).

## 📁 Package Structure

```text
submissions/examples/glowing-stepper-nav/
├── style.css       # Complete CSS tokens, animations, and responsive layout
├── demo.html       # Standalone browser test harness
└── README.md       # Documentation & token guide
