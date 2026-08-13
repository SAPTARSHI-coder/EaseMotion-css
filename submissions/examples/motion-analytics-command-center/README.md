# Motion Analytics Command Center

### 1. What does this do?
This is a professional frontend animation analytics and optimization dashboard designed for EaseMotion CSS. It helps developers monitor animation rendering performance, inspect category usage breakdowns, map animation heatmaps, log realtime interaction events, compare hardware-accelerated layouts (V1: 60 FPS) against laggy layout-thrashing animations (V2: 15 FPS), and export compiled performance markdown reports.

### 2. How is it used?
Open `demo.html` directly in any modern web browser to access the dashboard:
- **Usage Statistics**: Inspect the graphic column charts representing animation categories (Entrance, Loop, Hover, Utility) active in your system.
- **Split-Screen Sandbox**: Select an animation preset and click "Trigger Previews" to visually test the difference between V1 (Optimized GPU paths) and V2 (Laggy layout properties simulating stutters).
- **Interactive Heatmap**: Click the mockup tiles on the layout grid to inspect active focus highlights and trigger coordinates.
- **Activity Stream**: Observe the real-time event log update automatically as you select, hover, or click items on the visualizer.
- **Auditor Exporter**: Read the generated markdown audit summary containing rendering tips and click "Copy" to export.

### 3. Why is it useful?
It serves as an educational benchmark tool. Instead of reading theoretical articles about reflow and paint cycles, developers can interactively witness how switching from layout variables (margin/width transitions) to composite variables (transforms/opacity) eliminates stutters. It dogfoods EaseMotion CSS custom properties.
