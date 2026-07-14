# Animated Breadcrumb

### What does this do?

It shows a breadcrumb trail with chevron separators where each link slides in an underline on hover, and the current page is highlighted.

### How is it used?

```html
<nav class="breadcrumb" aria-label="Breadcrumb">
  <a href="#" class="crumb">Home</a>
  <span class="crumb-sep" aria-hidden="true"></span>
  <a href="#" class="crumb">Docs</a>
  <span class="crumb-sep" aria-hidden="true"></span>
  <span class="crumb is-current" aria-current="page">Buttons</span>
</nav>
```

Wrap the trail in a `nav` with an `aria-label`, separate the crumbs with `.crumb-sep`, and mark the last one with `is-current` and `aria-current="page"`.

### Why is it useful?

Breadcrumbs show where a user is in a site hierarchy. This grows a sliding underline on hover with a transform transition, so it needs no JavaScript. The separators are decorative and hidden from assistive tech, the current page is marked with `aria-current`, links show a focus ring, and the underline is disabled under `prefers-reduced-motion: reduce`.
