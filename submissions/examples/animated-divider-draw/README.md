# ease-divider-draw

Horizontal divider line that "draws" itself left-to-right when scrolled into view.

## Usage

```html
<div class="ease-divider"></div>
```

Requires an `IntersectionObserver` (included in `demo.html`) to add the `draw` class when the element enters the viewport.

## Notes

- Threshold is set to `0.5` (50% visible) before triggering — adjust to taste.
- Animation only runs once per page load since the class isn't removed on scroll-out; unobserve after triggering if you don't need repeats.

## Browser support

All modern browsers with `IntersectionObserver` support.