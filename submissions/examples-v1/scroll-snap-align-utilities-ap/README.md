# Scroll-Snap-Align Utilities

## 1. What does this do?

Provides utility classes to control where a slide/item aligns (`none`, `start`, `center`, or `end`) relative to its parent container during scrolling.

---

## 2. Scroll-Snap Scale Specification

Here is the scroll-snap-align mapping used in these utilities:

| Utility Class       | scroll-snap-align Value | Description                                             |
| :------------------ | :---------------------- | :------------------------------------------------------ |
| `snap-align-none`   | `none`                  | Disables snap alignment for this element                |
| `snap-align-start`  | `start`                 | Snaps element to the start edge of the container        |
| `snap-align-center` | `center`                | Snaps element to the center of the container            |
| `snap-align-end`    | `end`                   | Snaps element to the trailing end edge of the container |

---

## 3. How is it used?

Apply the utility classes directly to children within a scroll-snap-enabled parent container:

### Horizontal snap container example (centered snapping)

```html
<!-- Parent Container with snap enabled -->
<div class="snap-container-x">
  <!-- Children specifying snap alignment -->
  <div class="snap-slide snap-align-center">Card 1</div>
  <div class="snap-slide snap-align-center">Card 2</div>
  <div class="snap-slide snap-align-center">Card 3</div>
</div>
```

### Vertical snap container example (start snapping)

```html
<div class="snap-container-y">
  <section class="snap-slide-y snap-align-start">Section 1</section>
  <section class="snap-slide-y snap-align-start">Section 2</section>
  <section class="snap-slide-y snap-align-start">Section 3</section>
</div>
```

---

## 4. Why is it useful?

It aligns with EaseMotion CSS's philosophy of offering visual and layout enhancements natively without relying on JavaScript libraries.

Traditionally, web developers used bulky slider libraries (like Swiper or Slick) that listen to touch events, calculate matrix offsets, and manually update the DOM elements. This causes noticeable scroll stuttering and consumes substantial resources on mobile devices.
By utilizing native CSS `scroll-snap-type` on the container and `scroll-snap-align` on the child elements, the browser handles position snapping at the compositor thread level, guaranteeing buttery smooth 60fps/120fps scrolling and a premium native-app-like user experience.

---

## 5. Layout Design & Best Practices

For scroll snapping to work seamlessly, ensure you specify these critical CSS properties:

1. **Container Snap Definition**: The parent container must have `scroll-snap-type` set (e.g. `x mandatory` or `y mandatory`) and must be scrollable (`overflow-x: auto` or `overflow-y: auto`).
2. **Child Shrink Prevention**: Children of a horizontal flex snap container should have `flex-shrink: 0` to prevent them from compressing to fit inside the parent without overflowing.
3. **Margins & Padding**: Scroll margins (`scroll-margin`) and scroll paddings (`scroll-padding`) can be used to offset the snapping point, keeping items spaced neatly from the container borders.
4. **Touch Snapping Behavior**: `mandatory` strictness forces the browser to snap to a point when scrolling stops, whereas `proximity` only snaps if the scroll position is close to a snap target.

---

## 6. Advanced Customization & Spacing Offsets

Sometimes, standard snapping aligns the card right against the container edge, cutting off decorative borders or drop-shadows. To resolve this, combine snap alignment with `scroll-margin` to create visual padding:

```css
.snap-slide {
  /* Offset the snap alignment by 24px from the left edge */
  scroll-margin-left: 1.5rem;
  /* Offset the snap alignment by 24px from the right edge */
  scroll-margin-right: 1.5rem;
}
```

---

## 7. Keyboard Accessibility (A11y) & Interactive Focus

To ensure your scroll snap widgets are accessible to keyboard and screen reader users:

- Add `tabindex="0"` to each slide so keyboard users can tab through the items sequentially.
- Ensure the browser automatically scrolls the focused item into view (which works natively with standard scroll snap align rules!).
- Use semantic markup (like `<section>` or `<article>`) inside slides for descriptive headings.
- If using control buttons to scroll left/right, ensure they have proper `aria-label` labels.
