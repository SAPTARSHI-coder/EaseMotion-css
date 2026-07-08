# Animation Play State Utilities Proposal (`ease-play-state-utilities`)

A proposal for `core/utilities.css` adding standard `animation-play-state` helper classes.

## 🚀 Features

- **`.em-play-paused`**: Forces an animation to be paused statically.
- **`.em-play-running`**: Forces an animation to be running statically.
- **`.em-hover-pause`**: Automatically pauses a running animation when the user hovers or focuses on the element.
- **`.em-hover-play`**: Automatically plays a paused animation when the user hovers or focuses on the element.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Hover over the spinners to observe the pause/play logic!

You can apply the proposed utility classes to any animated element to easily control interactivity without writing custom CSS or JS listeners:

```html
<!-- Pause an infinitely spinning icon when hovered -->
<div class="em-spin em-hover-pause">
  Spinning until hovered!
</div>

<!-- Start paused, and play when hovered -->
<div class="em-spin em-play-paused em-hover-play">
  Hover me to spin!
</div>
```

*Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`.*

## 🔗 Related Issue
Resolves Issue #16415
