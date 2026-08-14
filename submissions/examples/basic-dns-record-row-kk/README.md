# Basic DNS Record Row

## What it does

This submission adds a CSS-only DNS record row for hosting dashboards, domain
settings, deployment panels, and site configuration pages.

It shows a DNS record type, host, target value, TTL, and verification state in
one compact reusable row.

## How to use it

Add the base row class with a DNS type badge, copy area, target metadata, TTL,
and state pill:

```html
<article class="basic-dns-record-row">
  <span class="dns-type is-verified">A</span>
  <div class="dns-copy">
    <strong>@</strong>
    <p>76.76.21.21 points the root domain to production hosting.</p>
  </div>
  <span class="dns-target">76.76.21.21</span>
  <span class="dns-ttl">Auto</span>
  <span class="dns-state is-verified">Verified</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
developer and hosting interfaces. Developers can reuse the same row pattern in
domain settings, DNS verification panels, deployment dashboards, and site setup
screens while keeping the implementation lightweight and CSS-only.

## Included features

- Verified, pending, and error DNS record examples
- DNS type badges
- Host and target metadata
- TTL metadata pill
- Verification state styling
- Long text truncation for compact settings panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the DNS record row
- `README.md` - usage and contribution context
