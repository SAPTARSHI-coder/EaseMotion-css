# Stratospheric Solar Drone Weather Observatory &mdash; Phase #1031

Closes #28579 &mdash; A fully isolated, 60fps HTML/CSS UI design showcase
for a solar-electric stratospheric drone weather observatory, built with
EaseMotion CSS classes and zero external JavaScript dependencies.

## Live Preview Guide

Open `demo.html` directly in any modern browser &mdash; no build step,
no server required. Scroll through all sections to see entrance
animations trigger via IntersectionObserver.

## Component Breakdown

| Component | Description |
|-----------|--------------|
| Hero | Animated starfield, drifting clouds, floating drone rig with pulsing solar array and signal ping |
| Wind Tunnel Strip | Decorative scrolling wind lines between hero and telemetry |
| Live Telemetry | 4 stat cards (solar output, altitude, battery, wind speed) with animated progress bars |
| Sensor Data Stream | Auto-scrolling log panel simulating real-time telemetry feed |
| Fleet Grid | 6 drone unit cards with Active/Charging status badges |
| Ascent Timeline | 5-step vertical timeline from ground launch to stratospheric cruise |
| Data Access CTA | Email capture form for API key requests |
| Footer | Navigation links and copyright |

## EaseMotion Classes Used

| Class | Where |
|-------|-------|
| ease-fade-in | Hero tag, buttons |
| ease-slide-up | Hero headline |
| ease-zoom-in | Drone rig entrance |
| ease-on-scroll | All below-fold sections |
| ease-delay-1 to 6 | Staggered grid/timeline entrances |
| ease-hover-lift | Telemetry cards |
| ease-hover-scale | CTA buttons, nav button |
| ease-hover-glow | Fleet cards |

## 60fps Performance Notes

All decorative animations (drone float, rotor spin, solar pulse, star
twinkle, signal ping, cloud drift, data stream scroll, wind lines) use
**only `transform` and `opacity`** &mdash; properties the browser compositor
can animate on the GPU without triggering layout or paint, keeping the
page smooth at 60fps even with many simultaneous animations.

## Files
- demo.html &mdash; self-contained showcase, no build step, zero JS dependencies (only inline vanilla JS for starfield generation and scroll-trigger)
- style.css &mdash; EaseMotion utilities + all showcase styles and keyframes
- README.md &mdash; this file

## Features
- Procedurally generated starfield (60 stars) via inline JS
- Procedurally generated solar panel grid (18 cells) via inline JS
- Auto-scrolling sensor data log with seamless loop
- Fully responsive (mobile/tablet/desktop)
- prefers-reduced-motion respected &mdash; all decorative animations disabled