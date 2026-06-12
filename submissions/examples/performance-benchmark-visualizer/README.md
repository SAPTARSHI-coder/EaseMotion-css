# Performance Benchmark Visualizer

### 1. What does this do?

This client-side rendering audit dashboard stress-tests CSS animation layers by dynamically spawning animated DOM nodes, tracking real-time FPS rates, measuring frame drops (>16.67ms frame time budgets), and demonstrating the performance differences between CPU layout reflows and GPU-accelerated compositing.

### 2. How is it used?

Open `demo.html` directly in any web browser to access the benchmarking panel:

- **Set Node Count**: Adjust the stress slider to configure particle count (from 10 up to 400 concurrent rendering elements).
- **Configure Profiler**: Choose between GPU-friendly transforms (translate, scale, rotate) and CPU-bound reflow triggers (manipulating margin, padding, width, height layout offsets).
- **Run Audit**: Click "Run Stress Test" to begin a 5/10/30-second rendering sequence.
- **Inspect Graph**: Review the plotted real-time FPS chart timeline and micro-stutter (Stdev) indicators.
- **Get Recommendations**: View and copy optimized CSS layer-promotion (`will-change: transform;`) rules generated dynamically based on performance limits.

### 3. Why is it useful?

It fits EaseMotion CSS's philosophy by educating developers on browser rendering performance best practices. Under stress conditions, developers can visually witness how animations using simple layout changes (e.g. padding, margin offsets) severely stall the main browser thread compared to GPU-composited layers (transforms/opacity), providing a visual verification tool that helps developers keep their EaseMotion projects lag-free and running at 60 FPS.
