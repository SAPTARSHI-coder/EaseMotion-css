# Newsletter Signup

### What does this do?

It shows an inline newsletter signup with an email field and a subscribe button joined as one pill. The button sits flush with the input, the control shows a focus ring when the field is focused, and it stacks vertically on narrow screens.

### How is it used?

```html
<form class="subscribe">
  <input type="email" placeholder="you@example.com" aria-label="Email address" />
  <button type="submit">Subscribe</button>
</form>
```

The `:focus-within` selector lights up the whole pill when the input is focused. Below 420px the input and button stack.

### Why is it useful?

Newsletter capture forms sit in footers and hero sections everywhere. This joins an input and a button into a single clean control with a focus state and a responsive stack, using only CSS. The transitions are removed under reduced motion.
