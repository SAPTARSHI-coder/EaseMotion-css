# CSS API Key Display

A responsive API key display component with show/hide functionality and a
copy-to-clipboard action.

## Features

- Responsive API key field
- Show/hide API key control
- Copy-to-clipboard button
- Keyboard accessible controls
- ARIA labels and live status feedback
- Read-only API key field
- Pure CSS styling
- Minimal JavaScript only for functionality that CSS cannot provide
- Reduced-motion support

## Files

- `demo.html` — Standalone demonstration
- `style.css` — Component styling

## How to Use

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
<div class="api-key-group">
  <label for="api-key">Your API key</label>

  <div class="api-key-row">
    <input
      id="api-key"
      class="api-key-input"
      type="password"
      value="YOUR_API_KEY"
      readonly
    >

    <button
      type="button"
      class="icon-button"
      aria-label="Show API key"
    >
      Show
    </button>

    <button
      type="button"
      class="copy-button"
      aria-label="Copy API key"
    >
      Copy
    </button>
  </div>
</div>