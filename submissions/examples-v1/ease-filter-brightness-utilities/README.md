# Filter Brightness Utilities (`ease-filter-brightness-utilities`)

A collection of CSS interactions leveraging `filter: brightness()` to create elegant image galleries and guarantee text contrast natively.

## 🚀 Features & EaseMotion Showcase

- **No Extra Overlays**: Traditionally, developers create an absolute-positioned `div` with a semi-transparent black background over an image to darken it for text readability. `filter: brightness()` eliminates the need for extra DOM nodes entirely.
- **The "Cinema" Effect**: Shows how using CSS combinators (`:hover` on the parent vs `:hover` on the child) allows you to "dim the lights" on siblings to draw focus to a single interacting element.
- **Hardware Accelerated**: CSS filters are highly optimized by modern browsers, meaning smooth cross-fades on large, high-res photos.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

To create a text-reveal overlay that dims the image:
```html
<div class="ease-brightness-overlay">
  <img src="photo.jpg" class="card-bg">
  <div class="card-content">Read More</div>
</div>
