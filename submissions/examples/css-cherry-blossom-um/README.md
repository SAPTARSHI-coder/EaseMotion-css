# CSS Cherry Blossom

## 1. What does this do?
This component renders an interactive, animated cherry blossom tree with realistic, wind-swept falling petals using pure CSS keyframes, featuring a toggle to switch between gentle drift and high wind storm mode.

## 2. How is it used?
Incorporate the HTML structure mapping sibling connections for target actions:
```html
<!-- Interactive control toggle -->
<input type="checkbox" id="wind-toggle" class="toggle-input">

<!-- Main animated container -->
<div class="scene-container" role="img" aria-label="Cherry Blossom Animation">
  <div class="tree-container">
    <div class="trunk">
      <div class="canopy">
        <div class="blossom-cloud"></div>
      </div>
    </div>
  </div>
  
  <div class="petals-wrapper">
    <div class="petal p-1"></div>
    <div class="petal p-2"></div>
  </div>

  <label for="wind-toggle" class="control-panel">
    <span class="toggle-label">Storm Wind Mode</span>
    <div class="toggle-switch"></div>
  </label>
</div>
```

## 3. Why is it useful?
It shows how complex landscape environments and ambient physics can be simulated natively in CSS without Javascript by combining overlapping radial gradients, staggered animation delays, and sibling selector states (`~`) to toggle animation states.
