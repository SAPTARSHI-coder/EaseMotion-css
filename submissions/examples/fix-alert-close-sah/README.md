# Multi-Line Alert Close Button Alignment Fix (`#56074`)

## What does this do?
Resolves awkward vertical centering of close buttons in multi-line alert banners by locking icon controls to the `flex-start` top border line.

## How is it used?
Structure alert banners using the `ease-alert` class with separate content and close button elements:
```html
<div class="ease-alert warning">
  <span class="alert-icon">⚠️</span>
  <div class="alert-content">Multi-line message...</div>
  <button class="alert-close">✕</button>
</div>
```

## Why is it useful?
Solves issue #56074 by ensuring close button alignment remains crisp and predictable across varying viewport widths and dynamic notification text lengths.