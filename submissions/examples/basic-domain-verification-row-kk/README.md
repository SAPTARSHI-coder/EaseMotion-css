# Basic Domain Verification Row

## What it does

This submission adds a simple CSS-only domain verification row for workspace
setup pages, DNS verification screens, admin settings, custom domain panels,
and onboarding flows.

It displays a domain marker, domain name, DNS helper copy, record type, and
verification state in one compact row.

## How to use it

Add the base row class with a domain marker, copy, record type, and state:

```html
<article class="basic-domain-verification-row">
  <span class="domain-mark" aria-hidden="true">.com</span>
  <div class="domain-copy">
    <strong>app.example.com</strong>
    <p>TXT record matched and workspace routing is active.</p>
  </div>
  <span class="domain-record">TXT</span>
  <span class="domain-state is-verified">Verified</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful across
workspace setup and admin interfaces. The row can be reused in DNS panels,
custom domain cards, onboarding screens, and settings pages while staying
lightweight and CSS-only.

## Included features

- Verified, pending, and failed domain states
- Domain suffix marker
- DNS helper copy, record type pill, and state pill layout
- Text truncation for long DNS helper copy
- Subtle hover lift interaction
- Responsive two-column wrapping on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the domain verification row
- `README.md` - usage and contribution context
