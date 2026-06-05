# Scroll-Driven Animation Lab

A premium frontend experimentation lab for showcasing modern scroll-driven animations, parallax systems, timeline-linked transitions, reveal effects, and cinematic viewport-based motion interactions within the EaseMotion CSS ecosystem.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?

This is a comprehensive scroll animation laboratory demonstrating:

- **Parallax Motion Playground**: Three distinct visual depth layers moving at differential scroll speeds (0.2x, 0.5x, 0.8x).
- **Viewport Reveal Engine**: Interactive cards rotating, scaling, and fading into view automatically when they enter the viewport.
- **Sticky Orchestrated Panels**: Pinned page panels chaining text and icon reveals sequentially.
- **Scroll Timeline Visualizer HUD**: A floating diagnostic inspector panel tracking real-time scroll Y position (px) and percentage (0% to 100%).
- **Code Generator HUD**: Auto-compiles transition values or keyframes arrays for `animation-timeline`.

### 2. How is it used?

1. Open [demo.html](demo.html) directly in any modern web browser.
2. Scroll down the page to trigger all scroll-driven animation states.
3. Observe how the floating **Scroll Timeline Visualizer** tracks coordinates and phases.
4. Copy the generated CSS tokens or scroll-timeline animation structures.

### 3. Why is it useful?

Native CSS scroll-timeline behaviors are extremely powerful but difficult to debug and test. This tool provides an interactive visual dashboard showing exactly how scroll coordinates map to animation percentages. It also provides a robust cross-browser JavaScript listener fallback, ensuring animations render smoothly in all browsers while showing developers how to implement them.

---

## 🛠️ Tech Stack & Implementation Details

- **HTML5 & CSS3**: Semantic page structures, custom grid layouts, glassmorphic UI elements, and sticky positioning.
- **Floating Inspector HUD**: Realtime telemetry displaying Scroll Y coordinates, viewport size, and scroll percentage.
- **Scroll Polyfill Fallback**: Smooth JS scroll tracking mapped to custom properties for Firefox/Safari support.
- **Accessibility**: Support for `prefers-reduced-motion` safety configurations.
