# Piggy Bank

### What does this do?

It shows a pink piggy bank with a snout, ear, eye, curly tail, legs, and a coin slot on its back. A gold coin drops in and disappears through the slot on a loop. Under reduced motion the coin is hidden.

### How is it used?

```html
<div class="piggy">
  <span class="body"></span>
  <span class="snout"></span>
  <span class="slot"></span>
</div>
<span class="coin"></span>
```

The body and snout are radial gradient ovals, the ear and tail are made from borders, and the slot is a tilted bar. The `coin` animates down with `drop` and shrinks as it enters the slot.

### Why is it useful?

Savings, finance, and reward features use a piggy bank. This builds one with a dropping coin using pure CSS shapes and animation, no images, with a reduced motion fallback.
