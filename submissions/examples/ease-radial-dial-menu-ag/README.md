# Radial Floating Command Dial (ease-radial-dial-menu)

1. **What does this do?**  
   Expands a floating circular trigger button into a radial/pie arc menu using elastic trigonometric keyframes (`ease-radial-expand`), spring physics icon bounces (`ease-spring-bounce`), and glowing keyboard shortcut indicators (`ease-kbd-glow`).

2. **How is it used?**  
   Apply the `.radial-dial-wrapper` container class with `.is-open` toggle state and trigonometric `--angle`, `--radius`, and `--index` CSS custom properties on radial menu items:

```html
<div class="radial-dial-wrapper is-open">
  <!-- Central Floating Trigger -->
  <button class="radial-trigger" aria-label="Open Command Dial">
    <svg class="trigger-icon" viewBox="0 0 24 24">...</svg>
  </button>

  <!-- Radial Menu Container -->
  <div class="radial-menu">
    <button class="radial-item" style="--angle: -90deg; --index: 0">
      <span class="radial-icon"><svg viewBox="0 0 24 24">...</svg></span>
      <kbd class="kbd-badge">Q</kbd>
      <span class="item-label label-top">Cast Ability</span>
    </button>

    <button class="radial-item" style="--angle: -45deg; --index: 1">
      <span class="radial-icon"><svg viewBox="0 0 24 24">...</svg></span>
      <kbd class="kbd-badge">W</kbd>
      <span class="item-label label-right">Barrier Shield</span>
    </button>
  </div>
</div>
```

3. **Why is it useful?**  
   It provides an immersive, tactile micro-interaction pattern for web applications, gaming HUD dashboards, media players, and creator suites. By utilizing pure CSS polar coordinate transformations and spring recoil animations, it offers immediate visual feedback, keyboard hotkey accessibility, and high performance without requiring JavaScript animation libraries.
