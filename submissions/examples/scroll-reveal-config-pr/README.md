# Scroll Reveal Configurations

This submission introduces custom options for the scroll-reveal animation controller (`reveal.js`) to allow per-element delay, visibility threshold, and repeat animation settings using standard HTML5 `data-*` attributes.

## New Attributes

| Attribute               | Type              | Default | Description                                                                                             |
| :---------------------- | :---------------- | :------ | :------------------------------------------------------------------------------------------------------ |
| `data-reveal-delay`     | Integer (ms)      | `0`     | Delay in milliseconds before triggering the animation.                                                  |
| `data-reveal-threshold` | Float (0.0 - 1.0) | `0.15`  | The visibility percentage of the element required in the viewport to fire the transition.               |
| `data-reveal-once`      | Boolean           | `true`  | When `false`, the reveal animation resets when scrolled out of view and re-triggers when scrolled back. |

## The Code implementation

To support this without overloading the browser with multiple observers, a single `IntersectionObserver` is configured with multiple ratio bounds (`[0.0, 0.05, 0.1, ..., 1.0]`).
As elements cross these threshold lines, the script checks if they match the element's custom `data-reveal-threshold`.

### Trigger Example:

```html
<div
  class="ease-reveal ease-slide-up"
  data-reveal-delay="400"
  data-reveal-threshold="0.5"
  data-reveal-once="false"
>
  Custom Scroll Block
</div>
```

## How to Verify

1. Open `demo.html` in a web browser.
2. Scroll down slowly.
3. Observe:
   - The **first card** waits `600ms` after entering before fading in.
   - The **second card** does not slide up until 60% of it is in the viewport.
   - The **third card** resets every time you scroll away from it, allowing the animation to repeat.
