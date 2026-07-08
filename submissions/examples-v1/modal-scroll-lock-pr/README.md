# Modal Scroll Lock Fix (-pr)

This submission provides a lightweight JavaScript utility that fixes the accessibility and UX issue of background scrolling when using the pure CSS `:target` modals in EaseMotion.

## What does this do?
It listens for URL hash changes, detects when an `ease-modal-overlay` is targeted, and automatically applies `overflow: hidden` to the document body to trap the user's scroll focus inside the modal.

## How is it used?
Simply include the script at the bottom of your HTML document:
```html
<script src="ease-modal-lock.js"></script>
```

## Why is it useful?
Pure CSS modals are great, but they inherently fail to prevent background page scrolling. This lightweight script patches that architectural flaw without requiring developers to write complex React/Vue state management hooks.
