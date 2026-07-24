# Unified JavaScript API

## What does this do?

This submission demonstrates a unified global JavaScript API (`window.EaseMotion`) that allows developers to control interactive components programmatically. It showcases APIs for Modals, Tabs, and Scroll Reveal without relying on URL hash changes or automatic initialization.

## How is it used?

Call the API methods directly from JavaScript or HTML event handlers.

```html
<button onclick="EaseMotion.Modal.open('signup-modal')">
  Open Modal
</button>

<button onclick="EaseMotion.Modal.close('signup-modal')">
  Close Modal
</button>

<button onclick="EaseMotion.Tabs.select('#profile-tabs', 1)">
  Switch to Profile Tab
</button>

<button onclick="EaseMotion.Reveal.observe('.reveal-card')">
  Enable Reveal Animation
</button>
```

## Why is it useful?

This approach provides a framework-friendly, human-readable API for interactive components. It enables easier integration with React, Vue, Svelte, and other modern frameworks, avoids URL hash conflicts, and gives developers direct programmatic control over UI behavior while remaining lightweight and easy to understand.