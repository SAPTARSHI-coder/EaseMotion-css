# CSS Mind Map Component

A pure-CSS implementation of a horizontal branching mind map (tree diagram). It automatically draws perfectly aligned connecting lines between parent and child nodes using only HTML lists and CSS pseudo-elements, completely eliminating the need for SVG drawing or JavaScript coordinate calculation.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides a robust framework for rendering hierarchical data. You define your data using standard nested HTML unordered lists (`<ul>` and `<li>`). The CSS Flexbox engine automatically handles the vertical alignment of the branches, while `::before` and `::after` pseudo-elements dynamically draw the horizontal and vertical connecting lines that link the nodes together.

### 2. How is it used?

The structure is a classic nested list. The `<ul>` elements act as columns, and the `<li>` elements act as rows.

```html
<ul class="mindmap">
  <li>
    <div class="node central-node">Root Node</div>
    <ul>
      <li>
        <div class="node branch-node">Child A</div>
        <ul>
          <li><div class="node leaf">Grandchild A1</div></li>
        </ul>
      </li>
      <li>
        <div class="node branch-node leaf">Child B</div>
      </li>
    </ul>
  </li>
</ul>
```

**The Connecting Line Engine:**
The magic happens by manipulating the borders of the `<li>` pseudo-elements. 

- The **Parent Node** (`.node:not(.leaf)::after`) draws a horizontal line pushing out to the right.
- The **Child Row** (`li::before`) draws a horizontal line pushing out to the left to meet the parent's line.
- The **Child Row Stem** (`li::after`) draws a vertical line connecting siblings.

To prevent the vertical stem from extending too far, CSS pseudo-classes are used to clip it:
```css
/* Middle siblings get full height stems */
.mindmap ul li:not(:first-child):not(:last-child)::after { top: 0; bottom: 0; }

/* First child stem starts at the middle and goes down */
.mindmap ul li:first-child::after { top: 50%; bottom: 0; }

/* Last child stem starts at the top and ends at the middle */
.mindmap ul li:last-child::after { top: 0; bottom: 50%; }
```

### 3. Why is it useful?

Drawing hierarchical tree diagrams typically requires heavy visualization libraries like D3.js or manual SVG `<path>` manipulation that breaks whenever the data or text size changes. 

By tying the connecting lines directly to the DOM elements using CSS pseudo-elements and Flexbox, the lines are mathematically guaranteed to align perfectly with the centers of the nodes, regardless of how much text is inside them or how the browser window is resized. It's infinitely scalable, highly performant, accessible to screen readers natively, and requires zero JavaScript.
