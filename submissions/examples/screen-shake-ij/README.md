# Screen Shake

1. What does this do? The entire element/container shakes rapidly with random translateX/Y offsets, simulating screen shake from an impact or explosion. The animation lasts 0.4 seconds with 10 rapid micro-offset steps.

2. How is it used? Add `.shaking` class to the target element to trigger `@keyframes screen-shake` (10 keyframe steps with varying ±2-5px offsets). JS re-triggers via class removal + reflow. The star icon reinforces the "impact" visual theme.

3. Why is it useful? Screen shake is a classic impact feedback for game-like interfaces, action buttons, and dramatic interactions. The rapid jitter gives visceral physical feedback that something impactful just happened.
