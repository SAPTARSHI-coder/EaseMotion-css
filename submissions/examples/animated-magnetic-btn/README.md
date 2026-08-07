# ease-magnetic-btn

**Level: Advanced**

A button that shifts toward the cursor as it approaches, springing back to center on mouse leave.

## Usage

```html
<button class="ease-magnetic-btn">Hover me</button>
```

Requires the JS in `demo.html` to track cursor position relative to the button and apply a proportional transform.

## Notes

- The `0.3` multiplier controls pull strength — lower it for a subtler effect.
- `will-change: transform` is set to keep the movement smooth on lower-end devices.

## Browser support

All modern browsers.