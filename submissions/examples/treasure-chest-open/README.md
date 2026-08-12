# Treasure Chest Open Animation

## What does this do?

Creates a 3D treasure chest that opens its lid on hover/focus with a golden glow burst and sparkle particles, all in pure CSS.

## How is it used?

Add the `.chest` container with `.lid` and `.body` sub-elements. The lid rotates open on hover/focus while sparkles animate upward.

```html
<div
  class="chest"
  tabindex="0"
  role="button"
  aria-label="Open the treasure chest"
>
  <div class="lid"><div class="lock"></div></div>
  <div class="body">
    <div class="glow"></div>
    <div class="sparkle s1">✦</div>
  </div>
</div>
```

## Why is it useful?

Treasure chest animations are popular in game UIs, achievement unlocks, reward screens, and gamified e-commerce experiences. This pure CSS approach provides an engaging visual reward interaction without JavaScript.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to see the effects.

## Contribution Notes

- Class naming handled by contributor
- Maintainer will rename to ease-\* convention before merging
