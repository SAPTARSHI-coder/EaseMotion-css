# CSS Object-Fit Gallery (`ease-object-fit-gallery`)

A responsive image gallery demonstrating the power of `object-fit: cover` paired with pure CSS hover animations.

## 🚀 Features & EaseMotion Showcase

- **Object-Fit Cover**: Automatically crops and scales images to fill their grid containers flawlessly without aspect-ratio distortion.
- **CSS Grid Integration**: Works beautifully with CSS grid, including spanning rows and columns.
- **Hover Animations**: Includes smooth image scaling (`transform: scale`) and an animated gradient overlay that fades and slides up.
- **Zero JS**: Completely CSS-driven structure and interactivity.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

```html
<div class="gallery-item">
  <!-- Apply the object-fit class to your images -->
  <img src="your-image.jpg" class="ease-object-fit" alt="Gallery Image" />

  <div class="gallery-overlay">
    <span>Image Title</span>
  </div>
</div>
```
