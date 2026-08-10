# CSS Matrix Rain Loader

## 1. What does this do?
This component provides a lightweight, cyberpunk-inspired Matrix rain loading animation created entirely using pure CSS.

## 2. How is it used?
The component stacks static character strings into vertical columns using CSS `writing-mode: vertical-rl` and `text-orientation: upright`. An animated linear gradient moves vertically, while `-webkit-background-clip: text` clips the gradient to the silhouette of the static HTML characters. By setting individual `animation-duration` and `animation-delay` values across columns, it produces an organic digital rain effect.

## 3. Why is it useful?
It achieves a complex digital visual effect without any JavaScript overhead or `<canvas>` rendering context. By using pure CSS keyframes on `background-position`, it avoids layout thrashing and DOM recalculations, running cleanly on the GPU compositor thread for optimal performance and high frame rates.
