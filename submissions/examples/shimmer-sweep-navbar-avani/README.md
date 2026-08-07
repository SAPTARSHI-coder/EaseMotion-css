# Shimmer-Sweep Navbar (#54538)

## Engineering Overview
A luxury, glassmorphic navigation bar component built using pure CSS. It features a continuous, sweeping light shimmer effect across its surface to give creative portfolios a high-end feel.

## Key Technical Features
- **Pseudo-Element Shimmer:** Leverages a dynamic `::after` pseudo-element combined with an engineered linear gradient sweep.
- **Hardware Acceleration:** Smooth 60FPS animation powered strictly by positioning shifts over GPU-friendly layers.
- **Accessibility Safeguard:** Integrated `@media (prefers-reduced-motion: reduce)` media query to disable animation loops automatically.
- **Configurable Custom Properties:** Easily alter sweep velocity (`--shimmer-speed`) or glow intensity via CSS root variables.