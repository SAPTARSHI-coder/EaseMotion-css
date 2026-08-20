# Magnetic Hover Button

A lightweight magnetic hover interaction where a button subtly follows the
pointer while it is inside the button's bounds.

## What does it do?

The component provides:

- Pointer-following movement.
- Configurable movement strength.
- A maximum movement boundary.
- Smooth return to the original position.
- Keyboard focus support.
- Touch-device compatibility.
- Reduced-motion support.
- No external libraries or assets.

## How do I use it?

Add a button with the `magnetic-button` class:

```html
<button class="magnetic-button" type="button">
  Explore
</button>
```
The movement is controlled through CSS custom properties:

.magnetic-button {
  transform: translate(
    var(--magnetic-x, 0),
    var(--magnetic-y, 0)
  );

  transition: transform 300ms
    cubic-bezier(0.22, 1, 0.36, 1);
}