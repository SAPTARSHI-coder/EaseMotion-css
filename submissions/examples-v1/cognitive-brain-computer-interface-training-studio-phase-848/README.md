# Cognitive Brain‑Computer Interface Training Studio — Phase #848

A premium, 60fps UI showcase for a BCI training studio, designed with EaseMotion principles and zero external JS dependencies.

## 🧠 Overview

This page simulates a real‑time cognitive training environment with:
- **Dynamic brainwave visualisation** – pulsing rings, animated neurons, and neural waveforms.
- **Training modules** – Alpha, Beta, Theta, Gamma with progress bars and statuses.
- **Live neural metrics** – Alpha Power, Beta Power, Theta/Alpha Ratio, Gamma Burst – displayed as animated gauges.
- **Studio controls** – sliders for feedback frequency and stimulation intensity.
- **Interactive elements** – Start Session, Calibrate, Reset Defaults – all with vanilla JS feedback.

## 🎨 Design Highlights

- **Dark futuristic theme** with cyan and purple accents.
- **Smooth 60fps animations** – every keyframe uses only `transform`, `opacity`, and `filter` (GPU‑composited).
- **Responsive** – adapts gracefully to tablets and phones.
- **EaseMotion‑inspired utility classes** – `.fade-in`, `.slide-up`, `.pulse`, `.glow` – demonstrate the framework’s philosophy.

## 📁 Component Breakdown

| Component | Description |
|-----------|-------------|
| **Navigation** | Sticky with live indicator and section links. |
| **Hero** | Tagline, call‑to‑action buttons, session stats, and a brain‑wave visual with animated rings and waves. |
| **Modules** | Four training cards with progress bars and status pills. |
| **Metrics** | Four gauges that animate on scroll (Intersection Observer). |
| **Controls** | Range sliders with live value updates and a reset button. |

## ⚡ Performance

- All animations run at 60fps (verified with Chrome DevTools).
- No layout/paint triggers – only compositor‑only properties.
- Minimal JS (∼30 lines) for counters and event handlers – no libraries.

## 🚀 How to Preview

Open `demo.html` directly in any modern browser.  
No server, build step, or internet connection required.

## 📄 File Structure

- `demo.html` – complete single‑page UI.
- `style.css` – all custom styles and keyframes.
- `README.md` – this documentation.

---

*Submitted as part of GSSoC 2026 – a showcase of clean, high‑performance UI design.*
