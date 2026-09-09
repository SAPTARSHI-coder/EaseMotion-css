# ECG Monitor

### What does this do?

It shows a heart monitor with a glowing green ECG trace scrolling across a gridded screen, a BPM readout, an oxygen value, and a heart icon that beats. The classic PQRST heartbeat waveform repeats and slides continuously. Under reduced motion the trace and heart hold still.

### How is it used?

```html
<div class="ecg-screen">
  <svg class="ecg-trace" viewBox="0 0 300 80" preserveAspectRatio="none">
    <polyline points="0,40 56,52 62,12 68,54 74,40 ..." />
  </svg>
</div>
```

The screen uses layered `repeating-linear-gradient` for the grid. The waveform is one SVG `polyline` tiled several beats wide, sliding left by one beat with `ecg-scroll` so it loops seamlessly, and a glow gives the trace its phosphor look.

### Why is it useful?

Health apps, dashboards, and status screens use a heartbeat trace. This builds a scrolling ECG monitor with pure CSS and an SVG polyline, no images or script, with a reduced motion fallback.
