# Alert Banner

An inline alert strip with a sliding icon tile and an emphasis border.

## Features
- Icon tile slides in from the left edge
- Border glows amber while the alert is active
- Dismiss button fades the strip away

## Usage
```html
<div class="ab-banner" role="alert">
  <span class="ab-ico">&#9888;</span>
  <p class="ab-msg"><strong>Heads up:</strong> Message text here.</p>
  <button class="ab-dismiss" type="button" aria-label="Dismiss">&#10005;</button>
</div>
```

## Browser Support
- Chrome, Firefox, Safari, Edge (evergreen)

## Tech Stack
- Pure HTML + CSS, zero JavaScript dependencies
