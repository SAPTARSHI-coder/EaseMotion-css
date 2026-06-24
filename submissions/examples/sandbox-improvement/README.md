# Structural Sandbox Grid & Viewport Alignment Utility

## What does this do?

This utility introduces a standardized testing/showcase sandbox viewport container for component examples. It resolves unwanted document scroll shifting by capturing rogue transformation overflows inside a locked viewport and overlays a clean blueprint-themed grid mesh background.

## How is it used?

Wrap your component examples or preview cards within the sandbox viewport and place the grid mesh overlay background inside:

```html
<div class="ease-sandbox-viewport">
  <!-- Blueprint grid mesh background -->
  <div class="ease-grid-mesh"></div>

  <!-- Your component goes here -->
  <div class="demo-preview-node">
    <span class="status-badge">Component Category</span>
    <h3>Component Preview</h3>
    <p>Describe your components here...</p>
  </div>
</div>
```

## Why is it useful?

- **Locks Document Layout Shifts**: Rogue transforms (e.g., extreme scales, 3D rotations, floating particles) are captured inside the `.ease-sandbox-viewport` using `overflow: hidden`, preventing horizontal scrolls on parent document elements.
- **Premium Blueprint Layout**: Features a lightweight CSS blueprint mesh overlay using double linear gradients (`.ease-grid-mesh`).
- **Unified presentation standards**: Standardizes width bounds, padding parameters, and border-radius rules across all demo examples.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to inspect viewport boundary scales and blueprint line layouts.
