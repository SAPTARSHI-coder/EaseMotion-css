# 3D Fold-Out Origami Menu

This example demonstrates an advanced 3D CSS animation where a menu unfolds like an accordion or a paper map. It leverages nested 3D transforms, exact transform origins, and sequential transition delays.

## How it works (The Math and Structure)

### 1. 3D Perspective
The outer container `.ease-origami-container` establishes the 3D space with `perspective: 1200px`. Without this, the 3D rotations would appear flat.

### 2. Nested Hinges
To create the accordion folding effect without complex JavaScript calculations, the panels are nested inside one another in the HTML:
```html
<div class="panel-1">
  <div class="panel-2">
    <div class="panel-3">...</div>
  </div>
</div>
```
Each child panel is positioned at `top: 100%` (the bottom edge of its parent) and uses `transform-origin: top center`. This effectively creates a "hinge" exactly where the parent panel ends. Because `transform-style: preserve-3d` is applied, the child inherits the 3D position of its parent.

### 3. The Accordion Folds (Alternating Rotations)
To fold like a piece of paper, panels must alternate their fold direction relative to their parent:
- **Panel 1** (root): Folds up and away from the user: `rotateX(-90deg)`
- **Panel 2**: Folds completely back against Panel 1: `rotateX(-179.9deg)`
- **Panel 3**: Folds the opposite way to lay flat against Panel 2: `rotateX(179.9deg)`
- **Panel 4**: Folds back again: `rotateX(-179.9deg)`

*(Note: We use `179.9deg` instead of `180deg` to prevent browser rendering engines from taking the "shortest path" during rotation, which can cause erratic flipping).*

### 4. Chain Reaction (Transition Delays)
The sequential unfolding is achieved using CSS `transition-delay`.
- **Opening (`:checked`)**: The top panel opens first (0s delay), then the second (0.15s), etc. (Forward chain reaction).
- **Closing (default state)**: The bottom-most panel must fold first (0s delay), followed by its parent (0.15s), all the way up to the top. (Reverse chain reaction).

## State Management
We use the **CSS Checkbox Hack** (`:checked ~`) to trigger the menu. This ensures a stable interaction state compared to `:hover`, which might cause the menu to snap shut if the user's cursor slips off the 3D transformed elements during animation.
