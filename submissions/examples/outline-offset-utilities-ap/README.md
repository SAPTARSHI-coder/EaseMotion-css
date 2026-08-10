# EaseMotion CSS — Outline Offset Utilities

This directory implements core utility classes for controlling the CSS `outline-offset` property in EaseMotion CSS, allowing you to manage the visual spacing between an element's outer border and its outline.

---

## What is Outline Offset?

By default, an element's `outline` is drawn immediately outside its border edge (equivalent to an outline offset of `0`). The CSS `outline-offset` property adjusts this distance:

- **Positive Offsets** (e.g. `outline-offset-4`): Move the outline **outward** from the element, creating empty space between the border and the outline. Very useful for clear, visible focus rings.
- **Negative Offsets** (e.g. `outline-offset-n4`): Move the outline **inward** (inset) so that it is drawn inside the element's visual bounds. Excellent for artistic inner frames and card decorations.

---

## Utility Classes Reference

EaseMotion CSS provides keyword, positive, negative, and responsive outline offset classes:

### 1. Positive Offset Scale (Outward)

Moves the outline away from the border edge:

| Utility Class        | CSS Equivalent                     | Description                               |
| :------------------- | :--------------------------------- | :---------------------------------------- |
| `.outline-offset-0`  | `outline-offset: 0px !important;`  | No gap between outline and border.        |
| `.outline-offset-1`  | `outline-offset: 1px !important;`  | 1px gap.                                  |
| `.outline-offset-2`  | `outline-offset: 2px !important;`  | Standard 2px gap (Recommended for focus). |
| `.outline-offset-3`  | `outline-offset: 3px !important;`  | 3px gap.                                  |
| `.outline-offset-4`  | `outline-offset: 4px !important;`  | 4px gap.                                  |
| `.outline-offset-5`  | `outline-offset: 5px !important;`  | 5px gap.                                  |
| `.outline-offset-6`  | `outline-offset: 6px !important;`  | 6px gap.                                  |
| `.outline-offset-8`  | `outline-offset: 8px !important;`  | 8px gap.                                  |
| `.outline-offset-10` | `outline-offset: 10px !important;` | 10px gap.                                 |
| `.outline-offset-12` | `outline-offset: 12px !important;` | 12px gap.                                 |
| `.outline-offset-16` | `outline-offset: 16px !important;` | 16px gap.                                 |
| `.outline-offset-20` | `outline-offset: 20px !important;` | 20px gap.                                 |
| `.outline-offset-24` | `outline-offset: 24px !important;` | 24px gap.                                 |

### 2. Negative Offset Scale (Inset)

Draws the outline inside the element's container:

| Utility Class         | CSS Equivalent                      | Description                          |
| :-------------------- | :---------------------------------- | :----------------------------------- |
| `.outline-offset-n1`  | `outline-offset: -1px !important;`  | Draws outline 1px inside the border. |
| `.outline-offset-n2`  | `outline-offset: -2px !important;`  | Draws outline 2px inside.            |
| `.outline-offset-n3`  | `outline-offset: -3px !important;`  | Draws outline 3px inside.            |
| `.outline-offset-n4`  | `outline-offset: -4px !important;`  | Draws outline 4px inside.            |
| `.outline-offset-n5`  | `outline-offset: -5px !important;`  | Draws outline 5px inside.            |
| `.outline-offset-n6`  | `outline-offset: -6px !important;`  | Draws outline 6px inside.            |
| `.outline-offset-n8`  | `outline-offset: -8px !important;`  | Draws outline 8px inside.            |
| `.outline-offset-n10` | `outline-offset: -10px !important;` | Draws outline 10px inside.           |
| `.outline-offset-n12` | `outline-offset: -12px !important;` | Draws outline 12px inside.           |
| `.outline-offset-n16` | `outline-offset: -16px !important;` | Draws outline 16px inside.           |
| `.outline-offset-n20` | `outline-offset: -20px !important;` | Draws outline 20px inside.           |
| `.outline-offset-n24` | `outline-offset: -24px !important;` | Draws outline 24px inside.           |

### 3. Responsive Breakpoints

Adjust spacing dynamically across different screen sizes:

- `.sm-outline-offset-0` through `.sm-outline-offset-8` (and `.sm-outline-offset-n2`, `.sm-outline-offset-n4`) on mobile viewports (`max-width: 768px`).
- `.md-outline-offset-0` through `.md-outline-offset-8` (and `.md-outline-offset-n2`, `.md-outline-offset-n4`) on tablet viewports (`max-width: 1024px`).

### 4. Interactive State Modifiers

Fine-tune animations and responsive transitions during user interactions:

- **Hover**: `.hover-outline-offset-0` to `.hover-outline-offset-12`, and inset `.hover-outline-offset-n2` to `.hover-outline-offset-n12`.
- **Focus**: `.focus-outline-offset-0` to `.focus-outline-offset-8`, and `.focus-outline-offset-n2` to `.focus-outline-offset-n4`.
- **Active**: `.active-outline-offset-0` to `.active-outline-offset-4`, and `.active-outline-offset-n2`.

---

## Usage Examples

### 1. Custom Focus Visible Indicator (WCAG AAA Compliance)

```html
<!-- Enhanced outset focus indicators -->
<input
  type="text"
  class="input-field outline-solid outline-2 outline-accent-violet outline-offset-4 focus-outline-offset-4"
  placeholder="Focus to see indicator offset outward..."
/>
```

### 2. Inset Photo Frame Decoration

```html
<!-- Draws a white border 12px inside the card -->
<div
  class="photo-card outline-solid outline-1 outline-text-primary outline-offset-n12"
>
  <img src="landscape.jpg" alt="Nature photo" />
  <div class="card-caption">Inner Border Frame</div>
</div>
```

### 3. Staggered/Layered Vintage Border Design

```html
<!-- Outer dashed outline offset 4px away from solid border -->
<div
  class="vintage-badge outline-dashed outline-1 outline-accent-amber outline-offset-4"
  style="border: 4px solid var(--color-accent-amber);"
>
  CERTIFICATE
</div>
```

### 4. Expanding Focus Ring Animation (Micro-interaction)

```html
<!-- Smoothly expands outline-offset from 0px to 8px on hover -->
<button
  class="pulsing-button outline-solid outline-2 outline-accent-violet outline-offset-0 hover-outline-offset-8"
>
  Hover or Focus Me
</button>
```

---

## CRITICAL ACCESSIBILITY (WCAG 2.1) BENEFITS

> [!IMPORTANT]
> Correctly offset outlines are essential for a robust digital accessibility strategy.

1. **Avoids Border Clipping (Success Criterion 2.4.7 - Focus Visible)**: Standard browser focus outlines can merge with an element's border radius or be clipped by parent elements with `overflow: hidden`. Setting `outline-offset: 4px` ensures the focus indicator remains fully detached, unbroken, and visible.
2. **Preserved in High Contrast Mode**: Outlines are fully rendered in OS-level Contrast Themes (like Windows High Contrast Mode). Focus indicators built using `box-shadow` or background color gradients are stripped entirely in contrast mode, making outlines the superior choice.
3. **Contrast Compliance (Success Criterion 1.4.11 - Non-Text Contrast)**: An outline offset allows you to create space between the element and the outline, ensuring the focus indicator is contrast-compliant against the background rather than blending in with the element's edge colors.

---

## Verification & Testing

Verify visual offset behavior by launching `demo.html` in your browser. Changing the dropdown settings should instantly update the visual box and generate the corresponding helper code classes.

To run the project test suite, execute:

```bash
npm test
```
