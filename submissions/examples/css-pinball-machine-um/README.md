# CSS Pinball Machine

## 1. What does this do?
This component renders an interactive retro pinball machine cabinet, featuring simulated keyframe-based physics, glowing bumpers, responsive flippers, and click-based score counter systems powered entirely by CSS.

## 2. How is it used?
Incorporate the HTML layout mapping sibling controls for target activations:
```html
<form class="pinball-cabinet" role="application" aria-label="Pinball Machine">
  <!-- Hidden targets for CSS counter scorekeeping -->
  <input type="checkbox" id="t-1" class="target-input">

  <!-- Active triggers mapped to flippers -->
  <button type="button" id="left-trigger" class="trigger-input" style="display:none;"></button>

  <div class="playfield">
    <!-- Clickable bumpers -->
    <label for="t-1" class="bumper b-left" role="button"></label>
    
    <!-- Moving pinball -->
    <div class="pinball"></div>

    <div class="flipper-area">
      <div class="flipper left"></div>
    </div>
  </div>
</form>
```

## 3. Why is it useful?
It showcases advanced physics animation paths, interactive sibling target states, and visual triggers (like flash animations synced to timing offsets) built natively with modern CSS to create immersive animations without javascript overhead.
