# Selection Background Primary Utility

Introduces the brand-tinted text selection highlighting modifier token (`.ease-selection-bg-primary`) under issue #15173.

## Functional Mechanics

- **The Problem:** Dragging a cursor across premium branded landing pages, headers, or distinct cards pulls the operating system's un-styled default highlight color block. This can create jarring visual mismatches on carefully composed design grids.
- **The Solution:** Syncs user interaction with brand identity. The `.ease-selection-bg-primary` class overrides the selection pseudo-element, changing text highlights into the framework's primary blue theme color while ensuring strict WCAG AAA contrast readability ratios.

## Usage Layout Structure
```html
<p class="ease-selection-bg-primary">
  Highlighting this sentence reveals a custom brand background...
</p>
```

Closes #15173
