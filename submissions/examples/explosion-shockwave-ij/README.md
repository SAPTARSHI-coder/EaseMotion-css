# Explosion Shockwave

1. What does this do? A ring rapidly expands from scale(0) to scale(3+) with opacity fade-out, simulating an explosion shockwave. A central core flash provides the initial blast, and optional debris particles fly in random directions.

2. How is it used? Click "Trigger" to play `.shockwave-ring` (ring-expand keyframe: scale 0→3→3.5 with opacity fade), `.shockwave-core` (core-flash keyframe), and `.debris` (individual fly keyframes for each piece). JS re-triggers via class removal + reflow.

3. Why is it useful? Explosion/impact effects are essential for game UIs, action sequences, and dramatic interactions. The expanding ring + flash + debris combo creates a visceral impact moment.
