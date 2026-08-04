# IronHaven — Home Gym E-Commerce

A full-page, fully responsive e-commerce landing page designed for a premium home gym equipment brand. Built exclusively utilizing the `EaseMotion` CSS utility class pattern to deliver dark-mode aesthetics, bold typography, and high-performance scrolling animations.

## 🏋️‍♂️ Theme & Aesthetic
**High-Performance Dark Mode:**
* **Colors:** Deep Charcoal (`#0B0C10`), Surface Iron (`#15171E`), Aggressive Red (`#FF2A2A`), Ice White (`#F2F4F8`).
* **Typography:** `Oswald` (condensed, aggressive, athletic headings) paired with `Inter` (highly legible data/body text).
* **Vibe:** Intense, commercial-grade, premium, and motivating.

## 🚀 How to Run
This template requires **zero build steps**. 
1. Clone or download the repository.
2. Ensure `demo.html` and `style.css` are in the same directory.
3. Open `demo.html` in your browser.

## 🛠️ EaseMotion Classes Showcased
This project relies on the core EaseMotion CSS utility framework.

### Layout & Structure
* `ease-container`
* `ease-flex`, `ease-grid`
* `ease-grid-cols-2`, `ease-grid-cols-3`, `ease-grid-cols-4`
* `ease-gap-4`, `ease-gap-6`, `ease-gap-8`, `ease-gap-12`
* `ease-items-center`, `ease-justify-between`, `ease-justify-center`

### Theming Utilities
* `ease-bg-main`, `ease-bg-surface`, `ease-bg-primary`
* `ease-text-white`, `ease-text-primary`, `ease-text-muted`
* `ease-border`, `ease-border-primary`
* `ease-font-bold`, `ease-font-display`

### Animations & Scroll Reveals
* `ease-reveal`, `ease-reveal-up`, `ease-reveal-scale` (Observer-triggered)
* `ease-fade-in`, `ease-slide-up`, `ease-bounce-in` (Load-triggered)
* `ease-delay-100` through `ease-delay-500`

### Micro-Interactions (Hover)
* `ease-hover-lift` (Y-axis translation + heavy shadow)
* `ease-hover-scale` (Subtle 1.03x card scaling)
* `ease-hover-grow` (1.05x CTA scaling)
* `ease-hover-underline` (Animated bottom border on nav links)

## 📱 Responsiveness
The layout seamlessly degrades from a 4-column desktop grid to a 2-column tablet layout, wrapping into a stacked single-column design on mobile devices. Font sizes utilize `clamp()` to scale perfectly across viewports.