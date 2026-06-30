# ease-shake — Form Validation Shake Animation

## What does this do?

Applies a horizontal shake animation to an element — useful for form validation feedback, error states, and attention-grabbing.

## How is it used?

```html
<input class="ease-shake" type="email" placeholder="Enter email" />
```

```js
// Trigger via JS
el.classList.add("ease-shake");
setTimeout(() => el.classList.remove("ease-shake"), 500);
```

### Variants

| Class                  | Description                |
| ---------------------- | -------------------------- |
| `.ease-shake`          | Horizontal shake (default) |
| `.ease-shake-vertical` | Vertical shake             |
| `.ease-shake-subtle`   | Subtle horizontal shake    |
| `.ease-shake-warn`     | Shake with red tint        |
