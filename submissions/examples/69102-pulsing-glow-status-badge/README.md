# Pulsing Glow Status Badge Component (`pulsing-glow-status-badge`)

A pure HTML + Vanilla CSS status badge component featuring a solid status dot core (`.status-dot-core`), an expanding glowing aura pulse ring (`@keyframes pulse-glow-ring`), 4 status color variants (Online/Active, Warning/Busy, Critical/Offline, Neutral/Idle), pure CSS filter controls, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive status indicator component without JavaScript, external fonts, image assets, or build scripts. Works offline.
- **4 Status Color Variants**:
  - **1. Online / Active**: Emerald Green (`#10b981`), system operational.
  - **2. Warning / Busy**: Amber Yellow (`#f59e0b`), high load / traffic alert.
  - **3. Critical / Outage**: Crimson Red (`#ef4444`), outage or error detected.
  - **4. Neutral / Idle**: Indigo Blue (`#6366f1`), standby mode.
- **GPU-Accelerated Pulse Ring Animation**: Uses an expanding aura ring (`.status-pulse-ring`) animated via GPU-friendly `transform: scale(2.5)` and `opacity` (`@keyframes pulse-glow-ring`) that stays positioned behind the solid status dot.
- **Pure CSS State Filter Engine**: Radio inputs (`<input type="radio" name="badge-filter">`) allow users to filter All Badges, Online Only, Warning Only, or Critical Only.
- **100% Accessible**: Built using semantic `role="status"`, `aria-label`, and screen reader status live announcements (`<output id="status-live-announcer" aria-live="polite">`). Keyboard navigation supported (`Tab`, Arrow Keys, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Grid layout scales fluidly down to mobile viewports (320px–1440px+) without horizontal overflow.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div
  class="status-badge badge-online"
  role="status"
  aria-label="Status: Operational System Live"
>
  <span class="status-dot-wrapper">
    <span class="status-pulse-ring" aria-hidden="true"></span>
    <span class="status-dot-core" aria-hidden="true"></span>
  </span>
  <span class="status-badge-text">SYSTEM LIVE</span>
  <span class="status-meta-tag">99.99%</span>
</div>
```

### Customization Variables

```css
:root {
  --badge-bg: #f8fafc;
  --color-online: #10b981;
  --color-warning: #f59e0b;
  --color-critical: #ef4444;
  --color-idle: #6366f1;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/69102-pulsing-glow-status-badge/demo.html) directly in any modern web browser to interact with the pulsing glow status badge component offline.
