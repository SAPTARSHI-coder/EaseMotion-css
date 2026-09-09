# Object Position Utilities

An overview and guide for using CSS `object-position` utility classes to align replaced media elements within their boxes.

## Core Questions

### What does this do?

These utility classes map CSS `object-position` values to adjust the alignment and focus point of replaced media content (like `<img>` and `<video>` elements) when they are sized with `object-fit`.

### How is it used?

Apply the utility classes directly on an image or video that has been sized with `object-fit: cover` or similar, to specify which coordinate (edges, corners, or center) should remain visible:

```html
<div class="thumbnail-container">
  <img class="of-cover op-top" src="portrait.jpg" alt="User portrait" />
</div>
```

### Why is it useful?

When displaying media of varying aspect ratios inside fixed-size grid blocks (like headers or profile cards), critical focus areas (like faces or text headers) may get cropped. `object-position` utilities allow developers to shift the crop window dynamically inside the markup.

---

## Utility Classes

| Class              | CSS Declaration                  | Description                                                           |
| :----------------- | :------------------------------- | :-------------------------------------------------------------------- |
| `.op-center`       | `object-position: center;`       | Centers the media content both horizontally and vertically (Default). |
| `.op-top`          | `object-position: top;`          | Aligns the top edge of the media with the top of the box.             |
| `.op-bottom`       | `object-position: bottom;`       | Aligns the bottom edge of the media with the bottom of the box.       |
| `.op-left`         | `object-position: left;`         | Aligns the left edge of the media with the left of the box.           |
| `.op-right`        | `object-position: right;`        | Aligns the right edge of the media with the right of the box.         |
| `.op-top-left`     | `object-position: left top;`     | Aligns the media content to the top-left corner.                      |
| `.op-top-right`    | `object-position: right top;`    | Aligns the media content to the top-right corner.                     |
| `.op-bottom-left`  | `object-position: left bottom;`  | Aligns the media content to the bottom-left corner.                   |
| `.op-bottom-right` | `object-position: right bottom;` | Aligns the media content to the bottom-right corner.                  |

---

## Detailed Explanation of `object-position`

The `object-position` property defines the alignment of the replaced element's content inside its container box, similar to how `background-position` works for background images.

- By default, media elements are positioned at `50% 50%` (`center`).
- Shifting coordinates only makes a visible difference when the media content has **overflow** relative to its layout box (which is standard when using `object-fit: cover` or `object-fit: none`).
- If a container is wider than the scaled image, only horizontal shifts (`left`, `right`) will be visually distinct. If it is taller, only vertical shifts (`top`, `bottom`) will change the visible region.

---

## Usage Examples

### 1. User Portrait / Header Focus (Top Focus)

Keep faces or heads from being cropped in user cards when using square cropping:

```html
<div
  class="avatar-card"
  style="width: 150px; height: 150px; overflow: hidden; border-radius: 50%;"
>
  <img
    class="of-cover op-top"
    src="avatar.jpg"
    alt="User avatar"
    style="width: 100%; height: 100%;"
  />
</div>
```

### 2. Tall Hero Header Video (Top-Center Focus)

Ensure the top part of background video remains visible on smaller viewport heights:

```html
<div class="hero-wrapper" style="height: 400px; position: relative;">
  <video
    class="of-cover op-top"
    src="hero-banner.mp4"
    style="width: 100%; height: 100%;"
  ></video>
</div>
```

### 3. Product Features / Logos Focus (Left/Right Focus)

Align decorative imagery to the left or right of details cards:

```html
<div class="feature-card" style="width: 320px; height: 200px;">
  <img
    class="of-cover op-left"
    src="product-blueprint.jpg"
    alt="Left aligned focus"
    style="width: 100%; height: 100%;"
  />
</div>
```

---

## Common Use Cases

1. **Header Hero Banners**: Shift focus to the `.op-top` or `.op-bottom` depending on where the horizon or crucial banner graphics sit.
2. **User Profiles / Avatars**: Use `.op-top` to avoid cropping the top of peoples' heads when centering portrait images inside avatars.
3. **Product Catalog Showcase**: Position products using `.op-bottom` or `.op-left` to line up products visually with borders and text cards.
4. **Artistic Grid Galleries**: Alternate positions between cards (e.g. `.op-top-left` vs `.op-bottom-right`) to create dynamic, hand-crafted masonry-style visual interest.

---

## Browser Support Notes

CSS `object-position` has widespread support across all modern desktop and mobile browsers:

- Chrome 31+
- Edge 16+
- Firefox 36+
- Safari 7.1+
- iOS Safari 8+
- Android Browser 4.4.4+

_Note: Internet Explorer (IE 11 and older) lacks native support. For legacy support, you can use JavaScript polyfills like `object-fit-images` which also polyfill `object-position`._
