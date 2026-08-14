# ease-scroll-nav-color-invert-sap

**Level: Intermediate**

A fixed navbar that smoothly inverts from transparent/light-text to solid/dark-text once the user scrolls past a threshold.

## Usage

```html
<nav class="nav-invert-sap" id="nav">
  <span>Brand</span>
</nav>
```

Requires the scroll listener in `demo.html` to toggle the `inverted` class past a scroll threshold (100px by default).

## Notes

- Common on landing pages with a full-bleed hero image behind a transparent nav.
- Adjust the `100` threshold to match your hero section's height.

## Browser support

All modern browsers.