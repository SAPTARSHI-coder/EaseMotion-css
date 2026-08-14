# Washing Machine Cycle UI Component (`ease-washing-machine-cycle`)

A pure HTML + Vanilla CSS realistic washing machine appliance UI component featuring a detailed control panel, digital stage timer display, circular glass door drum window, water level fills, tumbling clothes (`@keyframes wash-tumble`), suds bubbles (`@keyframes bubble-rise`), pure CSS radio stage controls (Soak, Wash, Rinse, Spin), and full accessibility.

## Features

- **Pure HTML + CSS**: 100% interactive without JavaScript, external fonts, external image assets, or build scripts. Works offline.
- **Realistic Washing Machine Appliance**: Detailed chassis body with detergent drawer, program dial pointer, digital cycle time display, status LEDs, and circular glass door drum window.
- **Distinct Cycle Stage Animations**:
  - **Soak (15 min)**: Gentle slow rock (`@keyframes soak-rock`) + low water fill level.
  - **Wash (35 min)**: 360-degree tumbling rotation (`@keyframes wash-tumble`) + soapy suds & rising bubbles (`@keyframes bubble-rise`).
  - **Rinse (20 min)**: Fast sloshing rotation (`@keyframes rinse-slosh`) + clear water wave (`@keyframes water-wave`).
  - **Spin (10 min)**: High-speed centrifugation spin (`@keyframes spin-vortex`) + drained water fill + blurred clothes vortex.
- **Pure CSS State Engine**: State transitions driven by accessible radio controls (`<input type="radio" name="wash-cycle">`) mapped to keyboard-navigable button labels (`<label for="...">`).
- **100% Accessible**: Built using semantic `<section>`, `<header>`, `<form>` controls, `<fieldset>`, and `<output id="cycle-status">` providing color + text status labels ("00:35 • WASH STAGE", etc.). Keyboard navigation supported (`Tab`, Arrow Keys, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Appliance layout scales cleanly on smaller mobile viewports (320px–1440px+).
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<section class="washing-machine-appliance">
  <input type="radio" id="cycle-soak" name="wash-cycle" class="cycle-radio" />
  <input
    type="radio"
    id="cycle-wash"
    name="wash-cycle"
    class="cycle-radio"
    checked
  />

  <div class="control-panel">
    <output class="cycle-status-output">
      <span class="status-wash">00:35 • WASH STAGE</span>
    </output>
  </div>

  <div class="machine-body">
    <div class="drum-window">
      <div class="water-wave"></div>
      <div class="clothes-container">
        <span class="clothing-item cloth-shirt"></span>
      </div>
    </div>
  </div>

  <footer class="machine-base">
    <label for="cycle-wash" class="cycle-btn btn-wash">WASH</label>
  </footer>
</section>
```

### Customization Variables

```css
:root {
  --washer-bg: #f1f5f9;
  --washer-surface: #ffffff;
  --washer-accent: #c05bff;
  --washer-water: #38bdf8;
  --washer-led: #10b981;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/66663-washing-machine-cycle-ij/demo.html) directly in any modern web browser to interact with the washing machine cycle component offline.
