# ease-animated-breadcrumb-slide-sap

**Level: Beginner**

A breadcrumb trail where each segment slides in sequentially on page load, instead of appearing all at once.

## Usage

```html
<nav class="breadcrumb-slide-sap">
  <a href="#">Home</a>
  <span class="sep-sap">/</span>
  <a href="#">Category</a>
  <span class="sep-sap">/</span>
  <span class="current-sap">Current Page</span>
</nav>
```

## Notes

- Delays are hardcoded per `nth-child` position (0s, 0.1s, 0.2s...) — for breadcrumbs with more than 5 segments, extend the `nth-child` rules or switch to a JS-assigned delay like in `ease-scroll-fade-in-stagger-list-sap`.
- The `current-sap` span (final crumb) is styled differently to indicate the active page.

## Browser support

All modern browsers.