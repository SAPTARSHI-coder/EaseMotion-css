# Motion Easing & Spring Physics Visualizer

A premium frontend timing visualization dashboard for comparing cubic-bezier curves, linear timing functions, and spring-based motion physics. This tool helps developers analyze animation physics (displacement, velocity, acceleration), compare timings side-by-side, and generate production-ready CSS code.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?
This is an interactive dashboard that allows developers to design and compare cubic-bezier curves and spring physics simulations. It features:
- **Interactive Cubic-Bezier Editor**: Drag control handles on an HTML5 Canvas to customize cubic-bezier values.
- **Spring Physics Solver**: Simulate damped harmonic oscillations (mass, stiffness, damping, initial velocity).
- **Realtime Plotter**: Plot Displacement, Velocity, and Acceleration curves on a canvas chart.
- **Side-by-Side Canvas Previews**: Watch animated elements move in sync to see how bezier timing differs from physics-based spring models.
- **Code Generator HUD**: Auto-compiles transition variables or spring-approximated CSS keyframes.

### 2. How is it used?
1. Open [demo.html](demo.html) directly in any modern web browser.
2. Drag the handles on the cubic-bezier graph or adjust the spring parameter sliders.
3. Click **"Trigger Simulation"** to watch the preview blocks animate side-by-side.
4. Copy the generated CSS timing tokens or keyframe arrays.

### 3. Why is it useful?
Spring animations offer a higher level of organic responsiveness and realism compared to simple cubic-beziers. However, raw CSS cannot natively solve spring equations. This tool solves the equations in JavaScript and converts the displacement curves into optimized CSS keyframe animations, giving developers physics-based animations in pure CSS.

---

## 🛠️ Tech Stack & Implementation Details
- **HTML5 & CSS3**: Semantic elements, custom grid layout, glassmorphic layout, and theme toggles.
- **HTML5 Canvas**: Draggable bezier handles and multi-line chart plotter (Displacement, Velocity, Acceleration).
- **Spring Physics Solver**: Solves damped harmonic equations under three states: Underdamped, Critically Damped, and Overdamped.
- **Theme Variables**: Full Dark and Light mode support.
- **Accessibility**: Support for `prefers-reduced-motion` safety configurations.
