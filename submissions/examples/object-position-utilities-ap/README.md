# EaseMotion CSS — Object Position Utilities

This directory implements core utility classes for controlling the CSS `object-position` alignment property in EaseMotion CSS.

---

## What is Object Position?

The `object-position` property is used in conjunction with `object-fit` (usually `cover` or `none`) to align replaced content (like images or videos) inside its container.

By default, the browser centers images (`50% 50%` or `center center`). Using `object-position` allows developers to shift the crop focus to keep the most important subject of the image (like a person's face, a product detail, or a landscape element) visible across responsive aspect ratio shifts.

---

## Utility Classes Reference

EaseMotion CSS provides keyword alignment classes and percentage focal coordinate classes:

### 1. Keyword Focus Alignments

| Utility Class          | CSS Equivalent                              | Description                                         |
| :--------------------- | :------------------------------------------ | :-------------------------------------------------- |
| `.object-center`       | `object-position: center !important;`       | Default center-center focus.                        |
| `.object-top`          | `object-position: top !important;`          | Focuses on the top edge, centering horizontally.    |
| `.object-bottom`       | `object-position: bottom !important;`       | Focuses on the bottom edge, centering horizontally. |
| `.object-left`         | `object-position: left !important;`         | Focuses on the left edge, centering vertically.     |
| `.object-right`        | `object-position: right !important;`        | Focuses on the right edge, centering vertically.    |
| `.object-top-left`     | `object-position: top left !important;`     | Pins focus to the top-left corner.                  |
| `.object-top-right`    | `object-position: top right !important;`    | Pins focus to the top-right corner.                 |
| `.object-bottom-left`  | `object-position: bottom left !important;`  | Pins focus to the bottom-left corner.               |
| `.object-bottom-right` | `object-position: bottom right !important;` | Pins focus to the bottom-right corner.              |

### 2. Percentage Focal Coordinate Scales

Percentage classes allow fine-grained coordinate targeting. They are separated into horizontal (X-axis) and vertical (Y-axis) controls:

#### Horizontal X-Axis Focus

- `.object-left-0` (0% - Left edge)
- `.object-left-10`, `.object-left-20`, `.object-left-30`, `.object-left-40`
- `.object-left-50` (50% - Center X)
- `.object-left-60`, `.object-left-70`, `.object-left-80`, `.object-left-90`
- `.object-left-100` (100% - Right edge)

#### Vertical Y-Axis Focus

- `.object-top-0` (0% - Top edge)
- `.object-top-10`, `.object-top-20`, `.object-top-30`, `.object-top-40`
- `.object-top-50` (50% - Center Y)
- `.object-top-60`, `.object-top-70`, `.object-top-80`, `.object-top-90`
- `.object-top-100` (100% - Bottom edge)

---

## Usage Examples

### 1. Art Direction: Focal Subject Pinning

Ensure a high-altitude hot air balloon on the top-left of a landscape photo is never cropped out when transitioning from desktop widescreen to mobile portrait cards:

```html
<!-- Desktop Widescreen cinema (crops bottom/sides, preserves top-left) -->
<div class="aspect-cinema" style="overflow: hidden;">
  <img
    src="landscape.jpg"
    class="object-cover object-top-left"
    alt="Scenic balloon"
  />
</div>

<!-- Mobile Portrait card (crops right/left, preserves top-left balloon) -->
<div class="aspect-portrait" style="overflow: hidden;">
  <img
    src="landscape.jpg"
    class="object-cover object-top-left"
    alt="Scenic balloon"
  />
</div>
```

### 2. Ken Burns Parallax Zoom Hover Effect

Smoothly pan the camera focus from the bottom to the top of an image when a user hovers over a layout card:

```html
<div class="ken-burns-card" style="height: 200px; overflow: hidden;">
  <img
    src="scenery.jpg"
    class="object-cover object-bottom transition-pan"
    alt="Pan"
  />
</div>

<style>
  .transition-pan {
    transition:
      object-position 3s ease-out,
      transform 3s ease-out;
  }
  .ken-burns-card:hover .transition-pan {
    object-position: top !important;
    transform: scale(1.1);
  }
</style>
```

### 3. Product Spotlight switcher

Focus on different parts of a complex system detailed drawing on thumbnail click:

```html
<!-- Main spotlight box -->
<div class="spotlight-box" style="height: 250px; overflow: hidden;">
  <img
    id="detail-image"
    class="object-cover object-center"
    src="blueprint.jpg"
  />
</div>

<!-- Selector buttons -->
<button
  onclick="document.getElementById('detail-image').className='object-cover object-top-right'"
>
  Lens Spec
</button>
<button
  onclick="document.getElementById('detail-image').className='object-cover object-bottom-left'"
>
  Mount Rig
</button>
```

---

## Accessibility (WCAG 2.1) & Best Practices

- **Focal Subject Visibility (Success Criterion 1.1.1 - Non-text Content)**: When using `object-fit: cover` with responsive aspect ratios, ensure that the image's focal point remains within the viewable container. Cropping out vital information (such as faces or product labels) may make the visual context confusing or render informational graphics useless. Use `object-position` to explicitly focus on vital areas.
- **Provide Text Alternatives**: Always supply proper description titles or alt tags describing what is currently centered in the frame.

---

## Verification & Testing

Verify that focal points shift correctly by launching `demo.html` in your browser. Selecting keyword settings or percentage sliders should move the image coordinates inside the container and place the tracking reticle directly over the target.

To run project smoke tests, use:

```bash
npm test
```
