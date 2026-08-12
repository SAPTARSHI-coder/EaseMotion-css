# CSS Neumorphic Effect: Liquid Wave Fill Variation

Pure CSS neumorphic UI featuring an interactive liquid wave fill animation with soft haptic shadows, fluid wave crests, and dynamic level triggers.

## 1. What does this do?
Creates a soft neumorphic vessel container with rotating CSS wave crest pseudo-elements and rising bubble keyframe animations that dynamically fill to selected capacity levels (25%, 50%, 75%, 100%) without JavaScript.

## 2. How is it used?
Include `style.css` and use radio input triggers paired with liquid vessel markup:

```html
<input type="radio" name="wave-fill-level" id="level-50" class="fill-radio" checked>

<div class="liquid-vessel-container">
  <div class="neumorphic-vessel">
    <div class="fluid-mask">
      <div class="liquid-layer">
        <div class="wave-crest wave-primary"></div>
        <div class="wave-crest wave-secondary"></div>
      </div>
    </div>
  </div>
</div>

<label for="level-50" class="neumorphic-btn">50%</label>
```

## 3. Why is it useful?
Provides an engaging, hardware-accelerated fluid status/battery/progress indicator for modern web dashboards and mobile-inspired interfaces, supporting light/dark color schemes and accessible reduced-motion preferences.
