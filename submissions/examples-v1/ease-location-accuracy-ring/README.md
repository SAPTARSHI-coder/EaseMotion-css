# "My Location" Pulse Ring

A translucent ring that continuously pulses (scale + opacity) around a map location pin — the familiar "my location" indicator found in Google Maps, Apple Maps, and similar apps. Built on the classic `ease-ping` pattern.

## 🎥 Preview

Open `demo.html` in a browser to see four marker variants (default, fast, wide pulse, alt color) over a simple grid "map" background.

## ✨ How It Works

The marker is two stacked elements inside a single `.location-marker` container:

1. **A static dot** (`.location-marker__dot`) — always fully visible, marks the exact location.
2. **A translucent pulse ring** (`.location-marker__pulse`) — an identical circle, positioned directly behind/under the dot, that continuously scales up while fading out, then resets and repeats.

```html
<div class="location-marker">
  <span class="location-marker__pulse"></span>
  <span class="location-marker__dot"></span>
</div>
```

The pulse animation itself is the standard `ease-ping` keyframe pattern:

```css
@keyframes ease-ping {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  75%,
  100% {
    transform: scale(var(--ease-ping-scale));
    opacity: 0;
  }
}

.location-marker__pulse {
  animation: ease-ping var(--ease-ping-speed) cubic-bezier(0, 0, 0.2, 1)
    infinite;
}
```

Holding at `opacity: 0` for the last 25% of the animation (via the `75%, 100%` keyframe) creates a brief pause before the next pulse starts, instead of the ring resetting and re-expanding instantly — this is what gives the effect its natural "ping" rhythm rather than a continuous loop.

## ✅ Acceptance Criteria

- [x] Continuous scale + opacity pulse
- [x] Built on the `ease-ping` pattern (`scale(1)` → `scale(var(--ease-ping-scale))`, `opacity` fading to `0`)
- [x] Reproduces the common "my location" map marker pattern

## 🎛️ Customizable Variables

| Variable               | Description                                | Default   |
| ---------------------- | ------------------------------------------ | --------- |
| `--ease-ping-color`    | Color of the dot and pulse ring            | `#3b82f6` |
| `--ease-ping-speed`    | Duration of one pulse cycle                | `2s`      |
| `--ease-ping-scale`    | How large the ring grows before fading out | `2.5`     |
| `--ease-ping-dot-size` | Diameter of the static center dot          | `14px`    |

## 📂 Files

- `demo.html` — Markup with four example markers (default, fast, wide, alt color) on a mock map tile
- `style.css` — All styling, including the `ease-ping` keyframes and marker structure

## ♿ Accessibility

When `prefers-reduced-motion: reduce` is set, the animation is disabled and replaced with a static, slightly-enlarged, low-opacity ring so the location indicator is still visually distinguishable without motion.

## 🌐 Browser Support

Uses only standard CSS transforms, opacity, and keyframe animations — works in all modern browsers with no fallback needed.
