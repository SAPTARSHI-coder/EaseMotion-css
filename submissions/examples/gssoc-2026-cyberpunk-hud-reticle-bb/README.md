# Cyberpunk Sci-Fi Tactical HUD Target Reticle Scanner

An interactive sci-fi HUD targeting interface component built with pure CSS keyframes, concentric ring rotations, and lock-on telemetry state transitions.

## 1. What does this do?
This component renders a high-tech tactical HUD reticle featuring dual-directional rotating dashed rings, pulsating crosshairs, telemetry readouts, and an interactive state toggle that shrinks lock-on corner brackets while changing neon telemetry themes from Cyan to Threat Red.

## 2. How is it used?
Link `style.css` in your HTML document and include the `.hud-target-card` structure:

```html
<div class="hud-target-card" id="targetCard">
  <div class="reticle-wrapper">
    <div class="outer-ring ring-spin-cw"></div>
    <div class="mid-ring ring-spin-ccw"></div>
    <div class="lock-bracket top-left"></div>
    <div class="center-core"></div>
  </div>
</div>
```

Toggle the `.lock-acquired` class dynamically via JavaScript or button events.

## 3. Why is it useful?
- **Pure CSS Keyframe Rotations**: Uses hardware-accelerated CSS keyframe animations for smooth 60fps rotational motion.
- **Cyberpunk Gaming UI Aesthetic**: Perfect for gaming dashboards, sci-fi landing pages, security status monitors, and futuristic Web3/AI landing applications.
- **Dynamic Lock-On Transitions**: Clean CSS transition properties enable smooth locking movement on target activation.
