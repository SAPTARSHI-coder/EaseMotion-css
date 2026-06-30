# ease-focus-out

An exit animation where an element loses focus by blurring out and fading away.

## Preview

The element transitions from sharp and fully visible to completely blurred and transparent, giving the impression it has gone out of focus.

## Usage

Add the class `ease-focus-out` to any element:

```html
<div class="ease-focus-out">Going out of focus...</div>
```

Or trigger it dynamically via JavaScript:

```js
element.classList.add("ease-focus-out");
```

## Animation Details

| Property    | Start      | End          |
| ----------- | ---------- | ------------ |
| `filter`    | `blur(0)`  | `blur(20px)` |
| `opacity`   | `1`        | `0`          |
| `timing`    | `ease-in`  | —            |
| `duration`  | `0.6s`     | —            |
| `fill-mode` | `forwards` | —            |

## Pairing

This animation is the counterpart to `ease-focus-in`, which brings an element into sharp focus on entry.

| Animation        | Direction | Effect               |
| ---------------- | --------- | -------------------- |
| `ease-focus-in`  | Enter     | blur(20px) → blur(0) |
| `ease-focus-out` | Exit      | blur(0) → blur(20px) |

## Files

- `style.css` — keyframe and utility class
- `demo.html` — interactive demonstration
