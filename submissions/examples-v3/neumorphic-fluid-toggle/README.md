# Neumorphic Fluid Toggle Switch

A soft-UI (neumorphism) toggle switch whose thumb simulates physical
momentum: it squishes horizontally while traveling across the track and
bounces slightly as it settles into place - all in pure CSS.

## Usage

```html
<input type="checkbox" id="fluid-toggle" hidden>
<label for="fluid-toggle" class="track">
  <span class="thumb"></span>
</label>
```

Include `style.css`. No JavaScript required.

## How it works

- **Neumorphic surface**: layered inset + outer box-shadow pairs on the
  track and thumb create the soft, embossed look.
- **Squish on travel**: `:active` briefly scales the thumb
  (`scaleX(1.35) scaleY(0.85)`) while the user is pressing/dragging it.
- **Momentum easing**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` gives the
  thumb an overshoot "elastic" feel as it crosses the track.
- **Settle bounce**: on `:checked`, a keyframe animation
  (`ease-thumb-bounce`) squashes and rebounds the thumb shape as it lands.

## Files

- `demo.html` - standalone interactive demo
- `style.css` - all styles + animation
- `README.md` - this file

## Accessibility

Uses a real `<input type="checkbox">` under the hood (visually hidden, not
`display:none`) so it remains keyboard- and screen-reader-accessible, with a
visible focus ring via `:focus-visible`.
