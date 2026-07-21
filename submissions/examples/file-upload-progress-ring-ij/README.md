# File Upload Progress Ring

1. What does this do? Individual file upload items with a circular SVG progress ring that fills smoothly as upload progresses, driven by JS updating the CSS custom property `--progress`.

2. How is it used? Builds on the circular progress pattern. Each `.upload-item` contains an SVG ring with `.ring-fill`. JS sets `stroke-dashoffset` based on progress percentage. The `.complete` class swaps the ring to green.

3. Why is it useful? It provides a visually clear, space-efficient progress indicator for file uploads — the ring fills smoothly and transitions to a completion state, matching common upload UI patterns.
