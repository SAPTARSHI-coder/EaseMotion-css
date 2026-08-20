# CSS Zoom-In Toast (Minimalist Tech Layout)

An intermediate, high-performance notification toast component built completely with pure CSS, tailored for Minimalist Tech and SaaS interfaces. Features a smooth zoom-in scale and fade entrance transition.

## 🚀 Features

- **Zero JavaScript:** Employs the CSS hidden-checkbox toggle pattern (`input type="checkbox"`) to manage open and closed states natively.
- **Zoom-In Scale Entrance:** The notification toast animates from `scale(0.95)` and slight vertical offset into crisp focus (`scale(1)`) using a performant `cubic-bezier(0.16, 1, 0.3, 1)` easing curve.
- **Minimalist Design:** Styled with delicate glassmorphism (`backdrop-filter: blur(16px)`), subtle borders, soft drop-shadows, and a refined success accent glow.
- **Accessible & Responsive:** Fluidly scales across all device viewports, turning into a responsive width toast on narrow screens. Includes full keyboard navigation support and a strict `@media (prefers-reduced-motion: reduce)` override that neutralizes scale transforms for sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`. Toggle the checkbox state to trigger or dismiss the zoom-in notification toast.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --mt-success: #10b981;            /* Success icon & glow color */
    --mt-speed: 0.4s;                 /* Toast entrance speed */
}
