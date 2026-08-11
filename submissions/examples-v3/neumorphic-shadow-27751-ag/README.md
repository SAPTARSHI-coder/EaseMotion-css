# Neumorphic Soft Shadow Elevation Mixin

This guide details configuration specs for generating SCSS Neumorphic soft shadow elevation mixins.

---

## Technical Overview: The Neumorphic Shadow Mixin

Neumorphic interfaces rely on flat background colors and dual-tone box shadows (combining a dark shadow at bottom-right with a light shadow at top-left) to simulate depth.

```scss
// SCSS Neumorphic Soft Shadow Mixin
@mixin shadow-neumorphic($type: 'outset', $size: 8px, $dark-shadow: #b8c4d9, $light-shadow: #ffffff) {
  @if $type == 'outset' {
    box-shadow: 
      $size $size ($size * 2) $dark-shadow, 
      (-$size) (-$size) ($size * 2) $light-shadow;
  }
  @else if $type == 'inset' {
    box-shadow: 
      inset ($size * 0.75) ($size * 0.75) ($size * 1.5) $dark-shadow, 
      inset (-$size * 0.75) (-$size * 0.75) ($size * 1.5) $light-shadow;
  }
}

// Utility Classes
.outset-box { @include shadow-neumorphic('outset'); }
.inset-box  { @include shadow-neumorphic('inset'); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Review the Outset, Inset, and Button shapes.
3. Hover and click the **Click Me** button — verify that it switches to inset shadows dynamically on mouse click events.
