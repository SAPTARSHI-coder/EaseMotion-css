# Hinge Animation Example

This submission provides a complete, reusable demonstration of the Hinge animation using EaseMotion CSS.

## Overview
The Hinge animation simulates an object falling off a hinge. It uses multiple keyframes to create a swinging motion followed by a drop. This example implements the animation cleanly and triggers it via JavaScript on click.

## Setup Instructions
1. Clone the repository and navigate to `submissions/examples/hinge-ag/`.
2. Open `demo.html` in any modern web browser.
3. (Optional) Inspect `style.css` to see the `@keyframes` definition and how it works alongside EaseMotion utility classes.

## Usage Example
Simply click on the element marked "Click to drop!" to trigger the animation. The JavaScript handles adding and removing the `.em-animate-hinge` class so the animation can be replayed.

```html
<div class="em-animate-hinge hinge-element em-bg-blue-500 em-text-white em-p-4 em-rounded-md">
  Click to drop!
</div>
```

## Compatibility
Tested and fully functional on:
- Chrome
- Firefox
- Safari
- Edge

Responsive on Mobile, Tablet, and Desktop.
