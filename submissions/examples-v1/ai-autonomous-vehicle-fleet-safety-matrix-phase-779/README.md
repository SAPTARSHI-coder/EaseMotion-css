# AI Autonomous Vehicle Fleet Safety Matrix &mdash; Phase #779

Closes #28327 &mdash; A complete, isolated 60fps HTML/CSS UI showcase for
an AI-driven autonomous vehicle fleet safety monitoring system, built
with EaseMotion CSS classes and zero external JS dependencies.

## Live Preview

Open `demo.html` directly in any modern browser.
No server or build step required. Scroll to trigger entrance animations.

## Component Breakdown

| Component | Description |
|-----------|-------------|
| Hero | Animated road with moving vehicles, live Safety Matrix visualizer with radar sweep |
| Safety Grid | 25-cell colour-coded matrix (SAFE/CAUTION/CRITICAL) generated via JS |
| Radar Mini | Rotating sweep arm with detected vehicle dots |
| Fleet Status Table | Per-vehicle safety scores with animated fill bars and status pills |
| Sensor Grid | 6 sensor cards (LiDAR, Camera, RADAR, Ultrasonic, GPS, V2X) with live pings |
| LiDAR Perception Map | Overhead map with radar sweep, vehicle dots, and colour legend |
| Incident Log | 5 AI-classified safety events with severity badges |
| CTA | Operator access request form |

## EaseMotion Classes Used

| Class | Where |
|-------|-------|
| ease-fade-in | Hero tag |
| ease-slide-up | Hero headline |
| ease-zoom-in | Safety matrix and LiDAR map |
| ease-on-scroll | All below-fold sections |
| ease-delay-1 to 6 | Staggered table rows, sensor cards, log items |
| ease-hover-lift | Sensor cards, fleet table rows |
| ease-hover-scale | CTA button, nav primary button |
| ease-hover-glow | Incident log items |

## 60fps Performance

All animations use only `transform` and `opacity`:
- Vehicle move: translateX
- Radar sweep: rotate
- LiDAR ping: scale + opacity
- Status blink: opacity
- Safety bar fill: scaleX
- Alert pulse: scale + opacity
- Grid scan: translateY

No layout or paint properties animated &mdash; GPU composited at 60fps.

## Files
- demo.html &mdash; self-contained showcase
- style.css  &mdash; EaseMotion utilities + all styles and keyframes
- README.md  &mdash; this file