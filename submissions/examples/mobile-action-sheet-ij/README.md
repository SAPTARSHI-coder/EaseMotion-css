# Mobile Action Sheet

1. What does this do? A mobile-style bottom action sheet that slides up (translateY(100%) → 0) with action items, a draggable handle affordance, backdrop fade, and dismissible by tapping backdrop or Cancel.

2. How is it used? Add `.action-backdrop` with `.action-sheet` inside. Toggle `.open` on both to trigger the slide-up entrance. The spring-like cubic-bezier curve provides a natural iOS-style feel. Dismiss by clicking the backdrop or Cancel button.

3. Why is it useful? Provides a specialized variant of the bottom-sheet pattern for action menus — common in mobile apps for share sheets, file operations, and settings quick-actions, with smooth entrance animation and backdrop context.
