# Infinite Image Carousel

## What does it do?
An infinitely scrolling horizontal image carousel with no JavaScript — pure CSS.

## Features
- Seamless infinite loop using content duplication + `translateX(-50%)`
- Works with any images (demo uses colored placeholder cards)
- Pure CSS, no JavaScript

## Usage
```html
<div class="carousel">
  <div class="carousel-track">
    <img src="image1.jpg" alt=""/>
    <img src="image2.jpg" alt=""/>
    <!-- Duplicate the set for seamless loop -->
    <img src="image1.jpg" alt=""/>
    <img src="image2.jpg" alt=""/>
  </div>
</div>
```

```css
.carousel { overflow: hidden; }
.carousel-track {
  display: flex;
  width: fit-content;
  animation: scroll 12s linear infinite;
}
@keyframes scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

## Browser Support
- Chrome 1+, Firefox 3.5+, Safari 3.1+

## Tech Stack
- HTML + CSS only, no JavaScript

## Preview
Open `demo.html` directly in browser.
