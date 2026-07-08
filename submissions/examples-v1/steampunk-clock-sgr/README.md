# CSS-only Steampunk Gear Train & Mechanical Clock

This submission implements a pure CSS, zero-JS mechanical clockwork and gears train simulation for GSSOC issue **#13606** (or general animation-first submissions).

## Description

An animation-first, zero-dependency interactive clockwork mechanism. It models four interlocking gear cogs of varying tooth sizes rotating at mathematically exact ratios, layered behind a detailed brass pocket watch case. Users can wind up the speeds, reverse rotation directions, and swap the visual theme (Classic Brass vs Cyber Neon) using pure CSS click triggers.

## How it works

The component is implemented using HTML and Vanilla CSS:
1. **Gear Cog Shapes**: Built using repeating bars rotated around a central axis (e.g. 4 bars rotated every 45deg for 8 cogs, 12 bars rotated every 15deg for 24 cogs). A solid circle overlays the center, leaving only the protruding ends visible as teeth.
2. **Proportional Gear Ratios**: To simulate physical gear meshing, the rotation durations are tied directly to the tooth count:
   - Large Central Gear (24 teeth) rotates clockwise at `var(--gear-speed-base)`.
   - Right Medium Gear (12 teeth) meshes with the central gear, rotating counter-clockwise at `var(--gear-speed-base) / 2` (twice as fast).
   - Right Small Gear (8 teeth) meshes with the medium gear, rotating clockwise at `var(--gear-speed-base) / 3` (three times as fast).
   - Left Small Gear (8 teeth) meshes with the central gear, rotating counter-clockwise at `var(--gear-speed-base) / 3`.
3. **Synchronized Clock Hands**: Hour, minute, and second hands overlay the central gear. Their rotation durations scale proportionally (e.g. Second hand runs x60 faster, Hour hand runs x12 slower).
4. **Interactive HUD Dashboard**: Segmented labels toggle hidden radio inputs (sibling selectors) to swap visual themes, accelerate rotation cycles (Winding Up), and reverse all cogs.
5. **Accessibility**: A safe static fallback is applied under `@media (prefers-reduced-motion: reduce)`.

## Usage

Include the clockwork container and triggers in your markup:

```html
<!-- Triggers (placed outside viewport to enable sibling styling) -->
<input type="radio" name="clk-theme" id="ease-theme-classic" checked style="display: none;">
<input type="radio" name="clk-theme" id="ease-theme-neon" style="display: none;">
<input type="radio" name="clk-speed" id="ease-speed-idle" checked style="display: none;">
<input type="radio" name="clk-speed" id="ease-speed-wind" style="display: none;">
<input type="radio" name="clk-dir" id="ease-direction-fwd" checked style="display: none;">
<input type="radio" name="clk-dir" id="ease-direction-rev" style="display: none;">

<div class="ease-clock-viewport">
  <div class="ease-clockwork-container">
    <!-- Large Gear -->
    <div class="ease-gear gear-large">
      <div class="ease-cog-bar" style="transform: rotate(0deg);"></div>
      <!-- Add rotated bars ... -->
      <div class="ease-gear-disc"></div>
    </div>
    
    <!-- Central clock case layered over Large Gear -->
    <div class="ease-clock-case">
      <div class="ease-clock-face">
        <div class="ease-clock-center"></div>
        <div class="ease-clock-hand hand-hour"></div>
        <div class="ease-clock-hand hand-minute"></div>
        <div class="ease-clock-hand hand-second"></div>
      </div>
    </div>
    
    <!-- Add other gears (medium, small-right, small-left) -->
  </div>
</div>
```

## Features

- **Pure CSS/Zero JS**: High-fidelity mechanical rotation mesh without Javascript calculations.
- **Mathematical Cog Ratios**: Exact proportional speed coordination based on physical cog counts.
- **Tactile Winding & Direction Options**: Reverses and accelerates clockwork states smoothly.
- **Classic vs Cyber Themes**: High-contrast, visually rich styling options (Classic Brass vs Cyber Neon).
- **A11y Compliant**: Designed with a safe static fallback for reduced-motion profiles.
