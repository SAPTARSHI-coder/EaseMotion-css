# Animated Border Draw & Glow Keyframe Mixins

This guide details configuration specs for generating SCSS animated border drawing mixins.

---

## Technical Overview: The Border Draw Mixin

Rendering complex multi-line svg scripts to trace simple card borders adds bulk. Utilizing absolute-positioned sizing overlays is a lighter, highly responsive approach:

```scss
// SCSS Border Draw Mixin
@mixin border-draw-glow($color: #7c3aed, $thickness: 2px) {
  position: relative;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    transition: width 0.25s ease, height 0.25s ease;
  }
  
  &::before {
    top: 0; left: 0;
    border-top: $thickness solid transparent;
    border-right: $thickness solid transparent;
  }
  
  &::after {
    bottom: 0; right: 0;
    border-bottom: $thickness solid transparent;
    border-left: $thickness solid transparent;
  }
  
  &:hover {
    box-shadow: 0 0 20px rgba($color, 0.3);
    
    &::before {
      border-top-color: $color;
      border-right-color: $color;
      width: 100%;
      height: 100%;
    }
    
    &::after {
      border-bottom-color: $color;
      border-left-color: $color;
      width: 100%;
      height: 100%;
    }
  }
}

// Class mapping
.glow-cyan { @include border-draw-glow(#22d3ee); }
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Hover over the **Cyan Pulse** and **Violet Halo** cards.
3. Verify that borders draw dynamically around the card perimeters while adding a glowing background shadow halo.
