# Scroll-Snap-Type Utilities

## 1. What does this do?

Provides utility classes to configure scroll containers (`none`, `snap-x`, `snap-y`, or `snap-both`) and their strictness (`snap-mandatory` or `snap-proximity`) to snap scrolling elements natively.

---

## 2. Scroll-Snap-Type Parameter Scale

Here are the core container snap classes and modifiers:

| Utility Class | scroll-snap-type Axis | Description                                                     |
| :------------ | :-------------------- | :-------------------------------------------------------------- |
| `snap-none`   | `none`                | Disables scroll snapping entirely on this container             |
| `snap-x`      | `x`                   | Enables scroll snapping along the horizontal axis               |
| `snap-y`      | `y`                   | Enables scroll snapping along the vertical axis                 |
| `snap-both`   | `both`                | Enables scroll snapping along both horizontal and vertical axes |

### Strictness Modifiers:

- `snap-mandatory`: Forces the browser to snap to a point when scrolling stops.
- `snap-proximity`: Snaps only if the scrolling position is very close to a snap coordinate.

---

## 3. How is it used?

Apply the utility classes directly to the scroll container element, along with strictness:

### Horizontal mandatory snap slider

```html
<div class="scroll-container-x snap-x snap-mandatory">
  <!-- Slides must specify scroll-snap-align to work -->
  <div class="scroll-item snap-item-center">Slide 1</div>
  <div class="scroll-item snap-item-center">Slide 2</div>
  <div class="scroll-item snap-item-center">Slide 3</div>
</div>
```

### Vertical proximity snap column

```html
<div class="scroll-container-y snap-y snap-proximity">
  <div class="scroll-item-y snap-item-start">Item 1</div>
  <div class="scroll-item-y snap-item-start">Item 2</div>
  <div class="scroll-item-y snap-item-start">Item 3</div>
</div>
```

---

## 4. Why is it useful?

It aligns with EaseMotion CSS's philosophy of offering visual and layout enhancements natively without relying on JavaScript libraries.

Scroll-snap-type acts on the container level, telling the browser's scrolling engine to listen for touch, trackpad, and mousewheel release gestures. By utilizing native CSS properties, the browser runs snapping routines in the GPU compositor thread. This bypasses the main thread entirely, meaning scrolling stays perfectly fluid even if the page is executing complex scripts or loading data in the background.

---

## 5. Spacing Offset and Chaining Considerations

When designing custom scroll layouts:

1. **Scroll-Chaining Prevention**: If nesting a vertical snap container inside a full-page scroll, you can use `overscroll-behavior-y: contain` to prevent the outer page from scrolling once the inner container reaches its boundaries.
2. **Strictness Choice**:
   - Use `mandatory` for slides, banners, product carousels, or full-viewport pages where users should never see half-cut elements.
   - Use `proximity` for horizontal feed lists, image collections, or gallery sections where you want to allow quick swipe gestures but align items neatly when they slow down.
3. **Scrollbar Customization**: To keep interfaces clean, hide default scrollbars using utility styles like `scrollbar-width: none` (Firefox) and `display: none` for webkit pseudoelement scrollbars.

---

## 6. Keyboard and Screen Reader Accessibility

To ensure your scroll snap widgets are accessible to keyboard and screen reader users:

- Add `tabindex="0"` to each slide so keyboard users can tab through the items sequentially.
- Ensure the browser automatically scrolls the focused item into view (which works natively with standard scroll snap align rules!).
- Use semantic markup (like `<section>` or `<article>`) inside slides for descriptive headings.
- If using control buttons to scroll left/right, ensure they have proper `aria-label` labels.

---

## 7. JavaScript Integration & Programmatic Control

While scroll snapping is purely CSS-driven, you can easily control it or read states programmatically:

- **Scrolling to slides**: Use `element.scrollIntoView({ behavior: 'smooth' })` on a target slide. The browser will automatically scroll the container and apply snapping rules natively.
- **Scroll Indicators / Active Slides**: Listen to the `scroll` event on the container, calculate the visible index using `scrollLeft / clientWidth`, and update your custom pagination indicators accordingly.

---

## 8. Mobile GPU Performance & Optimization

To keep rendering fast on lower-end mobile devices:

- Avoid applying complex `transform` or `filter: blur()` animations on slides during active scrolling.
- Use `will-change: scroll-position` on the container to signal the browser to prepare resources for rapid rendering.
- Keep slide DOM trees shallow and avoid heavy asset loading until slides snap into view (lazy loading).
