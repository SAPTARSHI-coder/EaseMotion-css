# CSS Enemy Health Bar

Gaming-themed enemy health bar featuring damage hit shake, dynamic gradient health depletion, critical low HP pulse glow, and pure CSS state triggers.

## 1. What does this do?
Displays a boss/enemy health bar with segmented progress lines, dynamic color state transitions (Green 100% &rarr; Amber 65% &rarr; Red 35% &rarr; Critical 10%), white damage trail fill, and hit shake effects without JavaScript.

## 2. How is it used?
Control health levels via radio input selectors and CSS state rules:

```html
<input type="radio" name="health-state" id="hp-full" class="hp-radio" checked>
<input type="radio" name="health-state" id="hp-low" class="hp-radio">

<div class="health-bar-track">
  <div class="damage-trail-fill"></div>
  <div class="health-fill-bar"></div>
</div>

<div class="attack-controls">
  <label for="hp-full" class="attack-btn">100% HP</label>
  <label for="hp-low" class="attack-btn">35% HP</label>
</div>
```

## 3. Why is it useful?
Web gaming interfaces, RPG dashboards, and interactive showcases require animated health bars. This pure CSS implementation delivers 60fps damage animations, screen shake micro-interactions, and accessible keyboard focus controls.
