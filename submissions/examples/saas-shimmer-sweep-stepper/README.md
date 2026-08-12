# CSS Shimmer-Sweep Stepper (SaaS Layout)

A modern, highly-polished stepper component designed for SaaS onboarding flows and feature showcases. It leverages pure CSS state management and features an elegant, continuous shimmer animation on the active step indicator.

## 🚀 Features

- **Zero JavaScript:** Completely reliant on CSS and hidden radio inputs (`:checked`) to manage the current active step and content views.
- **Shimmer-Sweep Animation:** The active step circle utilizes an `@keyframes em-shimmer-sweep` animation applied to an `::after` pseudo-element, passing a semitransparent linear gradient over the element to draw the user's eye.
- **SaaS Aesthetics:** Styled with a clean, high-contrast palette typical of modern B2B/SaaS platforms, including robust box-shadows, rounded borders (`16px`), and smooth transition states.
- **Responsive Navigation:** On desktop, the stepper aligns horizontally with connecting lines. On viewports below `640px`, it gracefully collapses into a vertically stacked list layout.
- **Accessibility Integration:** Full keyboard navigation support using `tabindex="0"` on the labels paired with `:focus-visible`. Fully respects `@media (prefers-reduced-motion: reduce)` by halting the continuous shimmer loop and panel slides.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. The markup is configured to support sequential clicks via the embedded action buttons pointing to the next input's `id`.

### CSS Custom Properties
Tweak the primary branding colors and animation speed via the `:root` variables:

```css
:root {
    --em-saas-primary: #4f46e5;       /* Main brand color */
    --em-saas-shimmer: rgba(255, 255, 255, 0.6); /* Shimmer gradient highlight */
    --em-anim-speed: 0.4s;            /* Panel fade-in speed */
}
