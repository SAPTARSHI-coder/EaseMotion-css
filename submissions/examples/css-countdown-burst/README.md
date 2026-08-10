# CSS Countdown Burst (#70956)

Pure CSS timed sequence countdown (3-2-1) featuring dynamic scale animations and a radial launch burst effect.

## Features
- **Sequential Keyframe Timing:** Implements staggered `animation-delay` rules to drive 3-2-1 sequence progression.
- **Launch Particle Burst Effect:** Expanding radial shockwave ring and scale burst on final state trigger.
- **Pure CSS Solution:** Zero JavaScript required for sequence orchestration or state handling.
- **Accessible & Motion Friendly:** Includes `aria-live="polite"` live region notifications and full `prefers-reduced-motion` compliance.

## Structure
- `style.css` - Component variables, sequential keyframe timing, shockwave ring animations, and accessibility fallbacks.
- `demo.html` - Interactive demo displaying the sequence stage and live status elements.
