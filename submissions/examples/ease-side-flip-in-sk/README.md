# Side Flip-In Animation (`ease-side-flip-in`)

### 1. What does this do?
The `ease-side-flip-in` utility provides a realistic 3D entrance animation where an element flips face-up from the side (rotating along the Y-axis).

### 2. How is it used?
Simply add the `.ease-side-flip-in` class to any container or element you want to animate upon entrance.

```html
<div class="ease-card ease-side-flip-in">
  ♠ Spades
</div>
```

### 3. Why is it useful?
This animation provides a playful, physical interaction style that is perfect for:
- Card-based UIs or digital board games.
- Revealing portfolio items or feature grids.
- Displaying flashcards or quiz application answers.
- Breaking away from standard fading or sliding entrance animations.

---
**Implementation Details:**
- Follows specification from Issue #11894.
- Uses `backface-visibility: hidden` to ensure realistic physical behavior before the element fully rotates to `0deg`.
- Injects a `perspective(1200px)` directly into the `transform` keyframes to avoid needing complex parent wrappers.
- Includes `prefers-reduced-motion: reduce` fallback to default to a standard fade.
- Uses an aggressive `cubic-bezier` for a snappy "card snap" feel.
