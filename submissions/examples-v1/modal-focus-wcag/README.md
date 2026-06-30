# Modal Focus Fix (WCAG 2.1)

This submission resolves Issue #11061 by providing a patched modal logic script that properly restores focus when a modal is closed.

## What it does
When an `.ease-modal` is closed via the Escape key or by clicking the overlay, focus is correctly returned to the element that triggered the modal. This ensures compliance with WCAG 2.1 Focus Order guidelines.

## How to use it
In this demo, the standard modal logic is extended/patched via `modal-patched.js`. Simply use the standard `.ease-modal` markup, and include this script instead of the default one if you need accessibility compliance.

## Why it fits EaseMotion CSS
Accessibility is critical for a modern CSS framework. This submission proves the concept for an eventual core update while strictly following the contribution guidelines.
