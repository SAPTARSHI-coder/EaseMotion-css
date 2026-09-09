# Toggle Switch Slide

A slide-style toggle switch component with animated knob and customizable CSS custom properties. Click toggles `.tss-on` class — CSS handles knob translation and track background transitions.

## Features

- Smooth sliding knob animation using `transform: translateX()`
- Track background color change via CSS custom properties
- Bouncy cubic-bezier transition on knob and track
- Customizable dimensions and colors through `:root` variables
- Multiple toggle demo with live status summary

## Usage

Add `.tss-on` class to `.tss-toggle` element. CSS handles the rest.

```html
<span class="tss-toggle tss-on">
  <span class="tss-track">
    <span class="tss-knob"></span>
  </span>
</span>
```
