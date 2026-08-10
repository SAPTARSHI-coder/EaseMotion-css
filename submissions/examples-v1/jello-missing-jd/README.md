# Missing Jello Animation in Compiled CSS

## 1. What does this do?
This is a reproduction demo showing that the `ease-jello` animation is missing from the compiled `easemotion.min.css` build.

## 2. How is it used?
Open `demo.html` in any web browser. You will see two boxes side by side:
- The left box uses a control animation (`ease-bounce-in`), which correctly executes.
- The right box uses the missing animation (`ease-jello`), which remains completely static because its keyframes and utility class are absent from the CSS output.

## 3. Why is it useful?
It provides a minimal, reproducible test case to help maintainers track down and fix the bug in the build process or source files (issue #47790). This demo proves that while the animation name is known, it is excluded from the distributed `easemotion.min.css`.
