# Smooth Scrollbar Styling & Hover Mixins

This submission implements customizable scrollbar utilities matching SCSS utility mixin requirements.

---

## Technical Overview: The SCSS Scrollbar Mixin

Browser scrollbars default to rigid system styles, clashing with premium dark themes. Generating scrollbar rules via SCSS mixins ensures seamless page visual styling:

```scss
// SCSS Scrollbar Mixin
@mixin custom-scrollbar($width: 6px, $thumb-color: rgba(124, 58, 237, 0.4), $track-color: rgba(255, 255, 255, 0.02)) {
  &::-webkit-scrollbar {
    width: $width;
    height: $width;
  }
  &::-webkit-scrollbar-track {
    background: $track-color;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: $thumb-color;
    border-radius: 8px;
    transition: background 0.25s ease;
    
    &:hover {
      background: scale-color($thumb-color, $lightness: 20%);
    }
  }
}

// Utility Classes
.scroll-purple {
  @include custom-scrollbar(6px, rgba(124, 58, 237, 0.4));
}
```

---

## Verification Steps

1. Open `demo.html` in a browser.
2. Scroll down both panels — verify the custom scrollbars scale and display custom color weights.
3. Hover over the scrollbar thumb — verify it shifts color density.
