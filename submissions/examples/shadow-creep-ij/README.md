# Shadow Creep

1. What does this do? A dark shadow overlay spreads across the element from left to right using `clip-path` animation with a `cubic-bezier` easing. The overlay uses a linear gradient (pure black fading to transparent) with a soft edge. A moon with crescent icon reinforces the dark theme.

2. How is it used? Click "Curse" to add `.cursed` class to `.shadow-overlay`, which transitions `clip-path: inset(0 100% 0 0)` → `inset(0 0 0 0)` over 1.2s with `cubic-bezier(0.4, 0, 0.2, 1)`. The gradient goes from `#020617e0` (near-black) to transparent with a gradual 40-70% transition for a soft edge.

3. Why is it useful? Shadow/darkness creeping effects are common in game UIs for curse debuffs, corruption status, or dark transformations. The slow, creeping shadow provides ominous visual feedback that contrasts perfectly with light-based effects like holy-light-rays.
