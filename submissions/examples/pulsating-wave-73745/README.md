# CSS Neumorphic Effect: Pulsating Wave Variation

Pure CSS neumorphic UI component with concentric sonar/radar pulsating wave animations radiating around a glowing central core.

## 1. What does this do?
Generates expanding concentric wave ring animations that radiate from a neumorphic core button with customizable pulse speed states (Off, Smooth, Intense) without JavaScript.

## 2. How is it used?
Link `style.css` and use pure CSS radio triggers to control wave states:

```html
<input type="radio" name="pulse-mode" id="pulse-smooth" class="pulse-radio" checked>

<div class="pulse-stage">
  <div class="wave-emitter">
    <div class="wave-ring wave-1"></div>
    <div class="wave-ring wave-2"></div>
    <div class="pulse-core"></div>
  </div>
</div>

<label for="pulse-smooth" class="neumorphic-btn">Smooth</label>
```

## 3. Why is it useful?
Provides high-performance radar/sonar location indicators, audio visualizers, call-to-action buttons, or status beacons for modern web interfaces with full dark mode and reduced motion support.
