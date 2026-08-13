
# CSS Zoom-In Badge (Minimalist Tech Layout)

A lightweight, high-performance badge component built completely with pure CSS, tailored for Minimalist Tech and modern SaaS interfaces. Features a smooth zoom-in scale entrance animation.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS animations, custom properties, and keyframe timelines.
- **Zoom-In Scale Entrance:** The badge element initializes at `scale(0.8)` with zero opacity, smoothly scaling and fading into crisp focus (`scale(1)`, opacity `1`) using a performant `cubic-bezier(0.16, 1, 0.3, 1)` easing curve.
- **Minimalist Design:** Styled with delicate glassmorphism (`backdrop-filter: blur(16px)`), monospaced tech typography, subtle borders, and an elegant accent glow.
- **Accessible & Responsive:** Fluidly scales across all device viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override that neutralizes scale animations instantly for users with vestibular sensitivities.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Apply the `.mt-badge` class to any span or container element to trigger the entrance effect.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --mt-accent: #3b82f6;            /* Accent text & glow color */
    --mt-speed: 0.6s;                 /* Badge entrance speed */
}
