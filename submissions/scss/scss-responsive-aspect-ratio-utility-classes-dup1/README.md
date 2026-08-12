# SCSS Utility: Responsive Aspect Ratio Utility Classes (#28415)

A lightweight SCSS module for the EaseMotion CSS framework that dynamically generates CSS `aspect-ratio` utility classes. This completely eliminates the need for the outdated padding-bottom "hack" when embedding responsive videos, images, or maps.

## 📦 What's included?

- `_responsive-aspect-ratio-utility-classes.scss`: The SCSS partial containing the aspect ratio mixins and list generator.
- `style.css`: The raw compiled CSS utility classes (`.ease-aspect-video`, `.ease-aspect-square`, etc.).
- `demo.html`: A self-contained demo page demonstrating how images perfectly crop inside the ratio bounds.

## 🛠 Usage via SCSS Mixins

Import the partial into your project. You can apply custom aspect ratios to any specific component.

```scss
@import 'responsive-aspect-ratio-utility-classes';

// @include ease-aspect-ratio($width-ratio, $height-ratio);

.custom-hero-banner {
  // A super-wide custom aspect ratio for a specific design
  @include ease-aspect-ratio(32, 9);
}
```

## 🛠 Usage via HTML Utility Classes

If your project is pre-compiled, you can use the predefined preset classes on wrappers containing `<img>`, `<video>`, or `<iframe>` tags. The mixin ensures that direct children automatically fill the space using `object-fit: cover;` so images are never distorted or stretched.

```html
<!-- Perfect for YouTube Embeds -->
<div class="ease-aspect-video">
  <iframe src="..."></iframe>
</div>

<!-- Perfect for Instagram-style Grid Posts -->
<div class="ease-aspect-square">
  <img src="avatar.jpg" alt="Profile">
</div>

<!-- Perfect for Mobile App Mockups or TikTok videos -->
<div class="ease-aspect-portrait">
  <video src="..."></video>
</div>
```

**Available Preset Classes:**
- `.ease-aspect-square` (1:1)
- `.ease-aspect-video` (16:9)
- `.ease-aspect-portrait` (3:4)
- `.ease-aspect-landscape` (4:3)
- `.ease-aspect-cinematic` (21:9)

## 🚀 Why this fits EaseMotion

The **EaseMotion** philosophy is about reducing developer friction and maintaining perfect layouts. Without strict aspect ratios, loading images or cross-domain iframes causes severe Cumulative Layout Shift (CLS) as the browser figures out how tall the content is. This pushes your UI down abruptly and ruins any smooth entrance animations. By utilizing modern CSS `aspect-ratio`, the browser reserves the exact mathematical space before the asset even loads, ensuring perfectly stable, jitter-free animation timelines.
