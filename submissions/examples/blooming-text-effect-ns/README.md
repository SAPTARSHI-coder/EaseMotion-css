# CSS Blooming Text Effect (#71020)

A typography entrance animation that blooms text outward like a opening flower petal using pure CSS keyframes, scale shifts, blur filters, and staggered custom properties.

## Features
- Pure CSS keyframe sequence (`ease-bloom-animation`) driven by standard `--char-index` CSS variables.
- Multi-stage spring expansion with glowing text-shadow blooms.
- Screen reader accessible (`aria-label` on heading container with `aria-hidden` on animated character spans).
- Full `prefers-reduced-motion` safety overrides to immediately render fully visible text without motion.
