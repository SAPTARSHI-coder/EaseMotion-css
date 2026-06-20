# Spell Cast Burst

1. What does this do? A radial burst of light/particles emanates from a central point, simulating spell casting. A central flash expands outward while particles fly in 8 directions with staggered distances.

2. How is it used? Click "Cast" to trigger `.burst-flash` (flash-burst keyframe: scale 0→3→1.5 with opacity fade) and `.particle` elements (particle-fly keyframe using CSS trigonometric functions for radial direction). JS re-triggers animation via class removal + reflow.

3. Why is it useful? Spell-casting moments are common in games and fantasy-themed UIs. The combination of central flash + radial particles creates a satisfying dramatic impact that gives clear feedback for action moments.
