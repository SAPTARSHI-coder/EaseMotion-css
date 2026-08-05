# :focus-within Card

## What does this do?

Animates a parent card when any child input receives focus using the CSS `:focus-within` pseudo-class — the card scales, glows, and animates its border without JavaScript.

## How is it used?

```css
.card:focus-within {
  scale: 1.02;
  box-shadow: 0 0 0 4px rgba(108, 99, 255, 0.1);
  border-color: #6c63ff;
}
```

## Why is it useful?

Form UX often needs to highlight the active section — especially in multi-field cards or settings panels. `:focus-within` lets the entire container respond to any child focus state, providing clear visual feedback without JS event listeners. This makes forms more accessible and intuitive while keeping markup clean, fitting EaseMotion CSS's philosophy.
