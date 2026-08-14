# CSS Shimmer Pulse Modal

A hardware-accelerated, pure CSS dialog component featuring a smooth top shimmer line animation paired with a full-window deep pulse glow effect. Engineered specifically to meet the high aesthetic standards of modern interactive digital creative portfolios.

## Features
- **Zero JavaScript Overhead:** Runs natively on the browser window layer using the CSS `:target` tracking mechanism.
- **Dual Animation System:** Synchronized infinite shimmer gradient flow paired with subtle scale and shadow glow pulsation.
- **Full Control Variables:** Centralizes animation timing profiles directly inside CSS variables.
- **Deep Layout Accessibility:** Provides structural semantic elements like close-by-backdrop anchors and native overlay scaling controls.

## Control Variable Parameters
Modify these values within `:root` of `style.css` to change the performance values:
- `--modal-speed`: Modal fade-in and scale-up transition length (default: `0.4s`)
- `--shimmer-duration`: Cycle interval rate for the shimmer slide and scale pulsing loop (default: `2.5s`)
- `--pulse-scale`: Maximum transform sizing parameter triggered during maximum animation expansion point (default: `1.015`)
