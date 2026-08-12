# Neumorphic Soft Shadow Elevation Mixin

This guide details configuration specs for generating SCSS neumorphic soft shadow utilities.

---

## Technical Overview: The Neumorphic Mixin

Neumorphic soft depth requires combining two opposite directional shadows (a light highlights shadow at top-left and a dark core shadow at bottom-right). Hardcoding color variables values leads to code drift:

```scss
// SCSS Neumorphic Soft Shadow Mixin
@mixin neumorphic-shadow($mode: outset, $distance: 6px, $blur: 14px, $light-color: rgba(255, 255, 255, 0.04), $dark-color: rgba(0, 0, 0, 0.35)) {
  @if $mode == outset {
    box-shadow: 
      -#{$distance} -#{$distance} #{$blur} $light-color, 
      #{$distance} #{$distance} #{$blur} $dark-color;
  } @else if $mode == inset {
    box-shadow: 
      inset -#{$distance} -#{$distance} #{$blur} $light-color, 
      inset #{$distance} #{$distance} #{$blur} $dark-color;
  }
}

// Utility class mapping
.neu-outset {
  @include neumorphic-shadow(outset);
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. View the outset raised panel, the inset hollow panel, and the interactive box.
3. Hover over the **Interactive Button** — verify it sinks (transitions from outset to inset).
