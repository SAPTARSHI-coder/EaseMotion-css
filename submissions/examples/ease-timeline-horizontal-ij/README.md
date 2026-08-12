# ease-timeline-horizontal

A horizontal timeline component with 5 connected steps. The active step highlights with a scale-up bounce animation, and the progress line fills between completed steps.

## Features
- 5-step horizontal layout with connected progress line
- Active step bounce animation
- Smooth line fill transition
- Dark theme styling

## Usage
Set `--step` (0-4) on the `.tlh-timeline` element via `style.setProperty()` to control the active step. Step dots fill up to the active index; the active dot plays a bounce animation.
