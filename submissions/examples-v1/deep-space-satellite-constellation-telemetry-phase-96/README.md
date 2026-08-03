# Deep-Space Satellite Constellation Telemetry — Phase #967

A complete 60fps interactive telemetry dashboard UI for a 7-satellite
deep-space constellation, built with EaseMotion CSS and vanilla HTML/CSS.

## Structure
deep-space-satellite-constellation-telemetry-phase-967/
├── demo.html    — full interactive dashboard
├── style.css    — all styles and animations
└── README.md

## Sections

| Panel | Description |
|---|---|
| Top Bar | Mission clock, status pill, ground station ID |
| Satellite List | 7 nodes with live status dots and signal strength |
| Alert Log | 4 system alerts with severity color coding |
| Orbital Map | Animated LEO/MEO/GEO orbit rings with satellite markers |
| Metrics Row | Downlink rate, latency, packet loss, uptime |
| Telemetry Stream | Live data feed for selected satellite |
| Power Subsystem | 3 SVG ring gauges (solar, battery, load) |
| Attitude Control | Roll/pitch/yaw bars |
| Contact Windows | Next DSN pass schedule |

## EaseMotion CSS Classes Used

| Class | Usage |
|---|---|
| `ease-fade-in` | Topbar, alerts, telemetry items, contact windows |
| `ease-slide-up` | Sidebar, metrics cards, right column |
| `ease-zoom-in` | Orbital map panel |
| `ease-delay-100` to `ease-delay-400` | Staggered entrance timing |

## Features
- Live mission elapsed time counter (JS clock)
- Animated orbital rings (CSS keyframes)
- Pulsing LIVE status badge
- Critical satellite alert pulse animation
- SVG ring gauges with CSS stroke-dashoffset
- Satellite selector with active highlight
- Scrollable telemetry data stream
- Ground station beam pulse animation
- Fully responsive (3-col → 2-col → 1-col)
- Respects `prefers-reduced-motion`