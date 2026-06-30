# Copy Button for Code Snippets

## Overview

Adds a copy button to code snippets for easy clipboard copying. Users can click the copy icon to copy class names and code examples.

## Features

- **Copy Icon**: SVG clipboard icon on each snippet
- **Click to Copy**: Copies code content to clipboard
- **Visual Feedback**: Shows checkmark and green color on successful copy
- **Accessibility**: Includes proper aria-label for screen readers

## Usage

Add the copy button structure to any code snippet:

```html
<div class="snippet-item">
  <div class="snippet-content">
    <code>your-class-name</code>
  </div>
  <button
    class="copy-btn"
    onclick="copyToClipboard(this)"
    aria-label="Copy to clipboard"
  >
    <!-- Copy SVG icon -->
  </button>
</div>
```

## JavaScript

```javascript
function copyToClipboard(button) {
  const snippet = button.parentElement.querySelector("code");
  const text = snippet.textContent;

  navigator.clipboard.writeText(text).then(() => {
    // Show success state
    button.classList.add("copied");

    setTimeout(() => {
      button.classList.remove("copied");
    }, 2000);
  });
}
```

## Files

- `demo.html` - Interactive demonstration
- `style.css` - Demo styling
- `README.md` - This documentation
