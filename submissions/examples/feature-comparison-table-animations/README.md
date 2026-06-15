# Feature Comparison Table Animations

A premium, production-quality SaaS feature comparison and pricing table showcase designed to guide user decision-making using subtle, purposeful motion patterns. This component demonstrates how animated cues can improve scannability, establish visual hierarchy, and enhance overall user experience without cluttering the screen.

---

## Feature Overview

SaaS platforms, subscription services, and developer portals rely heavily on feature matrices to communicate values between pricing tiers. However, large tables are historically tedious to scan. 

This example solves that challenge by embedding targeted, CSS-based micro-animations that respond to mouse, keyboard, and load states. Using hardware-accelerated transforms and opacity, it highlights user hover lines, focuses column ranges, draws focus to key CTA selections, and alerts the eye to recommended choices via smooth pulsing badge markers.

---

## Why It Fits EaseMotion CSS

The component embodies the primary pillars of the EaseMotion CSS system:
* **Human-Readable Structure**: Standard semantic class names, clean structure, and highly descriptive properties.
* **Animation-First Philosophy**: Leverages high-performance properties (`transform`, `opacity`, and `box-shadow`) targeting the GPU for smooth, jank-free 60fps animations.
* **Composable Classes**: The motion utilities (e.g. `.ease-row-hover`, `.ease-cta-lift`, `.ease-badge-pulse`) are designed to be independently reusable.
* **Practical Enhancements**: Focuses on professional, real-world utility over flashy animations.

---

## Included Files

* **`demo.html`**: A fully semantic markup structure of a premium pricing section containing a billing toggle mockup, the comparison table with a designated "Most Popular" tier, and an Interactive Playground to customize or test states.
* **`style.css`**: The design system file containing premium HSL CSS variables, responsive rules, desktop layout, scroll triggers on mobile, and the core animation declarations.
* **`README.md`**: Feature guidelines and documentation.

---

## Animation Breakdown

1. **Row Hover (`.ease-row-hover`)**:
   Guides tracking across wide datasets. When hovering a feature row, the row receives a subtle background highlight and shifts 6px horizontally (`transform: translateX(6px)`) with a clean cubic-bezier timing function.
2. **Column Emphasis (`.ease-column-focus`)**:
   Highlights entire plan tiers. When hovering header cards or plan rows, the corresponding column cells receive a translucent layer overlay to visually isolate the tier.
3. **Recommended Badge Pulse (`.ease-badge-pulse`)**:
   Draws attention to the "Most Popular" plan via a gentle, looping scale and glow effect (`box-shadow` & `transform: scale(1.06)`) on the badge.
4. **Call-to-Action Lift (`.ease-cta-lift`)**:
   Provides tangible click feedback on purchase actions, lifting the button upward on hover (`transform: translateY(-4px)`) and scaling the button shadow.
5. **Entrance Reveal (`.ease-reveal-active .reveal-stagger`)**:
   Performs a staggered, soft slide up (`translateY(24px)`) to gracefully reveal the elements in sequence when the landing page loads.

---

## Usage Ideas

This comparison table layout and animation system is perfect for:
* SaaS Pricing Sheets (e.g., Starter, Pro, Enterprise tiers).
* Hosting Platform matrix configurations.
* Developer tooling capabilities comparisons.
* E-Commerce product differences.

---

## Accessibility Considerations

* **Reduced Motion Support**: Implements `@media (prefers-reduced-motion: reduce)` to disable translations, pulses, scaling, and transitions while preserving clean layout styles.
* **Contrast**: Text, badges, and focus rings meet WCAG accessibility standards for dark backgrounds.
* **Keyboard Navigation**: CTA links, billing toggle, and reviewer switches support clear keyboard focus states using `:focus-visible`.
* **Mobile Responsiveness**: Automatically shifts into an overflow-x scroll container on screens under `680px` to avoid broken text wrapping or clipped details, complete with a visual swipe indicator.
