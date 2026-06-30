# Confetti Burst Animation

### 1. What does this do?

This component creates a colorful explosion of confetti particles that burst outward from a central point when triggered by an active state class.

### 2. How is it used?

Apply the `.confetti-container` class to a button wrapper and add `.confetti-piece` span elements inside with inline variables specifying their speed, delay, color, and angle:

```html
<div class="confetti-container">
  <button class="btn-celebrate">Celebrate!</button>

  <!-- Particles -->
  <span
    class="confetti-piece"
    style="--angle: 0deg; --distance: 120px; --speed: 1s; --delay: 0s; --color: #f43f5e;"
  ></span>
  <span
    class="confetti-piece"
    style="--angle: 45deg; --distance: 140px; --speed: 0.8s; --delay: 0.1s; --color: #3b82f6;"
  ></span>
  <span
    class="confetti-piece"
    style="--angle: 90deg; --distance: 110px; --speed: 1.2s; --delay: 0.05s; --color: #eab308;"
  ></span>
  <!-- Add as many particles as desired for density -->
</div>
```

**Variants:**

- **Sizes**:
  - `.confetti-sm`: Tighter distance spread modifier (decreases distance scaling).
  - `.confetti-lg`: Wider distance spread modifier (increases distance scaling).
- **Speeds**:
  - `.confetti-fast`: Shortens animation duration (speeds up the burst).
  - `.confetti-slow`: Lengthens animation duration (slows down the burst).
- **Themes**:
  - `.confetti-mono`: Overrides all particle colors to match a single brand color.
  - `.confetti-loop`: Continuous celebration mode (sets keyframes loop iteration to infinite).

### 3. Why is it useful?

It provides a lightweight success celebration micro-interaction built entirely without heavy canvas libraries, SVG rendering paths, or JavaScript animations. By leveraging HTML custom properties for coordinate projections, it keeps the final CSS payload extremely small, highly performant, and fully accessible (supporting automated prefers-reduced-motion checkmark replacements).
