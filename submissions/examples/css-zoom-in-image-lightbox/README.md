# CSS Zoom-In Image Lightbox

A pure CSS image lightbox that expands an image into a fullscreen overlay with a smooth zoom-in animation.

## Features

- Pure HTML and CSS
- Fullscreen image preview
- Smooth zoom-in effect
- Overlay backdrop
- Responsive design
- No JavaScript required

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Add the image and lightbox markup:

```html
<a href="#lightbox">
  <img src="image.jpg" alt="Preview" class="thumbnail">
</a>

<div id="lightbox" class="lightbox">
  <a href="#" class="close"></a>
  <img src="image.jpg" alt="Preview" class="lightbox-image">
</div>
```

## Accessibility

- Meaningful image alt text
- Keyboard accessible anchor navigation
- Large click target for closing overlay
- Responsive layout for all screen sizes

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## Why it fits EaseMotion CSS

This component provides a reusable image preview pattern with smooth zoom animations and overlay effects using only HTML and CSS. It aligns with EaseMotion CSS by offering lightweight, dependency-free UI interactions that can be easily integrated into modern web projects.