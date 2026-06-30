# ease-split-view

## What does this do?
A beautiful, highly interactive split content layout component featuring:
- Two panels positioned side-by-side using CSS flexbox
- Smooth animated collapsing toggle (`ease-split-view.collapsed`) that slides out the left panel and expands the right panel to take up remaining width
- A draggable central divider bar that allows users to resize panels manually
- Integrated performance logic that disables transitions during manual resizing to prevent lagging

## How is it used?
Assemble the container using the `.ease-split-view` class, adding a divider bar between your left and right panels:

```html
<div id="split-view-container" class="ease-split-view">
  <!-- Left Panel -->
  <div id="left-panel" class="split-panel left-panel">
    <!-- Sidebar Content -->
  </div>

  <!-- Divider Handle -->
  <div id="divider-bar" class="divider-bar">
    <div class="divider-handle"></div>
  </div>

  <!-- Right Panel -->
  <div id="right-panel" class="split-panel right-panel">
    <!-- Main Content -->
  </div>
</div>
```

To collapse/expand, toggle the `.collapsed` class on the container element.

## Why is it useful?
It provides a standardized, premium split view layout matching modern SaaS configurations (IDEs, email readers, database editors). It is lightweight, fully responsive, and optimized to run at a consistent 60fps.

## Tech Stack
- HTML
- CSS (Vanilla, hardware-accelerated transitions)
- Minimal JS (to manage resizing state and toggle classes)

## Preview
Open `demo.html` directly in your browser. Use the top button to toggle the sidebar collapse, or click and drag the central red line to resize.
