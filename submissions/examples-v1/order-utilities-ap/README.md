# EaseMotion CSS — Order Utilities

This directory implements core utility classes for controlling the CSS `order` property in EaseMotion CSS, allowing you to rearrange layout items inside Flexbox or Grid containers.

---

## What is the Order Property?

By default, items inside Flexbox or Grid containers are laid out in the order they appear in the HTML source document. The CSS `order` property allows you to rearrange these elements visually without modifying the underlying HTML structure.

- Items are sorted ascending by their `order` value.
- Items with the same `order` value display in their source document order.
- The default order value for all elements is `0` (or `.order-none`).

---

## Utility Classes Reference

EaseMotion CSS provides keyword, positive, negative, and responsive ordering classes:

### 1. Keyword Focus Order

| Utility Class  | CSS Equivalent             | Description                                             |
| :------------- | :------------------------- | :------------------------------------------------------ |
| `.order-first` | `order: -9999 !important;` | Forces the item to be displayed first in the container. |
| `.order-last`  | `order: 9999 !important;`  | Forces the item to be displayed last in the container.  |
| `.order-none`  | `order: 0 !important;`     | Resets the item to its natural source layout position.  |

### 2. Positive Order scale

Useful for placing elements at specific visual slots:

- `.order-1` to `.order-12` (Sets `order: 1` through `order: 12`)

### 3. Negative Order scale

Useful for shifting elements left or start-wards relative to default items:

- `.order-n1` to `.order-n6` (Sets `order: -1` through `order: -6`)

### 4. Responsive Mobile Breakpoints

Apply order shifts specifically on mobile and tablet screens:

- `.sm-order-first`, `.sm-order-last`, `.sm-order-none`
- `.sm-order-1` through `.sm-order-4` (Mobile views, `max-width: 768px`)
- `.md-order-first`, `.md-order-last`, `.md-order-none`
- `.md-order-1` through `.md-order-2` (Tablet views, `max-width: 1024px`)

---

## Usage Examples

### 1. Mobile-Responsive Content Reordering (Art Direction)

On desktop viewports, display text on the left and an image on the right. When collapsed to mobile screen sizes, stack the image **above** the text using responsive ordering:

```html
<div class="row-container" style="display: flex;">
  <!-- Text is first in DOM, but visually second on mobile -->
  <div class="text-column sm-order-2">
    <h2>Feature Title</h2>
    <p>Detailed description...</p>
  </div>

  <!-- Image is second in DOM, but visually first on mobile -->
  <div class="image-column sm-order-1">
    <img src="graphic.jpg" alt="Feature graphic" />
  </div>
</div>
```

### 2. Pinning Elements in a Flex List (Leaderboard)

Pin a user card to the top of a leaderboard list dynamically:

```html
<div class="leaderboard-list" style="display: flex; flex-direction: column;">
  <div class="user-card">User A (normal)</div>
  <div class="user-card order-first">User B (pinned to top)</div>
  <div class="user-card">User C (normal)</div>
</div>
```

---

## CRITICAL ACCESSIBILITY (WCAG 2.1) WARNING

> [!WARNING]
> The `order` property only changes the **visual representation** of elements. It does **not** change the tab navigation focus order of keyboard users (`Tab` key transitions) or the reading sequence of screen readers.

### Accessibility Rules

1. **Keep Reading Sequence Logical (Success Criterion 1.3.2 - Meaningful Sequence)**: Visually shifting interactive elements (like focusable links or buttons) to a completely different part of the screen while keeping their source code order intact can make keyboard navigation extremely confusing. The focus indicator will jump randomly across the page.
2. **Avoid Focus Mismatch (Success Criterion 2.4.3 - Focus Order)**: Do not use `order` to rearrange links, inputs, or interactive buttons unless the visual layout matches the DOM focus path. Use it primarily for decorative blocks, columns, or layout elements.

---

## Verification & Testing

Verify that visual reordering is functioning correctly by launching `demo.html` in your browser. Changing the dropdown selectors for any box should instantly swap their order inside the flex track.

To run project smoke tests, use:

```bash
npm test
```
