# Cyber Security Command Center Dashboard

A premium, interactive Security Operations Center (SOC) dashboard showcase built using **EaseMotion CSS** layout utilities, cards, buttons, and animations.

## What is this Showcase?

This project demonstrates how EaseMotion CSS can be utilized to build complex, responsive data-driven dashboards with animations, glassmorphism card templates, custom color branding, and rich hover behaviors.

It is structured as a self-contained submission showing a live operations interface that includes:

- **Hero Header**: Live monitoring status heartbeat, command action controls, and scrolling marquee alert threat banners.
- **Security Metrics**: Dynamic stats cards measuring Active Threats, Critical Incidents, and a custom circular risk index gauge.
- **Threat Monitoring Grid**: A terminal operations feed simulating real-time firewall logs, combined with network activity streams.
- **Incident Response Dispatcher**: Clean data tables tracking active incident priorities, target servers, MTTR metrics, and status badges.
- **Analyst Workspace**: Case selector, local storage-persisted analyst notes, and a simulated full security system quarantine/lockdown mode.

---

## EaseMotion CSS Utilities Used

This showcase demonstrates a comprehensive integration of EaseMotion CSS utilities:

- **Layout Utilities**:
  - `.ease-grid`: Displays panels in standard layouts.
  - `.ease-grid-cols-2`, `.ease-grid-cols-4`: Custom column definitions.
  - `.ease-grid-auto`: Responsive auto-fitting columns that rearrange layouts fluidly across viewport widths.
  - `.ease-gap-6`, `.ease-gap-4`: Consistent spacing grid gaps.
  - `.ease-center`: Centering layouts and action icons.
  - `.ease-flex`, `.ease-justify-between`, `.ease-items-center`: Component layout control.

- **Components**:
  - `.ease-card`: Standard card structure.
  - `.ease-card-glass`: Semi-transparent background with backdrop blur (`backdrop-filter`) for premium glassmorphism.
  - `.ease-card-hover`: Visual micro-interaction raising cards with shadows on cursor focus.
  - `.ease-btn`, `.ease-btn-primary`, `.ease-btn-outline`: Highly readable flat buttons.
  - `.ease-marquee`: CSS-only infinite scrolling banner tickers.

- **Entrance Animations**:
  - `.ease-fade-in`: Animates body opacity on load.
  - `.ease-slide-up`: Entrance effect for headers, cards, and dashboards.
  - `.ease-delay-100`, `.ease-delay-200`, `.ease-delay-300`, `.ease-delay-400`, `.ease-delay-500`, `.ease-delay-600`: Sequential delays creating card stagger entrance flows.

- **Interaction Effects**:
  - `.ease-hover-grow`: Gentle scaling on status badges, quick links, and buttons.
  - `.ease-hover-lift`: Lift effect on header elements.
  - `.ease-hover-glow`: Cyan and red neon glows highlighting active components on cursor hover.

---

## How to Run the Demo

To run this dashboard locally:

1. Ensure you have cloned the repository.
2. Open [demo.html](demo.html) directly in any modern web browser.
   - Alternatively, run a local development server (e.g. `npx live-server` or `npm run dev` in the root folder) to inspect the project.

---

## Responsive Behavior & Layout Design

The dashboard uses a custom mobile-first column-scaling layout designed with CSS Grid and Flexbox:

- **Desktops (> 1024px)**: Dual-pane layout mapping the threat feed (left 2/3) and classification stats (right 1/3) side-by-side.
- **Tablets (768px - 1024px)**: Automatically cascades to a stacked display where grids collapse to single columns to maintain structural proportions.
- **Mobile Devices (< 640px)**: The 4-column metric grid rearranges to a 2-column or 1-column layout depending on screen size. Font scaling and paddings contract to preserve maximum data density.

---

## Animation Showcase & Simulator Logic

1. **Staggered Entry**: On load, elements appear sequentially starting from the status headers down to the analyst workspace.
2. **Realtime Log Feed**: The simulator appends live network threat notifications every 8 seconds with log-entry animations.
3. **Circular Risk Score**: As the simulator appends logs, the circular risk indicator updates its svg dashoffset with a smooth transition.
4. **Lockdown Overlay**: Clicking "System Lockdown" activates a fullscreen warning banner with a countdown and emergency blinkers.

---

## Screenshots

_(Screenshots will be included here upon integration into the main framework documentation)_
