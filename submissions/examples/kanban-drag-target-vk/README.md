# Kanban Board Card Drop Target with Drag Micro-Interactions

A 3-column Kanban board featuring HTML5 drag and drop micro-interactions, 3D card tilt physics, animated dash-marching drop target highlights, real-time insertion placeholders, and spring drop bounce animations.

## Features

- 🎴 **Card Elevation & 3D Tilt**: Active card elevates with a `transform: rotate(3.5deg) scale(1.04)` tilt and depth shadow during dragging.
- 🎯 **Animated Drop Targets**: Columns display a glowing border (`.drag-over`) with animated dash marching keyframes (`@keyframes dashMarch`).
- 📍 **DOM Insertion Placeholder**: Calculates mouse coordinates in real-time to insert a pulsing gap placeholder (`.kanban-placeholder`) showing exact drop position.
- 💥 **Spring Drop Bounce**: Released cards snap into position with a spring bounce animation (`@keyframes dropBounce`).
- ⚡ **Zero External Dependencies**: Native HTML5 Drag and Drop API implementation without third-party JS libraries.

## File Structure

```text
submissions/examples/kanban-drag-target-vk/
├── demo.html    # Interactive demo showcasing the Kanban board
├── index.html   # Main entry demo page
├── style.css    # Responsive CSS styling & drag keyframes
├── script.js    # Vanilla JS drag lifecycle & placeholder handlers
└── README.md    # Documentation and customization guide
```

## Quick Start

### 1. HTML Markup

```html
<div class="kanban-column" data-column="todo">
  <div class="column-drop-zone">
    <div class="kanban-card" draggable="true" id="card-1">
      <div class="card-drag-handle">⋮⋮</div>
      <div class="card-content">
        <h3>Redesign Navigation Bar</h3>
        <p>Implement glassmorphism and mobile drawer.</p>
      </div>
    </div>
  </div>
</div>
```

### 2. Include CSS & JavaScript

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## CSS Micro-Interactions

| State / Class | Keyframes / CSS Properties | Effect |
| :--- | :--- | :--- |
| `.kanban-card.is-dragging` | `transform: rotate(3.5deg) scale(1.04)` | 3D card tilt and elevation |
| `.kanban-column.drag-over` | `@keyframes dashMarch` | Animated dashed border column highlight |
| `.kanban-placeholder` | `@keyframes placeholderPulse` | Pulsing gap indicator showing drop slot |
| `.kanban-card.just-dropped` | `@keyframes dropBounce` | Spring bounce snap insertion on drop |
