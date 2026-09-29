# ease-toggle-hd

A pure CSS toggle switch component. No JavaScript, no dependencies.

## Features
- Smooth thumb animation with a springy easing
- Keyboard accessible (uses a real checkbox, visible focus ring)
- Disabled state
- Respects `prefers-reduced-motion`

## Usage
Include `style.css` and use this markup:

    <label class="ease-toggle-hd">
      <input class="ease-toggle-hd__input" type="checkbox" />
      <span class="ease-toggle-hd__track"><span class="ease-toggle-hd__thumb"></span></span>
      Label text
    </label>

## Classes
| Class | Purpose |
| --- | --- |
| `ease-toggle-hd` | Wrapper label |
| `ease-toggle-hd__input` | Hidden checkbox (holds the state) |
| `ease-toggle-hd__track` | Background pill |
| `ease-toggle-hd__thumb` | Sliding circle |