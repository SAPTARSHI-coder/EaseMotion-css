# EaseMotion CSS — Mask Image Utilities

This directory implements core utility classes for applying CSS `mask-image` effects in EaseMotion CSS, allowing you to clip any element's content to a custom gradient or vector shape.

---

## What is Mask Image?

The CSS `mask-image` property sets the image that is used as a mask layer for an element.
By default, the browser uses the **alpha channel** of the mask image:

- Fully opaque pixels (alpha = 1) display the element's background/content.
- Fully transparent pixels (alpha = 0) hide the element's background/content.
- Semi-transparent pixels (0 < alpha < 1) blend the element's content into its background.

### Why Vendor Prefixes?

Many mobile and desktop browsers (including Safari/iOS Safari) still require the `-webkit-` vendor prefix to render masking correctly. All utility classes in EaseMotion CSS include both standard `mask-` and `-webkit-mask-` prefixes under the hood to ensure cross-browser compatibility out-of-the-box.

---

## Utility Classes Reference

EaseMotion CSS provides core classes for managing mask images, sizes, repeat modes, and positions:

### 1. Mask Image Sources (`mask-image` / `-webkit-mask-image`)

| Utility Class          | Mask Type        | Description                                                             |
| :--------------------- | :--------------- | :---------------------------------------------------------------------- |
| `.mask-gradient-to-t`  | Linear Gradient  | Fades out towards the top edge.                                         |
| `.mask-gradient-to-b`  | Linear Gradient  | Fades out towards the bottom edge.                                      |
| `.mask-gradient-to-l`  | Linear Gradient  | Fades out towards the left edge.                                        |
| `.mask-gradient-to-r`  | Linear Gradient  | Fades out towards the right edge.                                       |
| `.mask-radial-fade`    | Radial Gradient  | Circular fade from solid center to transparent edges.                   |
| `.mask-radial-ellipse` | Radial Gradient  | Elliptical radial fade out.                                             |
| `.mask-fade-edges-x`   | Complex Gradient | Fades out at both the left and right edges (ideal for scrolling lists). |
| `.mask-fade-edges-y`   | Complex Gradient | Fades out at both the top and bottom edges.                             |
| `.mask-shape-star`     | Inline SVG Shape | Clips the element to a standard 5-point star shape.                     |
| `.mask-shape-heart`    | Inline SVG Shape | Clips the element to a standard heart shape.                            |
| `.mask-shape-hexagon`  | Inline SVG Shape | Clips the element to a standard hexagon polygon shape.                  |
| `.mask-shape-bubble`   | Inline SVG Shape | Clips the element to a speech bubble pointer shape.                     |
| `.mask-shape-badge`    | Inline SVG Shape | Clips the element to a shield/badge vector shape.                       |

### 2. Mask Sizes (`mask-size` / `-webkit-mask-size`)

| Utility Class        | CSS Equivalent | Description                                              |
| :------------------- | :------------- | :------------------------------------------------------- |
| `.mask-size-cover`   | `cover`        | Resizes the mask to completely cover the container.      |
| `.mask-size-contain` | `contain`      | Resizes the mask to fit the container without cropping.  |
| `.mask-size-100`     | `100% 100%`    | Stretches the mask to match element bounds.              |
| `.mask-size-75`      | `75%`          | Scales the mask size to 75%.                             |
| `.mask-size-50`      | `50%`          | Scales the mask size to 50% (ideal for repeating grids). |

### 3. Mask Repeat Modes (`mask-repeat` / `-webkit-mask-repeat`)

- `.mask-no-repeat`
- `.mask-repeat`
- `.mask-repeat-x`
- `.mask-repeat-y`

### 4. Mask Positions (`mask-position` / `-webkit-mask-position`)

- `.mask-pos-center`
- `.mask-pos-top`, `.mask-pos-bottom`
- `.mask-pos-left`, `.mask-pos-right`
- `.mask-pos-top-left`, `.mask-pos-top-right`
- `.mask-pos-bottom-left`, `.mask-pos-bottom-right`

---

## Usage Examples

### 1. Hero Image Fade to Background

Creating a banner image that fades to transparency at the bottom, blending into a dark page design:

```html
<div class="banner-wrapper" style="background-color: #030712;">
  <img
    src="banner.jpg"
    class="mask-gradient-to-b mask-size-cover mask-no-repeat"
  />
</div>
```

### 2. Shaped Profile Avatar

Clip profile blocks into standard hexagon frames:

```html
<div
  class="avatar-frame mask-shape-hexagon mask-size-cover mask-no-repeat mask-pos-center"
>
  <img src="profile.jpg" alt="Profile avatar" />
</div>
```

### 3. Scrollable List with Faded Edges

Let users know there are more scrollable items by fading out container boundaries:

```html
<div class="scroll-wrapper mask-fade-edges-x mask-size-cover mask-no-repeat">
  <div class="scroll-track" style="display: flex; overflow-x: auto;">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
  </div>
</div>
```

---

## Accessibility (WCAG 2.1) & Best Practices

- **Ensure Proper Text Contrast (Success Criterion 1.4.3)**: If you apply a mask gradient to a container with text overlay (such as a hero banner), ensure the gradient fade does not reduce text contrast below the required minimum ratio (4.5:1 for normal text, 3:1 for large text) against the background. Make sure the text is placed in a region of the mask that retains high opacity, or add a solid text shadow.
- **Maintain Focus Visibility (Success Criterion 2.4.7)**: Avoid masking interactive elements (like buttons or links) on their focus outline edges. Ensure focus ring indicators remain fully visible to keyboard navigation users.

---

## Verification & Testing

Verify that mask layers display correctly by opening `demo.html` in your browser. All linear gradients, radial fades, and vector shape selectors should render cleanly in chrome, safari, and firefox.

To run project smoke tests, use:

```bash
npm test
```
