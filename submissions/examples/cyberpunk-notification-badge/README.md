# Interactive Notification Alert Badge (Cyberpunk Styling)

This submission introduces a new variant of the standard notification badge component: the **Cyberpunk Notification Alert Badge**. 

> ⚠️ **Note on Repository Constraints:** 
> EaseMotion strictly enforces that all Pull Requests (via `submission-validator.yml`) must **only** modify files within the `submissions/` directory. To comply with the repository CI pipelines, this component variant has been submitted as a fully functional and documented example in `submissions/examples/cyberpunk-notification-badge/`.

## Feature Overview

The Cyberpunk Notification Alert Badge brings high-energy, futuristic aesthetics to standard system notifications. It leverages `clip-path` for sharp, non-rectangular geometry and CSS hardware-accelerated animations for a digital "glitch" and "pulse" effect.

### Included CSS

1. **Cyberpunk Design Tokens:** Themed via CSS Custom Properties (`--ease-cyberpunk-primary`, `--ease-cyberpunk-bg`, `--ease-cyberpunk-badge-bg`) allowing for easy customization of the glowing neon colors.
2. **Clipped Geometry:** Utilizes `clip-path: polygon(...)` to carve out aggressive, tech-inspired corners on both the trigger button and the badge itself without using background imagery.
3. **Hardware-Accelerated Animation:** The badge employs a continuous breathing pulse (`scale()`), which transitions into a hyper-active glitch effect (`translate()`) when the user interacts with the parent trigger. Both effects run entirely on the GPU (`will-change: transform`).
4. **Drop Shadows with Clipped Elements:** Demonstrates the advanced CSS technique of using `filter: drop-shadow()` on a wrapper element to properly cast a shadow from a `clip-path` element (as standard `box-shadow` gets clipped).

## Accessibility & Responsiveness

- **Zero JS Dependencies:** Pure CSS implementation.
- **Prefers-Reduced-Motion:** Deep integration with `@media (prefers-reduced-motion: reduce)`. The rapid glitching and pulsing pose a severe risk for vestibular disorders. The fallback strips all animation physics safely locking the badge to a static state.
- **Screen Reader Support:** The demo documents the proper way to handle screen readers for badges. The parent button uses an `aria-label` to announce both the button's intent and the badge count, while `aria-hidden="true"` is applied to the badge itself to prevent double/confusing announcements.
- **Responsiveness:** Inherently scales based on the container constraints and relative units (`rem`, `ch`).
