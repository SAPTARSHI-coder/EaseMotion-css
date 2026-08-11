# Network Status Indicator — Pure CSS

## What does this do?

An interactive network connectivity panel with signal strength bars, connection state switching (Connected/Connecting/Disconnected), and a WiFi network scanner — all driven by radio inputs and the `:has()` CSS selector. Zero JavaScript.

## How is it used?

```html
<link rel="stylesheet" href="style.css">

<div class="ns-container">
  <!-- Connection state tabs -->
  <input type="radio" name="conn-state" id="state-connected" checked>
  <input type="radio" name="conn-state" id="state-disconnected">
  <div class="ns-state-tabs" role="tablist">
    <label for="state-connected" class="ns-state-tab" role="tab">Connected</label>
    <label for="state-disconnected" class="ns-state-tab" role="tab">Disconnected</label>
  </div>

  <!-- Signal bars -->
  <div class="ns-signal-bars">
    <span class="ns-bar ns-bar-1"></span>
    <span class="ns-bar ns-bar-2"></span>
    <span class="ns-bar ns-bar-3"></span>
    <span class="ns-bar ns-bar-4"></span>
    <span class="ns-bar ns-bar-5"></span>
  </div>

  <!-- Signal level switcher -->
  <input type="radio" name="signal-level" id="sig-excellent" class="ns-sig-input" checked>
  <label for="sig-excellent" class="ns-sig-label">Excellent</label>

  <!-- Network list -->
  <ul class="ns-network-list">
    <li>
      <input type="radio" name="selected-network" id="net-home">
      <label for="net-home">Home-WiFi-5G</label>
    </li>
  </ul>
</div>
```

All state transitions are CSS-only:
- Signal level → `:has(#sig-{level}:checked)` colors the bars
- Connection state → `:has(#state-{name}:checked)` toggles overlays
- Network selection → `input:checked + label` highlights the active network

## Why is it useful?

A network/connectivity panel is a common UI pattern in dashboards, mobile apps, and system settings that usually requires JavaScript. This submission proves that radio-driven state management with `:has()` can handle multi-state interactions declaratively, reducing dependency on imperative code.

**Features:**
- **Zero JavaScript** — Signal bars, connection states, and network selection are CSS-driven
- **3 connection states** — Connected, Connecting (with spinner), Disconnected (with overlay)
- **5 signal levels** — None, Weak, Fair, Good, Excellent with animated bar transitions
- **WiFi network picker** — Radio-based network list with select highlight
- **Dark mode** — Automatic via `prefers-color-scheme` with manual toggle
- **`prefers-reduced-motion`** — Disables all animations and spinner
- **`prefers-contrast`** — Enhanced borders for visibility
- **`forced-colors: active`** — Full Windows High Contrast Mode support
- **Keyboard accessible** — Tab through state tabs, signal levels, and network list
- **`aria-label`** on signal bars and secured/open indicators
- **`role="tablist"` / `role="tab"`** on connection state selector
- **Responsive** — adapts from 320px mobile to wide screens
- **Print-friendly** — Strips interactive chrome
