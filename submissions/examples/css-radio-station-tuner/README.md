# CSS Radio Station Tuner

An advanced, high-performance UI component built completely with pure CSS, tailored specifically for retro analog panels, audio gear showcases, and modern tech portfolios. Features an animated frequency slider needle sweeping across a calibrated scale.

## 🚀 Features

- **Zero JavaScript:** Built entirely using native CSS keyframe timelines and custom properties.
- **Retro Frequency Dial:** Features a calibrated analog frequency ruler paired with a glowing slider needle (`@keyframes em-dial-sweep`) mimicking vintage radio frequency modulation.
- **SaaS Glassmorphism:** Styled with modern frosted glass cards (`backdrop-filter: blur(20px)`), glowing amber highlights, and a digital frequency readout.
- **Accessible & Responsive:** Fully responsive across all viewports with ARIA landmarks and keyboard focus states. Includes a strict `@media (prefers-reduced-motion: reduce)` override that centers the needle for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #f59e0b;            /* Needle & readout accent color */
    --em-speed: 6s;                   /* Dial sweep duration */
}
