# Row-Gap Utilities

## 1. What does this do?

Provides a set of standardized utility classes to control the vertical space (`row-gap`) between items in CSS Flexbox and Grid layouts, independent of their horizontal spacing (`column-gap`).

---

## 2. Spacing Scale Specification

Here is the detailed spacing scale used for the row-gap utilities, mapped to their corresponding values:

| Utility Class | row-gap Value (rem / px) | Description                         |
| :------------ | :----------------------- | :---------------------------------- |
| `row-gap-0`   | `0px`                    | Removes all row spacing             |
| `row-gap-1`   | `0.25rem` / `4px`        | Extra small vertical spacing        |
| `row-gap-2`   | `0.5rem` / `8px`         | Small vertical spacing              |
| `row-gap-3`   | `0.75rem` / `12px`       | Medium-small vertical spacing       |
| `row-gap-4`   | `1rem` / `16px`          | Medium/Default vertical spacing     |
| `row-gap-6`   | `1.5rem` / `24px`        | Medium-large vertical spacing       |
| `row-gap-8`   | `2rem` / `32px`          | Large vertical spacing              |
| `row-gap-10`  | `2.5rem` / `40px`        | Extra large vertical spacing        |
| `row-gap-12`  | `3rem` / `48px`          | Double extra large vertical spacing |
| `row-gap-16`  | `4rem` / `64px`          | Maximum vertical spacing scale      |

---

## 3. How is it used?

Apply the utility classes directly to any container that uses `display: flex` (with `flex-direction: column`) or `display: grid`:

### Flexbox vertical list example

```html
<div class="d-flex flex-column row-gap-3">
  <div>Item A</div>
  <div>Item B</div>
  <div>Item C</div>
</div>
```

### Grid layout example with uneven horizontal/vertical gaps

```html
<div class="d-grid cols-3 col-gap-8 row-gap-2">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
  <div>Card 5</div>
  <div>Card 6</div>
</div>
```

---

## 4. Why is it useful?

It aligns with EaseMotion CSS's philosophy of offering granular layout control through direct, human-readable utility classes.

Traditional styling requires using `margin-bottom` or `margin-top` on child items to handle vertical flow. This introduces boilerplate rules and spacing issues on the last or first children (requiring `:last-child { margin-bottom: 0; }` fixes). By using `row-gap` on the container, spacing is:

- Clean and semantic.
- Handled natively by the layout engine.
- Only applied _between_ children, preventing trailing margin issues.
- Separated cleanly from horizontal column-gap controls, enabling highly adaptive responsive grid structures.

---

## 5. Design System Layout Principles

Using standard spacing steps ensures that vertical rhythm is maintained throughout your application. A consistent grid:

1. **Improves Scanability**: Users can digest layouts faster when elements follow a predictable, proportional rhythm.
2. **Establishes Hierarchy**: Larger spacing indicates boundaries between different sections, while smaller spacing groups related elements.
3. **Responsive Control**: Vertical spacing can change dynamically across different breakpoints without breaking the horizontal alignment.
4. **Maintenance**: Developers don't have to specify hardcoded margin values across dozens of component styles.

---

## 6. Real-World Showcases in Demo

Our interactive demo displays row-gap utilities in four real-world interface scenarios:

1. **Vertical Scales**: A side-by-side comparison of different space values.
2. **Timeline Feeds**: Spacing events step-by-step using `.row-gap-6`.
3. **FAQ Accordions**: Laying out toggle elements cleanly with `.row-gap-3`.
4. **Form Inputs**: Gathering input blocks, labels, and textareas via `.row-gap-4`.
5. **Uneven Grid**: Combining a wide horizontal gap and narrow vertical gaps for stat counters.
