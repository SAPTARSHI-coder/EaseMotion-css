# Fix: Scroll Reveal Hidden Elements Indexing

Resolves focus tab leaks to hidden opacity elements before scroll reveal activation.

## What does this do?
- **Visibility Toggle:** Sets `visibility: hidden` to block tab index loops until reveal triggers run.