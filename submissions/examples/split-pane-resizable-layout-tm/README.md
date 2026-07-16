# Resizable Split Pane Layout Primitive

A lightweight, robust, and highly responsive split-pane layout primitive. Built using CSS Flexbox, custom variables, and basic mouse/touch drag handlers. Easily handles recursive nesting to build complex dashboard workspaces, code editors, and side panels.

---

## Key Features

- **Flexbox-Driven Scaling**: Controls a single panel's `flex-basis` while allowing the counterpart to fill the remaining space, avoiding subpixel grid errors.
- **Directional Versatility**: Supports both horizontal (side-by-side) and vertical (top/bottom stacked) divider layouts using modifier classes (`.ease-split-horizontal` and `.ease-split-vertical`).
- **Recursive Nesting**: Build multi-panel grids by nesting vertical split containers inside horizontal ones, or vice-versa, without breaking drag containment.
- **Micro-interactive Dividers**: Features a visual handle indicator, hover states, touch hit-box expanding padding, and active drag cursors.
- **Smart Snap Reset**: Double-clicking any resizer bar smoothly snaps the panels back to a balanced ratio (50/50) with elastic CSS transitions.

---

## How to Use

### 1. Basic Split Pane Markup

Add the splitter elements to your HTML container. Ensure you apply the orientation class (`ease-split-horizontal` or `ease-split-vertical`):

```html
<div class="ease-split-container ease-split-horizontal">
  
  <!-- Left Panel (Pane First) -->
  <div class="ease-split-pane pane-first" style="flex-basis: 50%;">
    <div class="panel-content">
      Left Pane Content
    </div>
  </div>
  
  <!-- Divider Separator bar -->
  <div class="ease-split-divider">
    <div class="ease-split-divider-handle"></div>
  </div>
  
  <!-- Right Panel (Pane Second) -->
  <div class="ease-split-pane pane-second">
    <div class="panel-content">
      Right Pane Content
    </div>
  </div>

</div>
```

---

### 2. Nesting Split Panes

To build multi-window dashboards, nest an `.ease-split-container` inside one of the child panes:

```html
<div class="ease-split-container ease-split-horizontal">
  
  <!-- Left Side: Split vertically into two panels -->
  <div class="ease-split-pane pane-first" style="flex-basis: 40%;">
    <div class="ease-split-container ease-split-vertical">
      
      <div class="ease-split-pane pane-first" style="flex-basis: 50%;">
        Top Editor
      </div>
      
      <div class="ease-split-divider">
        <div class="ease-split-divider-handle"></div>
      </div>
      
      <div class="ease-split-pane pane-second">
        Bottom Console
      </div>
      
    </div>
  </div>
  
  <!-- Divider -->
  <div class="ease-split-divider">
    <div class="ease-split-divider-handle"></div>
  </div>
  
  <!-- Right Side: Single Preview pane -->
  <div class="ease-split-pane pane-second">
    Live App Preview
  </div>

</div>
```

---

## Component Custom Variables

Configure spacing, borders, transition animations, and colors using CSS custom properties:

```css
:root {
  --ease-split-divider-size: 6px; /* Width/Height of resizer bar */
  --ease-split-divider-bg: rgba(0, 0, 0, 0.08); /* Track divider base color */
  --ease-split-divider-hover: #6366f1; /* Accent hover highlight */
  --ease-split-divider-active: #4f46e5; /* Accent drag active highlight */
  --ease-split-transition-speed: 0.3s; /* Ratio snap transition duration */
  --ease-split-pane-min: 50px; /* Min sizing constraints */
}
```

---

## Technical Integration Details

### Drag Resizing Hook

Bind the dragging handlers on your DOM elements by listening to mouse/touch coordinates. Update the `flex-basis` of the first pane (`.pane-first`) programmatically:

```javascript
// Calculate percentage coordinate relative to container dimensions
let percentage = (mouseOffset / containerTotalSize) * 100;
let clamped = Math.max(10, Math.min(90, percentage)); // Set limits

// Update inline properties
paneFirst.style.flexBasis = `${clamped}%`;
```

To prevent frame dropouts or pointer losses when hovering over iframes or inputs, apply cursor helpers to the `body` tag during active drag sequences:

- Vertical resizing: Apply `.dragging-col-resize`
- Horizontal resizing: Apply `.dragging-row-resize`
