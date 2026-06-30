# ease-counter — CSS Counter Utility Classes

## What does this do?

Provides CSS counter utility classes for `counter-reset`, `counter-increment`, and `content: counter()` on `::before`/`::after`. Useful for numbered lists, step indicators, and custom counters.

## How is it used?

```html
<ol class="ease-counter-reset">
  <li class="ease-counter-increment">Step 1</li>
  <li class="ease-counter-increment">Step 2</li>
</ol>
```

### Classes

| Class                     | Property                                              |
| ------------------------- | ----------------------------------------------------- |
| `.ease-counter-reset`     | `counter-reset: ease-counter`                         |
| `.ease-counter-increment` | `counter-increment: ease-counter`                     |
| `.ease-counter-before`    | `content: counter(ease-counter)` + `::before` styling |
| `.ease-counter-none`      | `counter-increment: none` / `counter-reset: none`     |
