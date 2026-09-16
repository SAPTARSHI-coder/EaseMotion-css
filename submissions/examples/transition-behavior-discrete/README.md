# transition-behavior: allow-discrete Demo

## What does this do?

Demonstrates how `transition-behavior: allow-discrete` enables smooth animations on properties that are normally not animatable, such as `display` and `overlay`. Combined with `@starting-style`, it provides seamless entry and exit transitions for popovers and dialogs.

## How is it used?

```css
.element {
  transition: opacity 0.3s, display 0.3s allow-discrete;
}

.element:popover-open {
  opacity: 1;
}

@starting-style {
  .element:popover-open {
    opacity: 0;
  }
}
```

## Why is it useful?

Before `allow-discrete`, entry/exit animations for popovers and dialogs required JavaScript workarounds. Now you can animate elements as they enter or leave the DOM, creating polished UX patterns — such as modals that fade in and slide up — completely in CSS.
