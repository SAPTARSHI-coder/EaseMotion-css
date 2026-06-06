# ease-swing (pendulum-style)

## What does this do?
Adds a pendulum-style swing effect where the element rotates from the top center. Includes both a one-time swing and a continuous swinging version.

## How is it used?
Add one of the classes to an element:

`<div class="swing-once">One-Shot Swing</div>

<div class="swing-loop">Continuous Swing</div>

You can also change the swing angle using:

:root {
  --ease-swing-angle: 15deg;
}`

## Why is it useful?
This effect can be used for decorative elements, notifications, badges, icons, or any UI element that needs a bit of motion to attract attention. The one-shot version works well for interactions, while the continuous version can be used to keep focus on important content.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser. Hover over **One-Shot Swing** to see the animation, while **Continuous Swing** runs continuously.

## Contribution Notes
- Class naming was handled by the contributor
- Maintainer will rename to ease-* convention before merging