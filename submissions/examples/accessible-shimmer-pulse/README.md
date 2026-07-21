# Accessible CSS Shimmer Pulse Animation

A performant, zero-dependency, pure-CSS loading skeleton effect designed to provide non-disruptive feedback during asynchronous data fetching states.

## Features
- 🚀 **Zero Javascript:** Zero execution overhead, driven natively by the browser animation engine.
- 🎨 **Themeable:** Fully controlled via top-level CSS variables (`--shimmer-bg`, `--shimmer-glow`).
- ♿ **A11y Compliant:** Automatically replaces the horizontal movement sweep with a mild, static opacity cross-fade when system `prefers-reduced-motion` limits are flagged.

## Implementation Guide
Apply the `.shimmer` utility class along with structural dimensions to map placeholders over real layouts:

```html
<div class="shimmer" style="width: 100px; height: 100px; border-radius: 50%;"></div>