# Shimmer Sweep + Squish Button

## What does this do?
Demonstrates the `.ease-shimmer-sweep` background animation alongside the `.ease-squish-button` press effect, showing that both rules work correctly when properly separated by a closing brace.

## How is it used?
```html
<div class="ease-shimmer-sweep">Shimmer background</div>
<button class="ease-squish-button">Click me</button>
```

## Why is it useful?
A missing closing brace in `.ease-shimmer-sweep` caused `.ease-squish-button` to be parsed as a nested selector, breaking both animations. This demo shows the corrected separation — each rule parses independently, matching the intended behavior described in issue #32145.
