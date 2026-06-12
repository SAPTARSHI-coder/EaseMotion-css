# Motion Preset Generator

### 1. What does this do?

This is a visual animation sequencing dashboard that lets developers chain entrance and looping animations into a single cohesive motion timeline (using comma-separated CSS keyframe properties) and output the corresponding HTML and CSS preset code.

### 2. How is it used?

Open `demo.html` directly in any modern web browser to access the generator:

- **Select Preset Combinations**: Click pre-defined visual preset chips (e.g. "Cinematic Float", "Elastic Zoom & Rotate") to test setups instantly.
- **Build Custom Sequences**: Select Stage 1 (Entrance Animation, Speed, Easing) and Stage 2 (Looping Animation, Speed, Easing) using the dropdown sliders.
- **Timeline visualizer**: Verify transition segment ratios and delay starts directly on the track timeline.
- **Copy Composed CSS/HTML**: Copy generated snippets featuring the multi-animation sequences designed to flow without JavaScript triggers.

### 3. Why is it useful?

It fits EaseMotion CSS's philosophy by demonstrating composability. By chaining animations natively via the CSS `animation` shorthand (separated by commas with calculated start delays), developers can build complex visual triggers (like sliding in and then floating) purely through static CSS classes and styles, improving rendering speed and usability.
