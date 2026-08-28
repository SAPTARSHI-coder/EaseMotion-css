# Fix: Dynamic Animation Bug (#89087)

This directory demonstrates the working fix for the bug where dynamically added animation classes (e.g. `ease-*`) did not trigger in newer browsers due to CSS `@layer` WebKit/Blink injection clipping bugs. 

## The Issue
Initially, all `@keyframes` rules inside `core/animations.css` were wrapped in the `@layer easemotion-utilities { ... }` block.
When an animation target element did not possess the specific animation class when it was first inserted into the DOM, and later received the class dynamically (e.g. via `setTimeout` and `classList.add(...)`), the keyframes resolved from within the `@layer` context would fail to initialize properly, leading to the animation failing to start.

## The Solution
We extracted all `@keyframes` in `core/animations.css` and unlayered them by moving them to the top of the file, outside of the `@layer easemotion-utilities { ... }` block. 
Since `@keyframes` live in a global namespace and don't contribute to layer specificity anyway, they function exactly the same but completely bypass the browser bug. 

This fixes `#89087`. The `demo.html` page reliably restarts and runs any EaseMotion class injected after the DOM parsing is complete.
