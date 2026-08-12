# Outline Offset Utilities

An overview and guide for using CSS `outline-offset` utility classes to customize focus rings and outline borders.

## Core Questions

### What does this do?

These utility classes map CSS `outline-offset` values to adjust the space/gap between an element's border edge and its outline ring.

### How is it used?

Apply the utility classes directly to interactive elements (like buttons, links, inputs, or cards) alongside an outline style:

```html
<button class="btn focus-outline outline-offset-2">Click Me</button>
```

### Why is it useful?

It allows developers to refine keyboard focus indicators (`:focus-visible`) directly in the HTML, ensuring highly visible, non-cluttered accessibility focus rings that float neatly outside the element.

---

## Utility Classes

| Class               | CSS Declaration        | Description                                                        |
| :------------------ | :--------------------- | :----------------------------------------------------------------- |
| `.outline-offset-0` | `outline-offset: 0;`   | Outline sits flush against the element's border edge (Default).    |
| `.outline-offset-1` | `outline-offset: 1px;` | Creates a subtle 1px transparent gap outside the element.          |
| `.outline-offset-2` | `outline-offset: 2px;` | Creates a standard 2px transparent gap outside the element.        |
| `.outline-offset-4` | `outline-offset: 4px;` | Creates a wider 4px transparent gap outside the element.           |
| `.outline-offset-8` | `outline-offset: 8px;` | Creates a distinct 8px transparent gap, floating the outline ring. |

---

## Detailed Explanation of `outline-offset`

The `outline-offset` CSS property sets the space between an outline and the edge or border of an element.

- **Outlines vs Borders**: An outline is drawn outside an element's border box. Unlike borders, outlines do **not** take up any space in the layout, so changing an outline's style or offset will never cause adjacent elements to shift or page reflows to occur.
- **Positive vs Negative**: While our utilities focus on positive offsets (pushing the outline outwards), negative values (e.g. `outline-offset: -4px`) can draw the outline _inside_ the element's borders.
- **Visual styling**: The outline-offset gap is transparent, showing the underlying background of the parent element.

---

## Accessibility Notes (WCAG 2.1 Focus Visibility)

Focus visibility is a critical part of web accessibility (WCAG 2.1 Success Criterion 2.4.7). Keyboard-only users and those using assistive technology rely on focus rings to see where focus currently rests.

- **Contrast & Visibility**: Setting a standard offset (like `.outline-offset-2`) helps focus rings stand out clearly, preventing them from blending with border elements.
- **Do Not Remove Outlines**: Never apply `outline: none;` or `outline: 0;` without replacing it with an equivalent or superior focus indicator, as doing so completely breaks accessibility for keyboard navigators.

---

## Usage Examples

### 1. Modern Button Focus Ring (2px Offset)

```html
<button class="btn" style="outline: 2px solid #8b5cf6; outline-offset: 2px;">
  Interactive Button
</button>
```

_Using utilities:_

```html
<button class="btn focus:outline focus:outline-offset-2">
  Interactive Button
</button>
```

### 2. Floating Card Highlight (8px Offset)

Give a dashboard card a floating highlight ring when active:

```html
<div class="card outline-offset-8" style="outline: 2px dashed #06b6d4;">
  <h3>Active Session Card</h3>
</div>
```

---

## Common Use Cases

1. **Interactive Controls Focus**: Adding spacing to focus outlines on form fields, buttons, checkboxes, and anchor links.
2. **Dashboard Grid Selection**: Highlighting currently selected grid items or charts with floating dashed borders.
3. **Circular Avatars**: Creating a floating circle border around profile picture elements on hover or active states.
4. **Media Galleries**: Surrounding photo tiles with a hover ring that sits outside the image frame without causing layout shifting.

---

## Browser Support Notes

CSS `outline-offset` is universally supported by modern web browsers:

- Chrome 15+
- Edge 15+
- Firefox 2+
- Safari 7+
- iOS Safari 7+
- Android Browser 4.4+

_Note: Internet Explorer (IE 11 and older) did not support `outline-offset`. Focus styles on older IE versions fall back to sitting flush against the element's border._
