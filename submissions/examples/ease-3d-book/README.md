# Interactive CSS 3D Book Presentation

Building an interactive, flippable 3D book or magazine on the web typically requires heavy JavaScript libraries (like Turn.js) or complex WebGL rendering engines. These libraries constantly monitor mouse coordinates, calculate mathematical page deformation, and manually update inline CSS properties at 60 frames per second.

This highly advanced submission completely removes the need for JavaScript. It implements a fully functional, hardware-accelerated 3D book relying 100% on **CSS Sibling Combinators, Hidden Radio Inputs, and 3D Perspective Transforms**.

---

## 🏛️ The Architecture

### 1. The 3D Scene Container
To render elements in physical 3D space rather than stacking them flat on the screen, we establish a 3D context on the parent container using the `perspective` property.
```css
.book-container {
    perspective: 2000px;
}
```
We also must instruct the `.book` itself to pass this 3D dimensionality down to its children using `transform-style: preserve-3d`.

### 2. The Page Sheets
Each "Page" in the DOM is actually a physical "Sheet" of paper containing two faces (Front and Back). 
The crucial step is moving the hinge point of the sheet from the center to the left edge:
```css
.page-sheet {
    transform-origin: left center;
}
```
This ensures that when we apply `transform: rotateY(-180deg)`, the page turns along its spine, rather than spinning in the center of the book.

### 3. The Front and Back Faces
Inside each `.page-sheet`, we place two `.page-face` elements. We rotate the back face 180 degrees initially, and apply `backface-visibility: hidden` to both. This ensures that the browser's compositor only renders the side of the paper currently facing the camera.

---

## 🧠 State Management (The Hidden Radio Hack)

Without JavaScript, how does the book know which page is open? We use the legendary **Hidden Radio Button Hack**.

At the top of the DOM, we place a `<input type="radio">` for every possible state of the book (State 1: Cover closed, State 2: Page 2 open, etc.).

Inside the actual book pages, we place `<label for="page-X">` elements mapped to those radio buttons. When a user clicks the right side of the book, they are clicking a label that silently checks the *next* radio button in the DOM.

Using CSS General Sibling Combinators (`~`), we write logic that looks at the state of the radio buttons and transforms the pages accordingly:

```css
/* When State 3 is checked, Sheets 1 and 2 must be turned over! */
#page-3:checked ~ .book .sheet-1,
#page-3:checked ~ .book .sheet-2 {
    transform: rotateY(-180deg);
}
```

### The Z-Index Problem
When a book is closed, Page 1 is on top of the stack (`z-index: 5`). However, when you flip Page 1 over to the left side, it must become the *bottom* of the left stack, so Page 2 can stack on top of it.
Our CSS logic meticulously re-assigns `z-index` properties based on the currently checked radio state to ensure the physical stacking order of the paper remains perfectly realistic at all times.

---

## 🚀 Performance & Accessibility

- **JavaScript Payload:** `0 KB`. State management and matrix transforms are entirely handled by the browser's CSS engine.
- **Hardware Acceleration:** Because we rely solely on `transform: rotateY()` and `opacity`, the browser offloads all rendering directly to the GPU compositor thread, resulting in a flawless 60fps experience even on mobile devices.
- **Accessibility:** For users with vestibular motion sickness, a robust `@media (prefers-reduced-motion: reduce)` block instantly strips out the 1.2s page turning transitions, causing the pages to snap instantly and safely between states.

---

## 💻 Usage

To implement this in your own project, simply copy the HTML structure from `demo.html` and the CSS from `style.css`.
If you wish to add more pages, simply:
1. Add another `<input type="radio">` at the top.
2. Add another `.page-sheet` inside the `.book`.
3. Update the Z-index stack logic in the CSS.
