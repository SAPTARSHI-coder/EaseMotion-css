# Retro Nixie Tube Clock Display

A vintage steampunk neon gas discharge Nixie tube clock component with wire mesh grid overlays and glowing amber numerals.

## 1. What does this do?
This component renders an interactive retro Nixie tube clock with domed glass envelopes, internal cathode wire mesh overlays, neon orange glow text shadows, and animated colon separators.

## 2. How is it used?
Link `style.css` and use the `.nixie-card` structure:

```html
<link rel="stylesheet" href="style.css">

<div class="nixie-card" tabindex="0">
  <div class="clock-housing">
    <div class="nixie-tube">
      <span class="digit glow-orange">1</span>
    </div>
  </div>
</div>
```

## 3. Why is it useful?
It provides steampunk games, retro digital dashboards, and mechanical clock widgets with an authentic gas-discharge tube aesthetic using pure CSS.
