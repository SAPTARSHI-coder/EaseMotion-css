# Neumorphic Audio Mixing Deck

A tactile soft-UI neumorphic audio mixer console deck featuring extruded rotary knobs, inset toggle buttons, and LED VU meters.

## 1. What does this do?
This component renders an interactive light-mode neumorphic audio mixing board with realistic extruded element box shadows, inset pressed state buttons, and LED peak indicators.

## 2. How is it used?
Link `style.css` and use the `.neu-card` structure:

```html
<link rel="stylesheet" href="style.css">

<div class="neu-card" tabindex="0">
  <div class="neu-knob knob-active">
    <span class="knob-pointer"></span>
  </div>
  <button class="neu-btn pressed">MUTE</button>
</div>
```

## 3. Why is it useful?
It provides audio workstations, digital synthesizer UIs, and sound engineering dashboards with a tactile soft-UI design language built entirely in pure CSS.
