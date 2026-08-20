# Newton's Cradle Physics Sandbox

This submission implements a pure CSS, zero-JS Newton's Cradle physics simulation toy for GSSOC issue **#13606** (or general animation-first submissions).

## Description

An animation-first, zero-dependency interactive physics sandbox simulating momentum conservation and elastic collision. Using perfectly synchronized rotation keyframes, it demonstrates how kinetic energy transfers through a series of hanging wires and shaded metal spheres, featuring a glassmorphic HUD dashboard, custom swing modes, speed parameters, and a neon glow overlay.

## How it works

The component is implemented using HTML and Vanilla CSS:
1. **Pendulum Physics**: Wire components hang below a top support bar. The pivot point is set at the wire attachment using `transform-origin: top center`. When the wire rotates, the attached string and sphere rotate together.
2. **Synchronized Collision Loops**: Leftward and rightward swing keyframes (`ease-kf-swing-left-1`, `ease-kf-swing-right-1`) use precise timing increments in a shared loop. When the leftmost ball hits the stack, it halts, and the rightmost ball immediately begins its swing.
3. **Gravity Easing**: Customized cubic-bezier curves (e.g. `cubic-bezier(0.25, 1, 0.5, 1)` for outward swing deceleration and `cubic-bezier(0.5, 0, 0.75, 0)` for inward swing acceleration) simulate natural gravitational acceleration.
4. **Interactive HUD Controls**: Sibling radio buttons and checkbox triggers drive modifications (1-ball swing vs 2-ball swing, slow-mo vs fast loop durations, and neon glow box-shadow/text-shadow variables).
5. **Accessibility**: A safe static resting fallback is applied under `@media (prefers-reduced-motion: reduce)`.

## Usage

Include the sandbox container and triggers in your markup:

```html
<!-- Triggers (placed outside viewport to enable sibling styling) -->
<input type="radio" name="cradle-mode" id="ease-mode-1" checked style="display: none;">
<input type="radio" name="cradle-mode" id="ease-mode-2" style="display: none;">
<input type="radio" name="cradle-mode" id="ease-mode-3" style="display: none;">
<input type="radio" name="cradle-speed" id="ease-speed-slow" style="display: none;">
<input type="radio" name="cradle-speed" id="ease-speed-normal" checked style="display: none;">
<input type="radio" name="cradle-speed" id="ease-speed-fast" style="display: none;">
<input type="checkbox" id="ease-glow-trigger" style="display: none;">

<div class="ease-cradle-viewport">
  <div class="ease-cradle-frame">
    <div class="ease-cradle-bar"></div>
    <div class="ease-cradle-wire wire-1">
      <div class="ease-cradle-string"></div>
      <div class="ease-cradle-ball"></div>
    </div>
    <!-- Add wires wire-2, wire-3, wire-4, wire-5 -->
  </div>
  
  <div class="ease-cradle-hud">
    <div class="ease-hud-panel ease-hud-dashboard ease-hud-interactive">
      <div class="ease-control-group">
        <span class="ease-control-label">Mode</span>
        <div class="ease-segmented-btn">
          <label for="ease-mode-1" class="ease-segment">1 Ball</label>
          <label for="ease-mode-2" class="ease-segment">2 Balls</label>
          <label for="ease-mode-3" class="ease-segment">Double</label>
        </div>
      </div>
    </div>
  </div>
</div>
```

## Features

- **Pure CSS/Zero JS**: High-fidelity collision timing without any Javascript.
- **Natural Gravity Simulation**: Acceleration and deceleration are modeled using gravity-synchronized bezier curves.
- **Interactive Multi-Mode Sandbox**: Seamlessly alters swing counts and speed rates.
- **Neon Glow Overlay**: Enhances visual appeal with customizable glowing states.
- **A11y Compliant**: Designed with a safe static fallback for reduced-motion profiles.
