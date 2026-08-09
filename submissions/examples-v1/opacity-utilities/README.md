# Opacity Utilities

An overview and guide for using CSS `opacity` utility classes to control element transparency levels.

## Core Questions

### What does this do?

These utility classes map CSS `opacity` properties to control the transparency levels of elements from 0% (fully transparent) to 100% (fully opaque) in 10% steps.

### How is it used?

Apply the utility classes directly to any HTML element (such as buttons, cards, text, images, or overlays) to change its transparency:

```html
<button class="btn opacity-70">Secondary Action</button>
```

### Why is it useful?

It allows builders to create subtle visual hierarchy, secondary text states, transparent backdrop overlays, and disabled user-interface states directly in the markup, without needing custom CSS color definitions or separate classes.

---

## Utility Classes

| Class          | CSS Declaration | Description                                                     |
| :------------- | :-------------- | :-------------------------------------------------------------- |
| `.opacity-0`   | `opacity: 0;`   | Fully transparent (hidden from view but takes up layout space). |
| `.opacity-10`  | `opacity: 0.1;` | 10% opaque / 90% transparent.                                   |
| `.opacity-20`  | `opacity: 0.2;` | 20% opaque / 80% transparent.                                   |
| `.opacity-30`  | `opacity: 0.3;` | 30% opaque / 70% transparent.                                   |
| `.opacity-40`  | `opacity: 0.4;` | 40% opaque / 60% transparent.                                   |
| `.opacity-50`  | `opacity: 0.5;` | 50% opaque / 50% transparent.                                   |
| `.opacity-60`  | `opacity: 0.6;` | 60% opaque / 40% transparent.                                   |
| `.opacity-70`  | `opacity: 0.7;` | 70% opaque / 30% transparent.                                   |
| `.opacity-80`  | `opacity: 0.8;` | 80% opaque / 20% transparent.                                   |
| `.opacity-90`  | `opacity: 0.9;` | 90% opaque / 10% transparent.                                   |
| `.opacity-100` | `opacity: 1;`   | Fully opaque / 0% transparent (Default).                        |

---

## Detailed Explanation of Opacity

The `opacity` property specifies the transparency of an element.

- **Inheritance**: When you apply opacity to an element, all of its child elements inherit the same transparency. To apply transparency only to the background of an element, you should use RGBA or HSLA background colors (e.g., `background: rgba(0, 0, 0, 0.5)`) instead of the `opacity` property.
- **Layout & Interaction**: Elements with `opacity: 0` are visually invisible but still exist in the DOM, occupy space in the document layout, and can trigger click events unless styled with `pointer-events: none` or hidden via `visibility: hidden`/`display: none`.
- **Hardware Acceleration**: Browsers can easily optimize transitions or animations on `opacity` using GPU compositing, which makes opacity-based fade-in/fade-out animations extremely smooth.

---

## Usage Examples

### 1. Disabled Button State

```html
<button class="btn-primary opacity-40" disabled style="cursor: not-allowed;">
  Submit Form
</button>
```

### 2. Backdrop Overlay

Add a semi-transparent dark tint on top of background media:

```html
<div class="hero-wrapper" style="position: relative;">
  <img src="banner.jpg" alt="Banner" style="width: 100%;" />
  <div
    class="backdrop opacity-50"
    style="position: absolute; inset: 0; background: black;"
  ></div>
  <div class="hero-content" style="position: absolute; z-index: 1;">
    <h1>Welcoming Title</h1>
  </div>
</div>
```

### 3. Readability Hierarchy

Establish primary, secondary, and tertiary hierarchy on text blocks:

```html
<article>
  <h2 class="opacity-100">Main Title Heading</h2>
  <p class="opacity-70">Main article content showing descriptive text.</p>
  <span class="opacity-50">Posted on October 24, 2026</span>
</article>
```

---

## Common Use Cases

1. **Disabled UI Controls**: Dimming buttons, inputs, or checkmarks when they cannot be interacted with.
2. **Text Hierarchy / Contrast Control**: Creating light secondary text or muted metadata without changing color values.
3. **Hover & Focus Transitions**: Fading elements (such as secondary buttons, gallery zoom indicators, or close icons) from a lower opacity (e.g., `.opacity-70`) to fully opaque (`.opacity-100`) on hover.
4. **Watermarks / Overlay Seals**: Placing branding watermarks, gird lines, or grid backdrops on dashboards.
5. **Loading Skeletons**: Applying pulsing animations with varying opacities (e.g., oscillating between `.opacity-40` and `.opacity-80`) to represent skeleton content cards while data fetches.

---

## Browser Support Notes

CSS `opacity` is supported by all modern desktop and mobile browsers, including:

- Chrome 4+
- Edge 12+
- Firefox 2+
- Safari 3.1+
- Opera 9+
- iOS Safari & Android Browser (All versions)

_For historical Internet Explorer support (IE 8 and older), the proprietary filter property was used (`filter: alpha(opacity=X)`), which is completely deprecated and no longer needed in modern web development._
