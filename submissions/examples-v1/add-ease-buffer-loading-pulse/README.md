# Media Buffering Indicator Pulse — EaseMotion CSS

A premium, high-performance CSS loading animation package designed to display buffering delays in video, audio, or game stream players.

## What does this do?

This demo highlights three visual buffering indicators for media streaming:

- **Concentric Rings**: Rings that scale outward and fade sequentially to indicate active resource loading.
- **Sequential Waveform**: A set of vertical bars that oscillate sequentially (useful for live audio streams).
- **Dot Stack**: Horizontal dot indicators pulsing sequentially.

A customization playground is included to demonstrate adjustable animation speed loops (`--speed-pulse`) and modular container styling.

## How is it used?

Apply the helper classes and container structures inside video player mockups or track bars:

```html
<!-- Concentric Rings Indicator -->
<div class="ease-buffer-ring-container">
  <span class="ease-buffer-ring" style="--i: 1"></span>
  <span class="ease-buffer-ring" style="--i: 2"></span>
  <span class="ease-buffer-ring" style="--i: 3"></span>
</div>
```

```css
/* Core CSS styles */
.ease-buffer-ring-container {
  position: relative;
  width: 80px;
  height: 80px;
}

.ease-buffer-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid var(--color-primary);
  border-radius: 50%;
  opacity: 0;
  animation: ease-kf-ring-pulse var(--speed-pulse) infinite
    cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-delay: calc(var(--i) * -0.4s);
}

@keyframes ease-kf-ring-pulse {
  0% {
    transform: scale(0.3);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}
```

## Why is it useful?

- **User Retention**: Elegant, modern loaders reassure users that media is loading rather than broken, reducing stream bounce rates.
- **Dynamic Speed Handling**: Uses a single CSS custom property `--speed-pulse` to control animation loops fluidly (allowing players to automatically speed up the pulse if network throughput is low/critical).
- **High Paint Performance**: Relies entirely on `transform` and `opacity` keyframes to avoid layout recalculation thrashing on low-end devices.

## Tech Stack

- HTML5 (semantic structures)
- CSS3 (transitions, keyframe loops, grid layouts, custom properties)
- JavaScript (interactive state simulations & customizer config triggers)

## Preview

Open `demo.html` in your web browser to test the streaming simulators and toggle preset speeds.
