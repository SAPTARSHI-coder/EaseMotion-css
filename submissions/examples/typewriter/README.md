# ease-typewriter

A CSS-only typewriter text reveal animation for EaseMotion CSS.

## What it does

Reveals text character by character using the CSS `steps()` timing function, `overflow: hidden`, and `width` animation — no JavaScript required. An optional blinking cursor is added via a `::after`-style `border-right` animation.

## Classes

| Class | Effect |
|---|---|
| `.typewriter` | Typing reveal only |
| `.typewriter-cursor` | Typing reveal + blinking `|` cursor |

## Customization

Control the typing speed with a CSS variable:

```css
/* Default is 3s */
--ease-typewriter-speed: 2s;
```

## HTML Usage

```html
<!-- Basic -->
<h1 class="typewriter">Building backends has never been easier.</h1>

<!-- With cursor -->
<h1 class="typewriter-cursor">Hello, World!</h1>

<!-- Custom speed inline -->
<h1 class="typewriter-cursor" style="--ease-typewriter-speed: 1.5s;">Fast!</h1>
```

## Notes

- The element must be `display: inline-block` or `block` (set automatically by the class)
- `white-space: nowrap` is required and already set in the class
- Works alongside existing EaseMotion utilities like `ease-delay-*` and `ease-fade-in`

## Related Issue

[#3010](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/3010)