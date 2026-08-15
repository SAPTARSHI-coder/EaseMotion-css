# Basic Domain Verification Row

## What it does

This submission adds a simple CSS-only domain verification row for workspace
settings, DNS setup panels, website dashboards, and custom domain screens.

It presents a domain status icon, domain name, helper text, DNS record type, and
verification state in one compact reusable row.

## How to use it

Add the base row class with a status icon, copy area, DNS record label, and
state pill:

```html
<article class="basic-domain-verification-row">
  <span class="domain-icon is-verified" aria-hidden="true">OK</span>
  <div class="domain-copy">
    <strong>app.example.com</strong>
    <p>TXT record was found and ownership is confirmed.</p>
  </div>
  <span class="domain-record">TXT</span>
  <span class="domain-state is-verified">Verified</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
developer and workspace settings interfaces. The row can be reused inside DNS
setup cards, custom domain pages, website dashboards, and verification panels
while staying lightweight and CSS-only.

## Included features

- Verified, pending DNS, and failed verification examples
- DNS record type metadata
- Verification state pills
- Long text truncation for domain helper copy
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the domain verification row
- `README.md` - usage and contribution context
