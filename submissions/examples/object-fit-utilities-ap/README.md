# EaseMotion CSS — Object Fit & Position Utilities

This directory implements core utility classes for applying CSS `object-fit` (clipping, scaling, stretching) and `object-position` alignments in EaseMotion CSS.

---

## What is Object Fit?

The CSS `object-fit` property specifies how the content of a replaced element (such as an `<img>` or `<video>`) should be resized to fit its container box.

### Fitting Strategies

- **Cover (`object-fit: cover;`)**: The image is scaled to completely cover the container while maintaining its aspect ratio. Portions of the image that exceed container dimensions are cropped. This is the standard choice for avatars and hero banners.
- **Contain (`object-fit: contain;`)**: The image is scaled to fit inside the container while maintaining its aspect ratio. The entire image is visible, resulting in letterboxing (blank spaces) if container proportions differ. This is the standard choice for product images and partner brand logos.
- **Fill (`object-fit: fill;`)**: The image is stretched to fill the container box, ignoring original aspect ratios. This results in visual distortion.
- **None (`object-fit: none;`)**: The image is not scaled. Its natural size is preserved, and alignment is determined by `object-position`.

---

## Utility Classes Reference

EaseMotion CSS provides core classes for managing how media blocks scale and align:

### 1. Object Fit Modes (`object-fit`)

| Utility Class        | CSS Equivalent                       | Description                               |
| :------------------- | :----------------------------------- | :---------------------------------------- |
| `.object-cover`      | `object-fit: cover !important;`      | Scales & crops to fill container.         |
| `.object-contain`    | `object-fit: contain !important;`    | Scales to fit inside box (letterbox).     |
| `.object-fill`       | `object-fit: fill !important;`       | Stretches content to match box.           |
| `.object-none`       | `object-fit: none !important;`       | Natural size (no scaling).                |
| `.object-scale-down` | `object-fit: scale-down !important;` | Scales down to fit container, no upscale. |

### 2. Object Positions (`object-position`)

Specifies the alignment of the replaced element's content inside its container box:

- `.object-center` (Default center alignment)
- `.object-top`
- `.object-bottom`
- `.object-left`
- `.object-right`
- `.object-top-left`
- `.object-top-right`
- `.object-bottom-left`
- `.object-bottom-right`

### 3. Aspect Ratio Presets (`aspect-ratio`)

Quick container proportions presets:

- `.aspect-square` (1:1 aspect ratio)
- `.aspect-video` (16:9 widescreen video ratio)
- `.aspect-cinema` (21:9 ultra-widescreen ratio)
- `.aspect-portrait` (4:5 vertical display ratio)

---

## Usage Examples

### 1. Profiles Card List (Object Cover)

Scale avatars to circles without stretching headshots:

```html
<div
  class="avatar-circle"
  style="width: 80px; height: 80px; border-radius: 50%; overflow: hidden;"
>
  <img
    src="user.jpg"
    class="object-cover object-center"
    alt="User Profile Picture"
  />
</div>
```

### 2. Widescreen Hero Banner (Object Cover)

Scale high-resolution backgrounds to span responsive headers:

```html
<div class="hero-wrapper aspect-video" style="overflow: hidden;">
  <img
    src="banner.jpg"
    class="object-cover object-center"
    alt="Campaign Banner"
  />
</div>
```

### 3. Product Catalog Grid (Object Contain)

Display products in a catalog grid box without cutting off product corners:

```html
<div class="product-card">
  <div class="image-frame" style="height: 120px; background-color: #f3f4f6;">
    <img
      src="product.png"
      class="object-contain object-center"
      alt="Product Packshot"
    />
  </div>
  <h4>Wireless Keyboard</h4>
</div>
```

---

## Accessibility (WCAG 2.1) & Best Practices

- **Legible Content Preservation (Success Criterion 1.1.1 - Non-text Content)**: Always supply high-quality `alt="..."` descriptions for all images. When styling brand symbols or client partner logos, avoid using `.object-cover` since cropping the sides of a text-based logo could make it illegible. Always use `.object-contain` for logos to preserve brand integrity.
- **Responsive Flex/Grid Alignment**: Replaced elements with aspect ratio locks should respond cleanly under text zoom. Verify that containers do not overflow viewports on smaller mobile screens.

---

## Verification & Testing

Verify that scaling configurations render correctly by opening `demo.html` in your browser. Select different scaling modes (contain, cover, none) and verify that grids stretch or fit appropriately.

To run project smoke tests, use:

```bash
npm test
```
