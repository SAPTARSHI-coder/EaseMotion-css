# Text Wave Entrance

## What does this do?

It animates letters of a text element sequentially with an elastic upward translation on load to produce a wave entrance effect.

## How is it used?

Wrap each character of your heading or text link in a `<span>` element inside a parent container styled with the `text-wave-entrance-uj` class:

```html
<h2 class="text-wave-entrance-uj">
  <span>W</span>
  <span>e</span>
  <span>l</span>
  <span>c</span>
  <span>o</span>
  <span>m</span>
  <span>e</span>
</h2>
```

The style sheet automatically configures incremental delay rules for up to 15 characters out of the box.

## Why is this useful?

This typography animation adds an eye-catching, high-fidelity micro-interaction to splash headers, hero titles, and branding sections. Running completely via compositor-optimized transformations (`translateY` and `opacity`), it avoids layout calculations or CPU thread locks, and falls back gracefully to standard static text layout when users prefer reduced motion.
