# Fix: Design Variables Layer Architecture Mismatch

Resolves a structural mismatch where `variables.css` is wrapped in `easemotion-base` despite configuration documentation stating it must remain unlayered to guarantee global accessibility.

## What does this do?
- **Cascade Layer Correction:** Rectifies cascade priority order issues by ensuring custom properties are declared globally, avoiding selector specificity overrides.