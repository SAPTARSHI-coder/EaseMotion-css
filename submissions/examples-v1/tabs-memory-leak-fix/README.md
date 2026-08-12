# Tabs Memory Leak Fix

This submission resolves Issue #11063 which reported a severe memory leak in `core/tabs.js`. 

## What it does
The original `initializeTabs` function blindly re-attached duplicate event listeners every time the DOM mutated. This submission patches the logic so that:
1. The global `window.addEventListener('resize')` is securely attached only once.
2. The `change` event listeners on tab inputs are attached securely using a marker class (`.ease-tabs-initialized`).

## How to use it
In this demo, the core `tabs.js` is safely overridden by `tabs-patched.js`. Load `tabs-patched.js` in your project to prevent performance degradation in Single Page Applications.

## Why it fits
Performance is a cornerstone of modern CSS and JS frameworks. Fixing memory leaks ensures that dynamic EaseMotion instances perform smoothly over long usage periods.
