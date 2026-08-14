# Basic Certificate Expiry Row

## What it does

This submission adds a simple CSS-only certificate expiry row for security
dashboards, domain health panels, TLS settings, and infrastructure tools.

It presents a certificate state icon, domain name, helper text, expiry metadata,
and certificate state in one compact reusable row.

## How to use it

Add the base row class with a certificate icon, copy area, expiry label, and
state pill:

```html
<article class="basic-certificate-expiry-row">
  <span class="certificate-icon is-valid" aria-hidden="true">TLS</span>
  <div class="certificate-copy">
    <strong>app.example.com</strong>
    <p>Certificate is valid and trusted by all monitored browsers.</p>
  </div>
  <span class="certificate-date">82d left</span>
  <span class="certificate-state is-valid">Valid</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
security and infrastructure interfaces. The row can be reused inside TLS
settings, domain health cards, certificate dashboards, and deployment tools
while staying lightweight and CSS-only.

## Included features

- Valid, renewing, and expiring certificate examples
- Expiry metadata label
- Certificate state pills
- Long text truncation for certificate descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the certificate expiry row
- `README.md` - usage and contribution context
