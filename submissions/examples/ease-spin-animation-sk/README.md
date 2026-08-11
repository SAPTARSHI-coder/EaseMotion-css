# ease-spin Animation Class

1. **What does this do?** This submission implements the missing `.ease-spin` continuous rotation animation class requested in issue #6010.
2. **How is it used?** Apply the `.ease-spin` class to any element that you want to rotate continuously (like a loading spinner or a loading icon). For example: `<svg class="ease-spin">...</svg>`.
3. **Why is it useful?** It provides a standard utility for creating loading states, completing the continuous animation set (alongside `ease-pulse`, `ease-bounce`, `ease-ping`, and `ease-shake`).

### Implementation Details
- Added `@keyframes ease-kf-spin` and the `.ease-spin` utility class in the submission's `style.css`.
- The animation is a simple `1s linear infinite` rotation from 0 to 360 degrees.
- **Note to maintainer:** These are ready to be integrated directly into `core/animations.css`.
