# SCSS Utility: Text Highlight & Underline Draw Utilities (#28403)

A suite of clean, reusable SCSS mixins for creating animated underline draw and text highlight effects using CSS `background-size` transitions. Zero JavaScript. Zero external dependencies. Pure CSS with well-commented SCSS.

## 📦 What's included?

- `_text-highlight-underline-draw-utilities.scss`: The SCSS partial containing 5 production-ready mixins.
- `style.css`: Compiled CSS output showing utility classes generated from the mixins.
- `demo.html`: A static demo page showcasing all 5 effects — hover each text to see the animation.

## 🛠 Mixins

| Mixin | Description |
|-------|-------------|
| `underline-draw($color, $thickness, $offset, $duration)` | Draws a line from left to right on hover |
| `underline-draw-center($color, $thickness, $duration)` | Expands line from the center outward on hover |
| `text-highlight($color, $height, $duration)` | Sweeps a background color up behind the text on hover |
| `underline-draw-double($color1, $color2, $thickness, $gap, $duration)` | Draws two stacked underlines of different colors |
| `strikethrough-draw($color, $thickness, $duration)` | Draws a strikethrough line across the text on hover |

## 🚀 How to use

Import the partial into your SCSS file:

```scss
@import 'text-highlight-underline-draw-utilities';

// Navigation link with left-to-right underline draw
.nav-link {
  @include underline-draw(#3b82f6, 2px);
}

// Section heading with center-out draw
.section-heading {
  @include underline-draw-center(#f43f5e, 3px);
}

// Marketing page highlight keyword
.keyword {
  @include text-highlight(#fef08a, 40%);
}

// Hero text with decorative double underline
.hero-title span {
  @include underline-draw-double(#3b82f6, #f43f5e, 2px, 4px);
}

// Crossed-out original price
.original-price {
  @include strikethrough-draw(#ef4444, 2px);
}
```

## 🎨 Why this fits EaseMotion

**EaseMotion** is about making UI elements behave with physical predictability and delight.

Text decoration is a deeply expressive tool in web design, but the native CSS `text-decoration` property offers almost no animation support. By hijacking `background-image: linear-gradient()` and animating `background-size` from `0%` to `100%`, these mixins turn something static into a fluid, directional micro-interaction. Each word the user reads can now reveal its meaning through motion — a draw that echoes the act of highlighting text with a physical marker.
