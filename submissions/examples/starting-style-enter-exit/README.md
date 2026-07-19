# @starting-style Enter/Exit Animations

## What does this do?

Smoothly animates elements as they enter or leave the DOM using `@starting-style` and `transition-behavior: allow-discrete` — two modern CSS features that solve the long-standing problem of animating `display: none` to `display: block` transitions.

## How is it used?

Toggle the controls in each demo to see elements animate in and out. The CSS pattern is:

```css
.element {
  transition: display 0.3s allow-discrete,
              opacity 0.3s,
              translate 0.3s;
  opacity: 1;
}

.element.hidden {
  display: none;
  opacity: 0;
  translate: 0 -8px;
}

@starting-style {
  .element {
    opacity: 0;
    translate: 0 -8px;
  }
}
```

## Why is it useful?

Before `@starting-style` and `transition-behavior: allow-discrete`, developers had to use JavaScript timers, `requestAnimationFrame` hacks, or complex workarounds (like mounting elements off-screen first) to animate elements entering the DOM. These new CSS primitives make enter/exit animations declarative, accessible, and framework-agnostic — which aligns perfectly with EaseMotion CSS's philosophy of readable, animation-first CSS with zero dependencies.
