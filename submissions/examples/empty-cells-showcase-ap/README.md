# EaseMotion CSS — Empty-Cells Showcase

This directory implements core utility classes for controlling the CSS `empty-cells` property in EaseMotion CSS, allowing you to manage the rendering of borders and backgrounds around empty cells in tabular layouts.

---

## What is Empty Cells?

The `empty-cells` property determines whether cells with no visible content should render their borders and backgrounds:

- **show** (Shorthand `.empty-cells-show`): Borders and backgrounds are fully rendered around empty cells (default browser behavior).
- **hide** (Shorthand `.empty-cells-hide`): Borders and backgrounds are completely hidden, leaving empty slots open.

> [!IMPORTANT]
> The `empty-cells` property is only effective when `border-collapse` is set to `separate`. If the table uses `border-collapse: collapse;`, empty-cell styles are merged into adjacent boundaries and the property has no effect.

---

## Utility Classes Reference

EaseMotion CSS provides empty-cells selectors, border-collapse settings, border-spacing coordinates, and responsive breakpoint overrides:

### 1. Empty-Cells Utilities

| Utility Class       | CSS Equivalent                  | Description                                 |
| :------------------ | :------------------------------ | :------------------------------------------ |
| `.empty-cells-show` | `empty-cells: show !important;` | Renders borders/backgrounds on empty cells. |
| `.empty-cells-hide` | `empty-cells: hide !important;` | Hides borders/backgrounds on empty cells.   |

### 2. Border Collapse Utilities

- `.border-collapse` (`border-collapse: collapse !important;`)
- `.border-separate` (`border-collapse: separate !important;`)

### 3. Border Spacing Utilities (Requires separate borders)

Set horizontal/vertical spacing gaps between cell borders:

- Axis-Both: `.border-spacing-0` (0px) to `.border-spacing-16` (64px)
- Horizontal: `.border-spacing-x-0` (0px) to `.border-spacing-x-8` (32px)
- Vertical: `.border-spacing-y-0` (0px) to `.border-spacing-y-8` (32px)

### 4. Responsive Breakpoints

Adjust table rendering modes dynamically on mobile and tablet viewport sizes:

- `.sm-empty-cells-show`, `.sm-empty-cells-hide` (Mobile viewports, `max-width: 768px`).
- `.md-empty-cells-show`, `.md-empty-cells-hide` (Tablet viewports, `max-width: 1024px`).

---

## Usage Examples

### 1. Cleaning up Calendar/Schedule Grids (Hide Empty Cells)

```html
<table class="border-separate border-spacing-1 empty-cells-hide">
  <thead>
    <tr>
      <th>Time</th>
      <th>Monday</th>
      <th>Tuesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10:00 AM</td>
      <td style="background-color: var(--color-bg-surface-hover);">
        Gym Session
      </td>
      <!-- Empty cell borders/background will be hidden cleanly -->
      <td></td>
    </tr>
  </tbody>
</table>
```

### 2. Feature Checklist Matrices (Show Empty Cells)

```html
<table class="border-separate border-spacing-1 empty-cells-show">
  <thead>
    <tr>
      <th>Feature</th>
      <th>Free Plan</th>
      <th>Pro Plan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dashboard Export</td>
      <!-- Empty cell remains visible to maintain tabular row visual structure -->
      <td></td>
      <td>✔</td>
    </tr>
  </tbody>
</table>
```

---

## CRITICAL ACCESSIBILITY (WCAG 2.1) BENEFITS

> [!IMPORTANT]
> Hiding empty cells visually does not alter how screen readers or keyboard navigation interact with the layout cells.

1. **Success Criterion 1.3.1 - Info and Relationships**: Screen readers traverse tables sequentially. Visually hidden empty cells still exist in the DOM structure. Ensure that empty cells have placeholder text (such as "N/A" or "-") or are marked with `aria-hidden="true"` to prevent confusion during keyboard reading flows.
2. **Maintains Tabular Grid References**: Using `.empty-cells-show` in dense checklists preserves grid coordinates, helping users with screen magnifiers track feature items across rows.

---

## Verification & Testing

Verify visual empty-cells behavior by launching `demo.html` in your browser. Toggle the dropdown parameters to observe table grid changes.

To run the project test suite, execute:

```bash
npm test
```
