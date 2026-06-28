# Mobile Pull Refresh Spinner

1. What does this do? A "pull to refresh" interaction for mobile apps. The circular spinner rotates proportionally to the pull distance via the `--pull-progress` CSS variable. When pulled past the threshold, releasing triggers a full rotation animation. The content translates down with the pull gesture.

2. How is it used? Add a `.pull-container` with a `.pull-spinner` element styled with `--pull-progress`. The JS sets this variable based on drag distance (0 to 1). CSS `transform: rotate(calc(var(--pull-progress) * 360deg))` maps progress to rotation. The `.spinning` class kicks in once refresh is triggered.

3. Why is it useful? Pull-to-refresh is a standard mobile pattern. Using a CSS variable to tie rotation to drag progress keeps the visual logic in CSS while JS handles gesture measurement, making the interaction lightweight and performant.
