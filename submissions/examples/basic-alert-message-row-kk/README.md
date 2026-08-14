# Basic Alert Message Row

## What it does

This submission adds a simple CSS-only alert message row for showing a short feedback message with a small icon marker and optional supporting text.

It works well for form notices, dashboard alerts, warning rows, success messages, account reminders, and inline feedback sections.

## How to use it

Add the utility class to a row containing an icon marker and message copy:

```html
<div class="basic-alert-message-row is-warning">
  <span aria-hidden="true">!</span>
  <div>
    <strong>Review required</strong>
    <p>Please check the details before continuing.</p>
  </div>
</div>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful across cards, forms, settings panels, dashboards, and content sections. It provides reusable inline feedback styling without JavaScript or external libraries.

## Included features

- Icon marker and message text layout
- Warning, success, and info examples
- Rounded alert container styling
- Compact spacing for inline sections
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the alert message row
- `README.md` - usage and contribution context
