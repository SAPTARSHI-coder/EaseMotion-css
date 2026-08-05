# SCSS Utility: Text Highlight Underline Draw Utilities (#28423)

An elegant SCSS typography module for the EaseMotion CSS framework that adds beautiful, animated "drawing" underlines and background highlighter effects to inline text and links.

## 📦 What's included?

- `_text-highlight-underline-draw-utilities.scss`: The SCSS partial containing the `background-size` transition mixins.
- `style.css`: The compiled output of the mixins.
- `demo.html`: A clean typographic reading experience showcasing 5 distinct text animations.

## 🛠 Usage via SCSS Mixins

Import the partial and include the mixin on any `<a>`, `<span>`, or inline text element.

```scss
@import 'text-highlight-underline-draw-utilities';

.my-blog-link {
  // @include ease-underline-draw($color, $thickness, $offset, $duration);
  @include ease-underline-draw(#3b82f6, 2px, 100%, 0.3s);
}

.nav-link {
  // Draws from the center outward
  @include ease-underline-center(#ec4899, 2px);
}

.important-text {
  // Creates a yellow highlighter marker effect
  @include ease-text-highlight(#fef08a, #000);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, simply add the classes to your HTML elements.

```html
<!-- Smooth left-to-right 2px blue underline -->
<a href="#" class="ease-underline-draw">Read More</a>

<!-- Center-out pink underline -->
<a href="#" class="ease-underline-center">Home</a>

<!-- Yellow highlighter draw effect -->
<span class="ease-text-highlight">Important Note</span>
```

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy focuses on creating moments of delight through motion, especially in typography where interactions are often overlooked. Standard CSS `text-decoration: underline` is harsh and cannot be animated. Animating borders (`border-bottom`) often causes layout shifts. 

This utility uses a modern, highly performant CSS trick: using a linear-gradient `background-image` and animating the `background-size`. This guarantees butter-smooth 60fps animations that "draw" across the text without causing any layout reflows or DOM shifts, perfectly aligning with EaseMotion's high standards.
