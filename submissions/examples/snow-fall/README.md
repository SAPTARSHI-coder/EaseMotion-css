# Snow Fall Effect

**What is it?**
A gentle snowfall scene with 20 snowflakes of different sizes, speeds, and opacities drifting down against a winter night sky.

**How it works**
Each `.snowflake` uses CSS custom properties `--d` (duration), `--s` (font-size), and `--o` (opacity) to vary behavior. The `snowfall` keyframe animates Y position with slight horizontal drift and rotation. Random `animation-delay` values desynchronize the flakes.

**Why this approach**
Pure CSS with custom properties avoids JavaScript while creating organic-looking snowfall. Variable sizes and staggered timing prevent the pattern from looking mechanical.
