# Ease Smooth Dialog (`ease-smooth-dialog`)

A pure CSS solution for animating the native HTML `<dialog>` element into and out of view smoothly during open and close transitions.

---

### 1. What does this do?
It natively animates a DOM element from discrete display states (e.g. `display: none` to `display: block` / top layer) upon opening, and back to `display: none` upon closing. By leveraging `@starting-style` and `allow-discrete` transitions, CSS can smoothly interpolate discrete properties like `display` and `overlay` alongside visual properties like `opacity` and `transform`.

---

### 2. How is it used?

Combine `transition-behavior: allow-discrete` (or the shorthand `allow-discrete` in `transition`) with `@starting-style` to define initial entry states:

```css
.ease-smooth-dialog {
  /* Exit state / Closed */
  opacity: 0;
  transform: scale(0.95) translateY(10px);
  transition: 
    display 0.4s allow-discrete, 
    overlay 0.4s allow-discrete, 
    opacity 0.4s ease-out, 
    transform 0.4s ease-out;
}

/* Open State */
.ease-smooth-dialog[open] {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Entry State */
@starting-style {
  .ease-smooth-dialog[open] {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
}

/* Backdrop Entry and Exit */
.ease-smooth-dialog::backdrop {
  background: rgba(15, 23, 42, 0.7);
  opacity: 0;
  transition: display 0.4s allow-discrete, overlay 0.4s allow-discrete, opacity 0.4s ease-out;
  backdrop-filter: blur(4px);
}

.ease-smooth-dialog[open]::backdrop {
  opacity: 1;
}

@starting-style {
  .ease-smooth-dialog[open]::backdrop {
    opacity: 0;
  }
}
```

---

### 3. Why is it useful?
It permanently eliminates the need for JavaScript `requestAnimationFrame` hacks, `setTimeout` delays, or third-party animation libraries just to fade in or fade out a modal. The native `<dialog>` element can now be opened with `.showModal()` and closed with `.close()`, while CSS seamlessly handles both the entry and exit transition cycles completely declaratively.
