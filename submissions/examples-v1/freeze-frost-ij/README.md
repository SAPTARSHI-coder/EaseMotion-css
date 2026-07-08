# Freeze Frost

1. What does this do? A frosty blue/white crystalline overlay spreads across the element from left to right using clip-path animation. The overlay uses a gradient with diagonal crystalline line patterns (repeating-linear-gradient) to simulate frost spreading. Icicle decorations hang from the top.

2. How is it used? Click "Freeze" to add `.frozen` class to `.frost-overlay`, which transitions `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` for a smooth 0.8s spread. The overlay has two layers: a gradient base and a crystalline pattern via `repeating-linear-gradient`.

3. Why is it useful? Freeze/frost effects are common in game status effects (ice spells, frozen debuffs) and weather-themed UIs. The spreading frost overlay provides clear visual feedback that the freeze is taking effect, with a crystalline texture that sells the ice theme.
