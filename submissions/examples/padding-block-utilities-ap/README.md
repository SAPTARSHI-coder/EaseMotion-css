# EaseMotion CSS — Padding Block Utilities

This directory implements core utility classes for controlling the CSS `padding-block` logical properties in EaseMotion CSS, allowing you to manage flow-relative vertical/horizontal block spacing that adapts dynamically to multi-directional text layouts.

---

## What is Padding Block?

In traditional physical CSS, spacing is configured using directional values relative to the screen (e.g. `padding-top` and `padding-bottom`).

CSS Logical Properties introduce flow-relative spacing. The `padding-block` property applies padding along the block axis (which corresponds to top/bottom in standard horizontal reading modes, but shifts to left/right in vertical modes such as Japanese poetry or vertical menus):

- **`padding-block`** (Shorthand `.p-block-*`): Sets both block-start and block-end padding.
- **`padding-block-start`** (Shorthand `.p-block-s-*`): Sets the padding on the starting side of the block flow (top in horizontal-tb, right in vertical-rl, left in vertical-lr).
- **`padding-block-end`** (Shorthand `.p-block-e-*`): Sets the padding on the ending side of the block flow (bottom in horizontal-tb, left in vertical-rl, right in vertical-lr).

---

## Utility Classes Reference

EaseMotion CSS provides shorthand and long-form logical padding classes, start/end components, and responsive breakpoint modifiers:

### 1. Axis-Both Block Padding

| Shorthand Class | Long-form Class     | Spacing Equivalent | Description             |
| :-------------- | :------------------ | :----------------- | :---------------------- |
| `.p-block-0`    | `.padding-block-0`  | `0rem` (0px)       | Removes block padding.  |
| `.p-block-1`    | `.padding-block-1`  | `0.25rem` (4px)    | Space-1 block padding.  |
| `.p-block-2`    | `.padding-block-2`  | `0.5rem` (8px)     | Space-2 block padding.  |
| `.p-block-3`    | `.padding-block-3`  | `0.75rem` (12px)   | Space-3 block padding.  |
| `.p-block-4`    | `.padding-block-4`  | `1rem` (16px)      | Space-4 block padding.  |
| `.p-block-5`    | `.padding-block-5`  | `1.25rem` (20px)   | Space-5 block padding.  |
| `.p-block-6`    | `.padding-block-6`  | `1.5rem` (24px)    | Space-6 block padding.  |
| `.p-block-8`    | `.padding-block-8`  | `2rem` (32px)      | Space-8 block padding.  |
| `.p-block-10`   | `.padding-block-10` | `2.5rem` (40px)    | Space-10 block padding. |
| `.p-block-12`   | `.padding-block-12` | `3rem` (48px)      | Space-12 block padding. |
| `.p-block-16`   | `.padding-block-16` | `4rem` (64px)      | Space-16 block padding. |

### 2. Start-Side Block Padding

- Shorthand: `.p-block-s-0` to `.p-block-s-16`
- Long-form: `.padding-block-start-0` to `.padding-block-start-16`

### 3. End-Side Block Padding

- Shorthand: `.p-block-e-0` to `.p-block-e-16`
- Long-form: `.padding-block-end-0` to `.padding-block-end-16`

### 4. Responsive Breakpoints

Adjust block padding dynamically on mobile and tablet viewport sizes:

- Shorthand: `.sm-p-block-0` through `.sm-p-block-8` (Mobile viewports, `max-width: 768px`).
- Shorthand: `.md-p-block-0` through `.md-p-block-8` (Tablet viewports, `max-width: 1024px`).

---

## Usage Examples

### 1. Multi-directional Card Component (Japanese Poetry / English Paragraph)

The exact same markup code renders with appropriate block-axis spacing in both languages, even though Japanese runs vertically and English runs horizontally:

```html
<!-- English Viewport (horizontal flow) -->
<div class="card p-block-4" style="writing-mode: horizontal-tb;">
  <p>Padding is applied to the top and bottom edges.</p>
</div>

<!-- Japanese Viewport (vertical flow) -->
<div class="card p-block-4" style="writing-mode: vertical-rl;">
  <p>パディングは自動的に左右の端に適用されます。</p>
</div>
```

### 2. Editorial Staggered Blockquote (Asymmetric spacing)

```html
<div
  class="quote-box p-block-s-8 p-block-e-4"
  style="border-inline-start: 4px solid var(--color-accent-violet);"
>
  <blockquote>
    "Logical properties automatically rotate spacing grids to match domestic
    read coordinates."
  </blockquote>
</div>
```

---

## CRITICAL ACCESSIBILITY (WCAG 2.1) BENEFITS

> [!IMPORTANT]
> Spacing that fails to adapt to text rotation (writing-mode) results in compressed text lines, overlapping layout cells, and clipped content, violating basic WCAG accessibility criteria.

1. **Success Criterion 1.4.10 - Reflow**: Applying flow-relative `.p-block-*` padding ensures that when layouts rotate or scale to fit narrow mobile viewports, the block-axis padding adjusts dynamically, preventing text clipping.
2. **Success Criterion 1.3.2 - Meaningful Sequence**: For vertical writing modes (e.g. Japanese vertical-rl), the reading direction proceeds from right to left in vertical columns. Padding block start/end positions correspond to column limits rather than physical display top/bottom edges, aligning block boundaries with domestic reading sequences.

---

## Verification & Testing

Verify visual block padding behavior by launching `demo.html` in your browser. Switch writing mode and direction dropdowns to observe physical shifts.

To run the project test suite, execute:

```bash
npm test
```
