# 3-Way Switch (`ease-switch-3way`)

A CSS-only toggle switch with three distinct states (Off, Neutral, On). Built for the EaseMotion-css framework.

## 🚀 Features

- **Pure CSS Logic**: By grouping three hidden `<input type="radio">` elements, the component relies entirely on the `:checked` pseudo-class and the `~` general sibling selector to determine its state without any JavaScript.
- **Bouncy Sliding**: The switch knob utilizes a `cubic-bezier` timing function to quickly slide and slightly overshoot its target position for a premium feel.
- **Dynamic Color Coding**: The track background color smoothly transitions between Red (Off), Slate (Neutral), and Green (On) depending on the active state.
- **Clickable Zones**: The track is divided into three equal, invisible `<label>` flex items, meaning a user can click anywhere on the track to snap the knob to that position.

## 🛠️ Usage

Ensure you wrap three radio inputs with identical `name` attributes *before* the `.ease-switch-track`. The labels inside the track must have `for` attributes that match the IDs of the radio inputs.

```html
<div class="ease-switch-3way">
  <input type="radio" name="my-setting" id="opt-1" value="off" class="ease-switch-input" checked />
  <input type="radio" name="my-setting" id="opt-2" value="neutral" class="ease-switch-input" />
  <input type="radio" name="my-setting" id="opt-3" value="on" class="ease-switch-input" />
  
  <div class="ease-switch-track">
    <label for="opt-1" class="ease-switch-label"></label>
    <label for="opt-2" class="ease-switch-label"></label>
    <label for="opt-3" class="ease-switch-label"></label>
    <div class="ease-switch-knob"></div>
  </div>
</div>
