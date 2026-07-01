# Autonomous Deep‑Sea Exploration Intelligence Command — Phase #1003

A 60fps UI showcase for a deep‑sea exploration command center, built with EaseMotion CSS principles and zero external dependencies.

## 🌊 Overview

This dashboard simulates real‑time control of autonomous submersibles with:
- **Sonar visualisation** – expanding rings, sweep arm, and contact blips.
- **Live telemetry gauges** – Depth, Temperature, Pressure, Oxygen – with scroll‑triggered counters.
- **Mission status cards** – active missions with progress bars and status badges.
- **Exploration logs** – real‑time event feed with severity levels.
- **Interactive controls** – Deploy ROV and Activate Sonar buttons with feedback.

## 🎨 Design Highlights

- **Dark oceanic theme** with cyan and blue accents.
- **Smooth 60fps animations** – all keyframes use `transform`, `opacity`, and `filter` (GPU‑composited).
- **Responsive** – adapts to mobile and tablet.
- **EaseMotion‑inspired utilities** – `.fade-in`, `.slide-up`, `.pulse`, `.glow`.

## 📁 Component Breakdown

| Component | Description |
|-----------|-------------|
| **Navigation** | Sticky bar with live indicator and section links. |
| **Hero** | Tagline, CTA buttons, dynamic depth/temp/pressure stats, and sonar visual. |
| **Telemetry** | Four gauges with animated fill bars and scroll‑triggered number counters. |
| **Missions** | Three mission cards with progress bars and status badges (Active/Paused). |
| **Logs** | Feed of exploration events with timestamps and severity levels. |

## ⚡ Performance

- 60fps guaranteed – only compositor‑only properties animated.
- Intersection Observer for lazy loading counters.
- Minimal JS (~40 lines) – no libraries.

## 🚀 How to Preview

Open `demo.html` in any modern browser. No server or build step needed.

## 📄 File Structure

- `demo.html` – complete single‑page UI.
- `style.css` – all custom styles and keyframes.
- `README.md` – this documentation.

*Part of GSSoC 2026 – a showcase of high‑performance UI design.*
