# Fix: Exit Animation Preview Card

## What does this do?
Fixes the missing preview card for the `ease-expand-border-exit` animation 
in the Motion Library demo page.

## How is it used?
```html
<div class="anim-box ease-expand-border-exit">⬜</div>
```

## Why is it useful?
The exit animation preview was missing the `anim-box` class and icon, 
making it impossible to preview the animation. This fix makes it 
consistent with all other animation categories.