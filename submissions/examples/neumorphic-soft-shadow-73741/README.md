# CSS Neumorphic Effect: Neumorphic Soft Shadow Variation

Pure CSS neumorphic UI featuring dynamic dual box-shadow elevation depth levels, haptic tactile push states, and inset shadow profiles.

## 1. What does this do?
Adjusts neumorphic soft shadow elevation levels (Low, Medium, High, Inset) with smooth dual `box-shadow` blur radiuses and haptic vertical displacement without JavaScript.

## 2. How is it used?
Include `style.css` and use radio triggers to adjust soft shadow elevation:

```html
<input type="radio" name="shadow-level" id="shadow-mid" class="shadow-radio" checked>

<div class="shadow-stage">
  <div class="shadow-plate">
    <div class="plate-content">MEDIUM ELEVATION</div>
  </div>
</div>

<label for="shadow-mid" class="neumorphic-btn">Medium</label>
```

## 3. Why is it useful?
Offers a clean design system reference for neumorphic shadow depth hierarchy, card elevations, button states, and haptic feedback with full dark mode compatibility and reduced motion accessibility.
