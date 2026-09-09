# ease-scroll-fade-in-stagger-list-sap

**Level: Intermediate**

A list where items fade/slide in one after another as the list scrolls into view.

## Usage

```html
<ul class="stagger-list-sap">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

Requires the `IntersectionObserver` in `demo.html`, which assigns a staggered `transition-delay` to each item based on its index.

## Notes

- Delay is `index * 0.1s` — increase the multiplier for a slower cascade, decrease for a snappier one.
- Each item is observed individually, so the effect works correctly even if only part of a long list is initially in the viewport.

## Browser support

All modern browsers with `IntersectionObserver` support.