# CSS Building Fill Progress

## 1. What does this do?
This component renders an interactive skyscraper silhouette that fills floor by floor with glowing windows using stepped radio controls and staggered CSS transition delays.

## 2. How is it used?
Configure progressive radio buttons alongside building floor window elements:
```html
<!-- Stepped radio triggers -->
<input type="radio" name="progress" id="p-0" checked>
<input type="radio" name="progress" id="p-1">

<div class="dashboard-panel">
  <div class="skyscraper">
    <!-- Bottom Floor -->
    <div class="floor f-1">
      <div class="window-row">
        <div class="window"></div>
      </div>
    </div>
  </div>

  <div class="control-grid" role="radiogroup">
    <label for="p-0" role="radio" tabindex="0">0%</label>
    <label for="p-1" role="radio" tabindex="0">20%</label>
  </div>
</div>
```

## 3. Why is it useful?
It introduces an intuitive stepped data visualization layout built natively using sibling selectors and staggered transition delays (`transition-delay`), enabling interactive building growth displays without JavaScript logic.
