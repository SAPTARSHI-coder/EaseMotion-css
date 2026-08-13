# CSS Neumorphic Effect: Bouncing Spring Variation

Pure CSS neumorphic UI featuring realistic spring physics recoil animations, metallic coil flexing, and tactile depth feedback.

## 1. What does this do?
Simulates spring physics using cubic-bezier recoil curves and multi-keyframe coil flexing animations inside a soft extruded neumorphic visualizer chamber without JavaScript.

## 2. How is it used?
Link `style.css` and use checkbox input triggers linked to label buttons:

```html
<input type="checkbox" id="spring-trigger" class="spring-checkbox">

<div class="spring-chamber">
  <div class="spring-head">SPRING LOADED</div>
  <div class="spring-coils">
    <span class="coil"></span>
    <span class="coil"></span>
  </div>
</div>

<label for="spring-trigger" class="neumorphic-spring-btn">COMPRESS & RELEASE</label>
```

## 3. Why is it useful?
Delivers satisfying haptic micro-interactions for web controls, buttons, toggle switches, and playful dashboard elements while supporting dark mode themes and reduced motion accessibility.
