# Tactile Sink Toggle Switch Component (`#54665`)

## What does this do?
Provides a deeply rewarding custom checkbox toggle switch that depresses into a recessed inner-shadow groove when actuated.

## How is it used?
Wrap an invisible native checkbox and slider span inside an `ease-toggle-sink` component box:
```html
<div class="ease-toggle-sink">
  <input type="checkbox" />
  <div class="slider blue"></div>
</div>
```

## Why is it useful?
Solves issue #54665 by offering rich tactile mechanical responsiveness for preference sliders and settings panels.