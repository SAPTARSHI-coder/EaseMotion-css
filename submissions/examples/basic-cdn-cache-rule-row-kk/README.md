# Basic CDN Cache Rule Row

## What it does

This submission adds a CSS-only CDN cache rule row for hosting dashboards,
performance settings, deployment panels, and edge configuration screens.

It shows a cache marker, path pattern, helper text, cache behavior, TTL, and
rule health state in one compact reusable row.

## How to use it

Add the base row class with a cache marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-cdn-cache-rule-row">
  <span class="cache-mark is-enabled" aria-hidden="true">ON</span>
  <div class="cache-copy">
    <strong>/assets/*</strong>
    <p>Static assets are cached globally with immutable headers.</p>
  </div>
  <span class="cache-behavior">Cache</span>
  <span class="cache-ttl">30 days</span>
  <span class="cache-state is-enabled">Enabled</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
hosting and performance interfaces. Developers can reuse the same row pattern in
CDN settings, cache rule editors, deployment dashboards, and edge configuration
screens while keeping the implementation lightweight and CSS-only.

## Included features

- Enabled, bypass, and review cache rule examples
- Cache rule marker badges
- Cache behavior metadata
- TTL metadata
- Rule health state styling
- Long text truncation for compact settings panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the CDN cache rule row
- `README.md` - usage and contribution context
