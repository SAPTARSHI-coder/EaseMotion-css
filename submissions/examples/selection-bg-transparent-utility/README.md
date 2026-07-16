# Selection Background Transparent Utility

Introduces the transparent text selection highlighting modifier token (`.ease-selection-bg-transparent`) under issue #15175.

## Functional Mechanics

- **The Problem:** Dragging a cursor across highly stylized user interfaces, canvas grids, or minimal splash cards triggers the default operating system selection color (typically a heavy blue or amber block). This masks custom text coloring and disrupts visual immersion during copy behaviors.
- **The Solution:** Suppresses highlight backdrops while keeping data accessible. The `.ease-selection-bg-transparent` class zeroes out the selection pseudo-element background, allowing clear textual copying without imposing heavy solid colored bars on the layout.

## Usage Layout Structure
```html
<p class="ease-selection-bg-transparent">
  Highlighting this sentence extracts content text invisibly...
</p>
```

Closes #15175
