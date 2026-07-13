# Showcase: Autonomous Robotic Surgery Guidance Station (Phase #776)

**Category:** Animation — UI Dashboard Showcase  
**Type:** Pure CSS (No JS)  
**Folder:** `submissions/examples/autonomous-robotic-surgery-guidance-station-phase-776/`

---

## What does this do?
Simulates a high-tech medical console layout dashboard for an autonomous robotic surgery guidance station. Driven entirely via CSS transitions and keyframes, it displays vital monitors, target calibration radial selectors, articulating motor bars, and dynamic terminal lines.

---

## How is it used?

The dashboard coordinates mode-selection and override switches using checkbox and radio inputs placed at the top of the body:

```html
<!-- State Input Toggles -->
<input type="radio" name="console-mode" id="mode-manual" class="console-state-trigger" checked>
<input type="radio" name="console-mode" id="mode-assisted" class="console-state-trigger">
<input type="radio" name="console-mode" id="mode-autonomous" class="console-state-trigger">
<input type="checkbox" id="mode-emergency" class="console-state-trigger">

<!-- Dashboard Layout Grid -->
<div class="console-grid">
  <!-- Panels references -->
</div>
```

---

## Why is it useful?

1. **Rich Simulation Mockups:** Demonstrates how detailed dashboards, visual diagnostic panels, and data telemetry displays can be created utilizing pure HTML and CSS.
2. **Dynamic CSS State Machine:** Leverages checked pseudo-classes (`:checked ~`) to transition styling themes globally.
   - Selecting **Autonomous Mode** shifts joint metrics and status icons to a success neon-green theme and renders real-time AI trajectory projections.
   - Toggling **Emergency Override** executes alert keyframes (red border flashes), slides down warning banners, overlays lock screen messages, and disables pointer interactions to lock inputs.
3. **Smooth Keyframe Waveforms:** Includes hardware-accelerated animations like:
   - Drawing a simulated ECG cardiac cycle via SVG `stroke-dashoffset`.
   - Rotating crosshairs and sweeps using `conic-gradient` scans.
   - Oscillating vital signals and heartbeat indicators.
4. **Mobile Adaptability:** Automatically reflows multi-column dashboard areas into clean vertical modules on medium and mobile viewports.
5. **Reduced Motion Compliance:** Features a `@media (prefers-reduced-motion: reduce)` profile to freeze animations and sweeps.

---

## Visual Elements Reference

| Selector / Class | Visual Panel | Anim Behavior |
|---|---|---|
| `.ecg-path` | ECG Vitals Monitor | Vector path drawing ECG spikes across grid lines via keyframe offsets. |
| `.circle-radar--outer` | Calibration Viewport | Counter-rotating circular boundary lines representing target grid edges. |
| `.radar-sweep-scanner` | Calibration Viewport | Conic-gradient scanner sweeping viewport coordinate dots. |
| `.joint-fill` | Robotic Progress | Joint alignment level bars that slide to custom offsets during mode shifts. |
| `.locked-overlay` | Panel Lockouts | Darkened overlay displaying blinking warning signs during emergency locks. |
| `.alert-banner` | Alert Header | Alert banner that slides down from top of screen on lockout trigger. |
