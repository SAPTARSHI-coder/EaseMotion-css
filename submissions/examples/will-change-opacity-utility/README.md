# Will-Change Opacity Utility

Introduces the hardware-accelerated GPU opacity rendering optimization token (`.ease-will-change-opacity`) under issue #15157.

## Functional Mechanics

- **The Problem:** When applying rapid opacity shifts, flash notifications, or keyframe fade cycles via JS or CSS transitions, elements can exhibit slight flickering or micro-stuttering on complex pages as the browser recalculates transparent layout pixels on the main thread.
- **The Solution:** Offloads alpha channel computations. The `.ease-will-change-opacity` class serves as an optimization hint, prompting the browser to put the target node on its own GPU layer ahead of time to ensure flawless fading.

## Usage Layout Structure
```html
<div class="ease-will-change-opacity">
  </div>
```

Closes #15157
