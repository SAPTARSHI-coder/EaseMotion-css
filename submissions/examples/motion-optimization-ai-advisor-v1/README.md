# Motion Optimization AI Advisor

A professional frontend engineering intelligence dashboard that simulates AI-assisted diagnostics for transition and animation configurations, evaluates layout reflow warnings vs GPU composite performance, audits vestibular discomfort parameters, visualizes rendering heatmaps, and exports production-ready CSS variables setups.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?
This tool is a motion quality evaluator designed to help developers inspect, profile, and optimize transitions in real-time:
- **AI Motion Quality Analyzer**: Generates real-time scores (0-100%) for Performance, Accessibility, and Code Efficiency based on animation parameters.
- **Rendering Bottleneck Detector**: Scans chosen CSS attributes and lists reflow warnings if layout-triggering properties (e.g. `margin`, `top`, `left`, `width`, `height`) are animated instead of hardware-accelerated transforms and opacity.
- **Accessibility Risk Advisor**: Audits loop states and translation velocities to warn about vestibular triggers and photosensitive flashing hazards.
- **Animation Quality Heatmap**: Overlays a visual thermal paint layer (Green = GPU Composited Layer, Red = CPU Reflow Layer) on the preview component.
- **Production CSS Pipeline Generator**: Compiles optimized, media-query-aware CSS variables stylesheets with prefers-reduced-motion fallbacks that developers can copy and use immediately.

### 2. How is it used?
1. Open [demo.html](demo.html) directly in a web browser.
2. Choose a transition target property (e.g. **Translate X (GPU)** or **Margin Left (CPU)**).
3. Adjust duration, travel offsets, loops, and easings in the configuration panel.
4. Review the real-time diagnostic warnings and indicator dials in the advisor panel.
5. Click **"Toggle Quality Heatmap"** to inspect visual paint loads overlaying the preview card.
6. Click **"Copy Optimized CSS"** to copy the generated responsive stylesheets to the clipboard.

### 3. Why is it useful?
Writing smooth 60FPS animations requires deep knowledge of browser rendering pipelines (Layout ➔ Paint ➔ Composite). Animating layout properties causes expensive reflow cascades that drop frames and waste power on mobile devices. Furthermore, excessive velocities and loop structures can cause vestibular discomfort. This advisor consolidates browser diagnostics into a single dashboard, helping developers identify layout bottlenecks immediately, visualizes paint costs via thermal heatmaps, and guarantees access-safe production code blocks.

---

## 🛠️ Tech Stack & Implementation Details
- **HTML5 & Vanilla CSS3**: Custom grid layout, glassmorphic card containers, and dynamic thermal overlay grids.
- **Heuristic Diagnostic Engine**: Math rules that scan configurations, calculate telemetry values, and flag optimization opportunities.
- **Modern Code Exporter**: Real-time CSS compiler formatting variables and media-query structures.
- **Accessibility**: Emulates full OS level media-query integrations for `prefers-reduced-motion`.
