# Object Fit Utilities

An overview and guide for using CSS `object-fit` utility classes to handle media resizing.

## Core Questions

### What does this do?

These utility classes map CSS `object-fit` properties to control how elements like `<img>` or `<video>` resize and fit within their parent containers.

### How is it used?

Apply the utility classes directly to a replaced element (such as `<img>` or `<video>`) that has defined dimensions or is styled to fill its container:

```html
<div class="media-box">
  <img class="of-cover" src="image.jpg" alt="Cover Image" />
</div>
```

### Why is it useful?

It allows developer-controlled resizing (cropping, scaling, stretching, or letterboxing) directly from the markup. This eliminates manual canvas cropping, server-side scaling, or complex CSS layout hacks to manage media aspect ratios.

---

## Utility Classes

| Class            | CSS Declaration           | Description                                                                   |
| :--------------- | :------------------------ | :---------------------------------------------------------------------------- |
| `.of-fill`       | `object-fit: fill;`       | Stretches or squishes the media to fill the container exactly.                |
| `.of-contain`    | `object-fit: contain;`    | Scales the media proportionally to fit completely inside the container.       |
| `.of-cover`      | `object-fit: cover;`      | Scales the media proportionally to cover the entire container (clips excess). |
| `.of-none`       | `object-fit: none;`       | Retains the media's original intrinsic dimensions without scaling.            |
| `.of-scale-down` | `object-fit: scale-down;` | Compares `none` and `contain`, and uses the one yielding the smaller size.    |

---

## Detailed Value Explanations

- **`fill`**: The replaced content is sized to fill the element's content box. The entire object will completely fill the box. If the object's aspect ratio does not match the aspect ratio of its box, the object will be stretched or squished.
- **`contain`**: The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box. The entire object is made to fill the box while preserving its aspect ratio, so the object will be "letterboxed" or "pillarboxed" if its aspect ratio does not match.
- **`cover`**: The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.
- **`none`**: The replaced content is not resized. The content is rendered at its original intrinsic size, centered within the box. Excess content will spill out or be clipped depending on container overflow rules.
- **`scale-down`**: The content is sized as if `none` or `contain` were specified, choosing whichever results in a smaller concrete object size.

---

## Usage Examples

### 1. Responsive Card Thumbnail (Cover)

Ensure user-submitted card images cover the thumbnail area without distortion or squishing:

```html
<div style="width: 300px; height: 200px; overflow: hidden;">
  <img
    class="of-cover"
    src="user-thumbnail.jpg"
    alt="Thumbnail"
    style="width: 100%; height: 100%;"
  />
</div>
```

### 2. Video Hero Section (Cover)

Keep background videos filling the entire hero header viewport:

```html
<header
  style="position: relative; width: 100%; height: 500px; overflow: hidden;"
>
  <video
    class="of-cover"
    src="hero-bg.mp4"
    autoplay
    loop
    muted
    style="width: 100%; height: 100%; position: absolute; z-index: -1;"
  ></video>
</header>
```

### 3. Product Gallery Grid (Contain)

Display items in a catalog grid where showing the entire product image is critical:

```html
<div
  class="product-grid-item"
  style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; background: #f3f4f6;"
>
  <img
    class="of-contain"
    src="product-shot.png"
    alt="Product Image"
    style="width: 100%; height: 100%;"
  />
</div>
```

---

## Common Use Cases

1. **User Avatars / Profile Pictures**: Using `.of-cover` inside a circular frame ensures square or rectangular photos are perfectly centered and circularized without stretching.
2. **E-commerce Portfolios**: Using `.of-contain` preserves the product's full aspect ratio and keeps the entire item visible in search grid tiles.
3. **Hero & Banner Media**: Using `.of-cover` scales beautiful landscape photography or background looping videos to fit any screen resolution dynamically.
4. **App Screens Showcase**: Using `.of-scale-down` helps display small screenshots at their pixel-perfect native size without blowing them up or pixelating, while automatically shrinking large screenshots when viewed on mobile screens.

---

## Browser Support Notes

CSS `object-fit` is supported globally across all modern web browsers, including:

- Chrome 31+
- Edge 16+
- Firefox 36+
- Safari 7.1+
- Opera 19+
- iOS Safari 8+
- Android Browser & Chrome for Android

_Note: Internet Explorer (IE 11 and older) does not natively support `object-fit`. For IE compatibility, a polyfill (e.g., `object-fit-images`) or background images with `background-size` properties can be used._
