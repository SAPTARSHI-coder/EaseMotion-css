# CSS Blur-Entrance Pricing Table (Glassmorphism UI)

A stunning, pure CSS pricing table designed for Glassmorphism UI Layouts. It features animated background orbs and a highly cinematic, sequential "Blur-Entrance" animation that executes on page load, requiring zero JavaScript.

## Features
- Pure CSS and HTML (No JavaScript required for animations or staggering).
- **Glassmorphism Aesthetic**: Deep slate background contrasted with slowly drifting `.bg-orb` elements. The orbs are heavily blurred (`filter: blur(100px)`) to create ambient color zones.
- The `.glass-panel` cards utilize `backdrop-filter: blur(20px)` to create a premium frosted-glass effect that sits perfectly atop the animated orbs.
- **The Blur-Entrance Effect**: All major elements are assigned the `.entrance-anim` class.
- The `cinematic-blur-in` `@keyframes` animation governs the entrance. It starts the element at `opacity: 0`, `filter: blur(20px)`, `scale(1.08)`, and slightly translated down. It smoothly animates to full opacity, sharp focus (`blur(0)`), and normal scale.
- We utilize a custom `cubic-bezier(0.19, 1, 0.22, 1)` transition timing function. This creates a highly cinematic, dramatic easing that starts fast and settles very slowly into place.
- **Sequential Staggering**: By leveraging simple CSS utility classes (`.stagger-1`, `.stagger-2`, `.stagger-3`) that apply an `animation-delay` (e.g., `0.1s`, `0.25s`, `0.4s`), the cards appear sequentially across the screen, creating a cascading visual hierarchy.
- Clean typography using the `Outfit` font, custom SVG checkmarks for the feature lists, and a highlighted "Recommended" plan styling that manages its own specific entrance keyframes to settle at a larger scale.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the ambient orb drift is frozen. The aggressive spatial scaling, translation, and blurring are completely stripped from the entrance animation. The interaction gracefully falls back to a safe, immediate, and simple opacity cross-fade.

## Usage
Open `demo.html` in your browser. Upon initial load (or upon refreshing the page), you will see the cinematic entrance. The header text and pricing cards fade in sequentially from left to right, transitioning from a highly blurred, enlarged state into sharp focus.

## Files
- `demo.html`: The HTML structure for the layout, detailing the application of the `.entrance-anim` and `.stagger-*` classes to orchestrate the load sequence.
- `style.css`: The styling, background orb animations, frosted-glass filters, and the complex `@keyframes` driving the cinematic blur mechanics.
