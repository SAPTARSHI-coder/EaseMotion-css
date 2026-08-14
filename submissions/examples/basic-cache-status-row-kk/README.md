# Basic Cache Status Row

## What it does

This submission adds a simple CSS-only cache status row for CDN dashboards,
performance settings, developer panels, and deployment tools.

It presents a cache layer icon, cache target name, helper text, TTL metadata,
and freshness state in one compact reusable row.

## How to use it

Add the base row class with a cache icon, copy area, TTL label, and state pill:

```html
<article class="basic-cache-status-row">
  <span class="cache-icon is-fresh" aria-hidden="true">FR</span>
  <div class="cache-copy">
    <strong>Homepage cache</strong>
    <p>Fresh edge response served from the nearest CDN region.</p>
  </div>
  <span class="cache-ttl">15m TTL</span>
  <span class="cache-state is-fresh">Fresh</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
developer and performance interfaces. The row can be reused inside CDN settings,
cache panels, deployment dashboards, and performance monitoring cards while
staying lightweight and CSS-only.

## Included features

- Fresh, revalidating, and stale cache examples
- TTL metadata label
- Freshness state pills
- Long text truncation for cache descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the cache status row
- `README.md` - usage and contribution context
