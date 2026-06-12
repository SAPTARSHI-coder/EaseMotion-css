# Animation Regression Detection Lab

A professional frontend quality-engineering dashboard for automatically detecting animation regressions, validating rendering consistency, auditing accessibility preferences comfort guidelines, comparing version baselines, and visualizing motion-system degradations in design system production pipelines.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?

This is an interactive visual testing suite that automatically profiles, scans, and highlights silent degradations or changes in animation setups:

- **Baseline vs Updated Comparator**: A side-by-side split screen workspace that compares V1 Baseline (optimized GPU composite animation) against V2 Updated (unintentionally changed CPU reflow property transition).
- **Regression Severity Analyzer**: Assesses timings, coordinates offsets, and paint workloads to classify regressions into Minor (timing shifts), Moderate (travel drift), or Critical (reflow jank, broken a11y) categories.
- **Accessibility Regression Scanner**: Audits prefers-reduced-motion fallback compatibility. Alerts developers if a user preference query breaks and triggers motion.
- **Visual Regression Heatmap Overlay**: Emulates browser outline layers highlighting compositor layers (Green dashed outline) and layout-thrashing zones (flashing Red outline) live.
- **Realtime Diagnostics Console**: A terminal window emulator streaming Jest/Mocha style unit tests assertion reports and regression summaries.
- **CSS Resolution Exporter**: Compiles production-ready corrected styling blocks to instantly restore optimized variable parameters.

### 2. How is it used?

1. Open [demo.html](demo.html) directly in a web browser.
2. Tweak config variables (Timing drift, Travel drift, or Accessibility support query overrides) to introduce a regression.
3. Click **"Run Regression Scan"** to start the validator suite. Check the delta logs streamed in the emulated CLI terminal.
4. Toggle **"Visual Heatmap Overlay"** and hover over both version frames to inspect rendering boundaries and repaint highlights.
5. Click **"Copy Resolution CSS"** to copy the corrected stylesheet template containing transition transforms and accessibility fallbacks.

### 3. Why is it useful?

In large-scale design systems, developers often modify animation styles or update spacing/margins, which can break transitions silently. For example, replacing a translate animation with an animated margin might look cosmetically similar but introduces rendering jank (layout thrashing) and drops frames on low-end devices. Furthermore, accessibility overrides like `prefers-reduced-motion` can get broken or omitted. This regression lab automates motion testing, visually highlights layout paint zones via heatmaps, and ensures animations stay fast, smooth, and safe across revisions.

---

## 🛠️ Tech Stack & Implementation Details

- **HTML5 & Vanilla CSS3**: Custom grid layout, glassmorphic card containers, and DevTools-style paint highlights.
- **Regression Detection Engine**: Mathematical rules comparing timings, offsets, and styles to compute drift percentages.
- **Modern Code Exporter**: Real-time CSS compiler formatting variables and media-query structures.
- **Accessibility**: Emulates full OS level media-query integrations for `prefers-reduced-motion`.
