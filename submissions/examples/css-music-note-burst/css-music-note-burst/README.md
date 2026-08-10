# CSS Music Note Burst

A CSS-only animation where musical notes burst upward from a central
source and gradually fade away.

## Features

- Multiple musical notes
- Different horizontal movement paths
- Upward floating motion
- Staggered animation delays
- Fade-in and fade-out effects
- Responsive layout
- `prefers-reduced-motion` support
- No JavaScript
- No external dependencies

## How It Works

Each musical note is positioned around the same source and uses the
same CSS keyframe animation.

Different custom properties and animation delays give each note a
different trajectory.

```css
.note-one {
  --x: -150px;
  --rotate: -18deg;
}

.note-five {
  --x: 105px;
  --rotate: 10deg;
}