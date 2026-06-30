# Tab Panel Animation Replay Fix (Issue #14079)

## What does this do?
Refactors `.ease-tab-panel` to use `visibility` and `opacity` transitions instead of `display: none` and `@keyframes`. This prevents the animation from jarringly re-running every time the user toggles back to a previously loaded tab.

## How is it used?
```html
<div class="ease-tab-panel is-active">...</div>
```

## Why is it useful?
Using `display: none` removes the element from the render tree, meaning any CSS `@keyframes` bound to the `.is-active` class will completely restart from 0% when the element is displayed again. By stacking panels with `absolute` positioning and using `opacity` + `visibility` transitions, the browser maintains the rendered state, resulting in a smooth transition without constant re-triggering of enter animations on already-viewed content.
