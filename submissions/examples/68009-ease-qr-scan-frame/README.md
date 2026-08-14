# Animated QR Scan Frame Component (`ease-qr-scan-frame`)

A pure HTML + Vanilla CSS animated QR/barcode scanning frame component featuring a square viewport with 4 distinct corner bracket markers (`.corner-bracket`), a top-to-bottom laser scan line animation (`@keyframes ease-qr-scan-line`), a decorative pure CSS QR matrix pattern placeholder (`.qr-matrix-pattern`, `aria-hidden="true"`), 3 interactive scanner modes (Active Sweep, Verified Match, Standby Mode), pure CSS mode state controls, and full accessibility support.

## Features

- **Pure HTML + CSS**: 100% interactive scanning frame component without JavaScript, external fonts, SVG image files, canvas, or build scripts. Works offline.
- **3 Scanner Interaction Modes**:
  - **1. Active Sweep**: Laser line sweeps top-to-bottom continuously (`@keyframes ease-qr-scan-line`), cyan glowing laser aura beam (`#06b6d4`), badge status: "SCANNING ACTIVE".
  - **2. Verified Match**: Frame corner brackets switch to emerald green (`#10b981`), laser pauses, success checkmark overlay pulses (`@keyframes ease-qr-match-pulse`), badge status: "VERIFIED MATCH".
  - **3. Standby Mode**: Corner brackets pulse slowly (`@keyframes ease-qr-standby-pulse`), scan line dims, badge status: "STANDBY MODE".
- **Pure CSS State Engine**: Mode transitions driven by radio controls (`<input type="radio" name="scan-mode">`) mapped to keyboard-navigable button labels (`<label for="...">`).
- **100% Accessible**: Built using semantic `<section>`, `<header>`, `<output id="scan-status">`, and `<fieldset>`. Decorative QR code patterns and reticles hidden via `aria-hidden="true"`. Keyboard navigation supported (`Tab`, Arrow Keys, `Space`, `Enter`) with distinct `:focus-visible` indicators.
- **Responsive & Mobile Ready**: Viewport scales fluidly down to 320px screens using CSS `clamp()` without horizontal overflow.
- **Theme Adaptability & Motion Controls**: Supports light/dark theme adaptation (`@media (prefers-color-scheme)`) and reduced motion controls (`@media (prefers-reduced-motion: reduce)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="qr-scan-viewport" aria-label="QR Code Scanner Viewport">
  <span class="corner-bracket corner-tl" aria-hidden="true"></span>
  <span class="corner-bracket corner-tr" aria-hidden="true"></span>
  <span class="corner-bracket corner-bl" aria-hidden="true"></span>
  <span class="corner-bracket corner-br" aria-hidden="true"></span>
  <div class="scan-line-container" aria-hidden="true">
    <div class="scan-line"></div>
    <div class="scan-beam-aura"></div>
  </div>
</div>
```

### Customization Variables

```css
:root {
  --qr-bg: #f8fafc;
  --qr-laser: #06b6d4;
  --qr-success: #10b981;
  --qr-speed: 2.2s;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/68009-ease-qr-scan-frame/demo.html) directly in any modern web browser to interact with the QR scan frame component offline.
