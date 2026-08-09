# CSS Observatory Dome Slit (ease-dome-observatory-slit)

An intermediate, high-performance UI control component built completely with pure CSS, tailored specifically for astronomy, telemetry, and modern tech dashboards. Features a continuous animated observatory dome slit tracking the sky.

## 🚀 Features

- **Zero JavaScript:** Built entirely using pure CSS keyframe animations, custom properties, and native timing curves.
- **Dome Slit Tracking:** Features a smooth oscillating `@keyframes dome_observatory_slit_motion` animation simulating a rotating observatory roof slit tracking stellar coordinates.
- **Themed UI Controls:** Includes status indicators, telemetry dials, azimuth metrics, and glassmorphic housing (`backdrop-filter: blur(20px)`).
- **Accessible & Responsive:** Fully responsive across all device viewports. Includes a strict `@media (prefers-reduced-motion: reduce)` override that halts rotational motion for motion-sensitive users.

## 🛠️ Usage

Copy the HTML structure from `demo.html` and link the styles from `style.css`.

### CSS Custom Properties
Easily theme the component via the `:root` variables:

```css
:root {
    --em-accent: #6366f1;            /* Indicator & accent glow color */
    --em-speed: 8s;                   /* Slit tracking animation speed */
}
