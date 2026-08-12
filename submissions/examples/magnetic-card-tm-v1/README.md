# Magnetic card

1. What does this do? A card tilts subtly toward the cursor on hover using perspective transforms.

2. How is it used? Wrap content in `<article class="mag-card-tm">`. The card reads CSS custom properties `--rx` and `--ry` (set by a small inline mousemove listener if you want full magnetic tracking, or left at zero for a static hover lift).

3. Why is it useful? It adds a tactile, premium feel to feature cards and product tiles without any animation library or framework.
