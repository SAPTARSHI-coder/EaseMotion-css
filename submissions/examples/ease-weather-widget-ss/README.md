# Weather Widget Component (`ease-weather-widget-ss`)

## Abstract

The **Ease Weather Widget Component** is a lightweight, accessible, and responsive weather widget UI module designed for modern dashboards and web applications. Built with pure HTML5 and CSS3 custom properties, it delivers smooth continuous micro-animations (a rotating sun vector and floating cloud effect) alongside key meteorological metrics and a multi-day forecast grid without requiring external icon libraries or JavaScript animation dependencies.

---

## CONTRIBUTING.md Compliance

### 1. What does this do?
Implements a compact, data-driven Weather Widget component (`.ease-weather-card`) featuring a continuous rotating sun animation, floating cloud motion, atmospheric metrics, and a 3-day forecast card row.

### 2. How is it used?
Embed the `.ease-weather-card` structure into weather dashboards, travel portals, or mobile widget galleries. Simply link `style.css` into your HTML document and include the `.ease-weather-card` structure or integrate the CSS custom properties into your site design system.

### 3. Why is it useful?
Provides rich meteorological visualization with pure CSS vector graphics and animations without requiring heavy icon font libraries or JavaScript rendering loops. It includes full keyboard accessibility support, zero-dependency responsive design, and High-Contrast mode (`forced-colors`) compatibility.

---

## Visual & Animation Architecture

- **Rotating Sun Animation (`easeSpin`)**: A continuous 360-degree rotation running on a 15-second linear loop with a warm glow filter effect (`drop-shadow`).
- **Floating Cloud Animation (`easeFloat`)**: A subtle 4-second ease-in-out vertical translation (`translateY(-6px)`) creating natural atmospheric depth.
- **Card Backdrop & Depth**: Leverages a dual linear gradient container paired with subtle inset border highlights (`inset 0 1px 1px rgba(255,255,255,0.2)`) and multi-stage elevation shadows.
- **Accessibility & Contrast**: Built with explicit ARIA labels (`aria-hidden="true"` on non-semantic icons, accessible hidden heading hierarchy) and native `forced-colors: active` media queries for high contrast system settings.

---

## Custom CSS Properties

| Token | Default Value | Description |
| :--- | :--- | :--- |
| `--wx-bg` | `#030712` | Main page background color |
| `--wx-surface` | `#0f172a` | Container surface tone |
| `--wx-card-bg` | `linear-gradient(...)` | Primary weather card gradient background |
| `--wx-border` | `rgba(255, 255, 255, 0.15)` | Card border highlight |
| `--wx-text` | `#f8fafc` | Primary text content color |
| `--wx-muted` | `#94a3b8` | Subtitle and detail label color |
| `--wx-sun` | `#fbbf24` | Sun element fill color |
| `--wx-cloud` | `#e2e8f0` | Cloud element fill color |
| `--wx-accent` | `#38bdf8` | Highlight accent color |
