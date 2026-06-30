# Issue 18190 — 3D Carousel

3D carousel with perspective and rotation transforms.

**Technique:** Cards arranged in a circle with `rotateY()` and `translateZ()`. A minimal JS click handler rotates the carousel by updating `transform: rotateY()`.

**Custom properties:** `--card-size`, `--perspective`, `--rotate-speed`, `--card-bg`, etc.

**Accessibility:** `@media (prefers-reduced-motion: reduce)` disables the rotation transition.
