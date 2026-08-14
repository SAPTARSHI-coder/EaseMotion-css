# Basic Contact Method Row

## What it does

This submission adds a simple CSS-only contact method row for profile pages,
account settings, security panels, and onboarding verification screens.

It presents a contact method icon, label, helper value, method type, and
verification state in one compact reusable row.

## How to use it

Add the base row class with an icon, copy area, meta label, and state pill:

```html
<article class="basic-contact-method-row">
  <span class="contact-icon is-email" aria-hidden="true">@</span>
  <div class="contact-copy">
    <strong>Email address</strong>
    <p>kriti@example.com</p>
  </div>
  <span class="contact-meta">Primary</span>
  <span class="contact-state is-verified">Verified</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
account and security interfaces. The component can be reused in profile cards,
verification flows, settings pages, or onboarding panels while staying
lightweight and CSS-only.

## Included features

- Email, phone, and authenticator method examples
- Verified, pending, and disabled state pills
- Compact method type metadata
- Long text truncation for account details
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the contact method row
- `README.md` - usage and contribution context
