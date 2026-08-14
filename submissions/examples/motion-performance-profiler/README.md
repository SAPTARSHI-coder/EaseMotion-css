# Motion Performance Profiler

A professional frontend engineering dashboard for analyzing UI animation rendering efficiency, detecting layout thrashing, visualizing real-time FPS stability, simulating GPU compositing strategies, and optimizing motion systems for production-grade web applications within the EaseMotion CSS ecosystem.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?
This is a rendering performance analysis dashboard that stress-tests and audits animation rendering in the browser. Features include:
- **Realtime FPS Timeline Chart**: Plots frame intervals, dropped frames (latency spikes), and frame rate stability dynamically.
- **Layout Reflow & Thrashing Detector**: Flags layout-intensive animations (manipulating top/left/margins) and contrasts them against composited layer animations (transforms/opacity).
- **GPU Compositing Layer Emulator**: Visualizes promoted compositing layers by drawing 3D outlines on active elements, simulating Chrome DevTools layer indicators.
- **Thermal Paint Heatmap**: Renders heat gradients reflecting paint frequency and layout load across components.
- **VRAM Telemetry Simulator**: Estimates GPU texture buffer requirements based on particle count and size.
- **Optimization Exporter HUD**: Generates performant GPU-accelerated CSS layers and transition rules.

### 2. How is it used?
1. Open [demo.html](demo.html) directly in any web browser.
2. Choose between **GPU-Composited Transforms** and **CPU Layout Reflows (Top/Left)**.
3. Adjust the stress test slider to spawn between 1 and 200 animated nodes.
4. Toggle "Show Composited Borders" and "Show Paint Heatmap" to overlay debugging borders and paint heat maps.
5. Inspect the live FPS graph and VRAM charts, then copy the optimized CSS recommendations.

### 3. Why is it useful?
Animators frequently trigger performance bottlenecks (jank) by animating CSS layout properties like `top`, `left`, `margin`, and `width` which force the browser to recalculate styles and rebuild layouts on every frame. This profiler educates UI engineers on rendering pipelines, demonstrating visually how CPU reflows cause massive FPS drops compared to GPU compositing, and exports copyable EaseMotion-compatible optimized styles.

---

## 🛠️ Tech Stack & Implementation Details
- **HTML5 & CSS3**: Custom grid layout, glassmorphic card containers, and layer highlights.
- **HTML5 Canvas**: Plots real-time frame telemetry and VRAM charts.
- **Dynamic Render Simulator**: Spawns and animates elements inside an emulated frame.
- **Performance**: High-efficiency animation profiling using requestAnimationFrame.
- **Accessibility**: Full compatibility checks with `prefers-reduced-motion`.
