# Horizontal Slide Entrance Animations

1. **What does this do?** This submission implements the missing `.ease-slide-left` and `.ease-slide-right` entrance animations in the core framework to complete the directional slide set.
2. **How is it used?** Apply the classes to any element that you want to animate on load. For example: `<div class="ease-slide-left">Content</div>` or `<div class="ease-slide-right ease-delay-200">Content</div>`.
3. **Why is it useful?** It provides symmetry with the existing `ease-slide-up` and `ease-slide-down` animations, allowing developers to slide content in from all four cardinal directions using a consistent 24px offset and standard timing functions.

### Implementation Details
- Added `@keyframes ease-kf-slide-left` and `@keyframes ease-kf-slide-right` in the submission `style.css`.
- Added the corresponding utility classes `.ease-slide-left` and `.ease-slide-right`.
- Follows the exact offset pattern (24px) and fading behavior as the existing vertical slides.
- **Note to maintainer:** These are ready to be standardized and integrated into `core/animations.css`.
