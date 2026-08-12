# Animation Preview Custom Copy Button

## What does this do?

This contribution provides custom CSS styling for copy buttons inside animation preview components, replacing default unstyled button layouts with proper padding, border-radius, color contrast, and interactive hover states.

## How is it used?

Add the `.preview-copy-btn` class to any `<button>` element inside preview cards or layout elements:

```html
<button class="preview-copy-btn">Copy</button>
```

## Why is it useful?

EaseMotion CSS focuses on creating elegant, visually fluid user interfaces. Unstyled buttons default to native browser appearances (often harsh solid black/gray), which disrupts the design language of the site. Implementing `.preview-copy-btn` with proper transitions, border-radius, HSL-harmonious dark/light theme support, and micro-interactions ensures a premium, highly cohesive, and accessible user experience across documentation tools.

## Tech Stack

- HTML
- CSS
- JavaScript (for demo.html copy-to-clipboard actions only)

## Preview

Open `demo.html` directly in your browser to verify the interactive hover and active states of the styled button.

## Contribution Notes

- Maintainer will integrate these button styles into the core documentation style sheet (`docs/animations-preview.css`) during the framework standardization step.
