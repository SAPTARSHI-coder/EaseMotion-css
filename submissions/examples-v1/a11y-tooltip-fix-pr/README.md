# Accessible Tooltips Patch (-pr)

This submission introduces a vital JavaScript utility to fix a critical WCAG accessibility failure in the `components/tooltips.css` component.

## What does this do?
1. It automatically adds `tabindex="0"` to all `.ease-tooltip` elements so that keyboard users can tab to them.
2. It reads the `data-tooltip` attribute and dynamically injects an invisible `span` with the `ease-sr-only` utility class. This ensures screen readers (like NVDA or VoiceOver) can successfully read the tooltip text, which they normally ignore when it is purely generated via CSS `::after`.

## How is it used?
Just include the tiny utility script at the bottom of the page:
```html
<script src="ease-tooltip-a11y.js"></script>
```

## Why is it useful?
Without this script, the core framework's tooltips are fundamentally broken for visually impaired users. This patch utilizes the framework's own `utilities.css` (`.ease-sr-only`) to elegantly solve the problem without altering the visual design of the tooltips.
