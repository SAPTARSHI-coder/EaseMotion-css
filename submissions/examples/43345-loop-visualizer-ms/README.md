# Loop Iteration Control Visualizer

Resolves #43345.

### What does this do?
Provides an interactive playground for visualizing how CSS `animation-iteration-count`, `animation-direction`, `animation-duration`, and `animation-timing-function` interact.

### How is it used?
The tool uses Vanilla JS to dynamically update the `animation` property of a block based on user selections. It includes a replay function that forces a reflow to restart the animation loop.

### Why is it useful?
CSS animation loops (specifically the difference between `alternate` and `alternate-reverse`, or how iteration limits work) can be confusing for beginners. This visualizer serves as a live educational widget for the EaseMotion documentation.
