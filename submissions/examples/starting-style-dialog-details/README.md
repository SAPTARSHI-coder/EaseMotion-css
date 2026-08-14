# `@starting-style` Dialog and Details Animation

## What does this do?

Demonstrates the three-ingredient recipe required to animate elements transitioning to and from `display: none` natively in CSS:
1. `@starting-style` to define the initial state.
2. `transition: display allow-discrete` to keep the element painted while animating out.
3. `transition: overlay allow-discrete` (for top-layer elements like `<dialog>`).

## How is it used?

```css
/* 1. Define the normal open state */
details[open] .faq-body {
  opacity: 1;
  translate: 0 0;
}

/* 2. Define the starting state (when opening) */
@starting-style {
  details[open] .faq-body {
    opacity: 0;
    translate: 0 -8px;
  }
}

/* 3. Define the closed state and the transition with allow-discrete */
.faq-body {
  opacity: 0;
  translate: 0 -8px;
  transition: opacity 0.3s ease, 
              translate 0.3s ease, 
              display 0.3s allow-discrete;
}
```

## Why is it useful?

Historically, animating elements in and out of the DOM (or `display: none`) required complex JavaScript to wait for the animation to finish before removing the element, or hacky workarounds like animating `max-height: 1000px`. `@starting-style` allows pure CSS entry/exit animations for natively toggled elements. This submission provides two practical templates: a `<dialog>` with a backdrop fade, and a pure HTML `<details>` accordion — a pattern that previously had no clean CSS-only animation solution. Chrome 117+, Firefox (in development), Safari 17.5+.
