# Basic Contact Preference Row

## What it does

This submission adds a CSS-only contact preference row for profile settings,
notification pages, account dashboards, and user preference screens.

It shows a preference marker, preference name, helper text, contact method,
frequency, and active or disabled state in one compact reusable row.

## How to use it

Add the base row class with a preference marker, copy area, metadata pills, and a
state pill:

```html
<article class="basic-contact-preference-row">
  <span class="preference-mark is-email" aria-hidden="true">EM</span>
  <div class="preference-copy">
    <strong>Email updates</strong>
    <p>Send product updates to kriti@example.com.</p>
  </div>
  <span class="preference-method">Email</span>
  <span class="preference-frequency">Weekly</span>
  <span class="preference-state is-email">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful for common
profile and settings interfaces. Developers can reuse the same row pattern in
notification preferences, account settings, profile pages, and communication
preference screens while keeping the implementation lightweight and CSS-only.

## Included features

- Email, SMS, and disabled preference examples
- Contact method marker badges
- Method metadata
- Frequency metadata
- Preference state styling
- Long text truncation for compact settings panels
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the contact preference row
- `README.md` - usage and contribution context
