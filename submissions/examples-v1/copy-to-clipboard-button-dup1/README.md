# Copy to Clipboard Button

A button that copies text to the clipboard on click, with an icon that morphs into a checkmark and pulses briefly to confirm success, then reverts after 2 seconds.

## Usage
```html
<button class="copy-btn" onclick="copyToClipboard(this, 'Your text here')">
  <span class="copy-icon">📋</span>
  <span class="check-icon">✅</span>
  <span class="copy-label">Copy</span>
</button>
```

Include the `copyToClipboard` script from `demo.html` alongside your button.

## Browser support
Uses the `navigator.clipboard` API — supported in all modern browsers over HTTPS or localhost.

## Notes
Requires a small inline script for the clipboard write; the visual transition itself is pure CSS.