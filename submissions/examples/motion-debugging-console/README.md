# Motion Debugging Console

A professional developer-console-style dashboard for inspecting animation states, listening to transition and animation events in real-time, tracking execution timelines, inspecting keyframes, and flagging layout-thrashing style changes within the EaseMotion CSS ecosystem.

## 📝 GSSoC 2026 Submission Questionnaire

### 1. What does this do?
This is a professional telemetry console designed for developers to debug UI animations in real-time. Features include:
- **Interactive Node Selection**: Inspect and profile active animations on different test elements (e.g. Card, badge tag, CTA button).
- **DOM Event Logger Terminal**: Intercepts native browser `transitionstart` and `transitionend` events and logs them in a scrollable console feed with millisecond-precision timestamps.
- **Visual Playback Scrubber**: Manual timeline range slider (0% to 100%) to scrub coordinates and inspect intermediate rendering values.
- **Transition Timeline Inspector**: Displays active phase transitions (Delaying, Animating, Completed) and timeline bars showing delays vs durations.
- **Layout Reflow Warnings**: Scans element properties and prints warnings if layout-thrashing attributes (margin, top/left, dimensions) are animated instead of composited variables (transforms/opacity).
- **CSS Code Optimizer**: Recommends optimized composites timing snippets.

### 2. How is it used?
1. Open [demo.html](demo.html) directly in a web browser.
2. Select one of the three test elements in the preview container to inspect it.
3. Click **"Play Animation"** or drag the **Scrubber range input** to manually inspect positions.
4. Review native events logged automatically in the event terminal.
5. Copy the generated CSS timings recommendations.

### 3. Why is it useful?
Animation events and layout reflow janks can be difficult to track and inspect in browsers. This tool acts as an active inspector that captures native callbacks and warns if animations use layout-bound styles, making it easy for UI engineers to audit transition pipelines and keep animations performant.

---

## 🛠️ Tech Stack & Implementation Details
- **HTML5 & CSS3**: Custom grid layout, glassmorphic card containers, and terminal style colors.
- **Native DOM Event Tracking**: Listeners hooked directly to test elements for transition/animation events.
- **Style Recalculation Checkers**: Scans configuration variables to estimate performance scores and warn on layout janks.
- **Accessibility**: Full compatibility checks with `prefers-reduced-motion`.
