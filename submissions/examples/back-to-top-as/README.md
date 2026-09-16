# Scroll Reveal Back to Top Button

### What does this do?

It shows a floating back to top button that fades and scales in as the page is scrolled down, and links back to the top, using only CSS.

### How is it used?

```html
<body id="top">
  <!-- page content -->
  <a href="#top" class="back-to-top" aria-label="Back to top">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  </a>
</body>
```

Give the page top an `id` and point the button `href` at it. The button reveals itself based on scroll position, so nothing needs to toggle it.

### Why is it useful?

A back to top button helps on long pages, and revealing it only after scrolling keeps it out of the way at the top. This drives the entrance from scroll position with `animation-timeline: scroll()`, so it needs no JavaScript. Where scroll timelines are not supported the button simply stays visible, and the arrow hover motion is disabled under `prefers-reduced-motion: reduce`.
