# Burn Ember

1. What does this do? Element edges glow with flickering orange/red ember-like light using `box-shadow` with rapid alternating keyframes (0.15s). Rising ember particles (via pseudo-elements) float upward from the bottom edge. Flame elements above flicker with scaleY oscillation.

2. How is it used? Click "Ignite" to add `.burning` class to `.ember-card`, which runs `@keyframes ember-glow` (alternating box-shadow intensity) and animates pseudo-element ember particles upward via `@keyframes ember-rise`. Flame bars flicker continuously with `@keyframes flame-flicker`.

3. Why is it useful? Burn/ember effects are common in game status effects (fire damage, burning debuffs) and fire-themed UI. The combination of edge glow + rising particles + flickering flames creates a convincing smoldering visual that gives clear status feedback.
