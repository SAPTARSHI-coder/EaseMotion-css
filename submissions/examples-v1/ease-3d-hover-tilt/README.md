# 3D Hover Tilt Utilities Proposal (`ease-3d-hover-tilt`)

A proposal for `core/utilities.css` adding pure CSS 3D interactive tilt micro-interactions.

## 🚀 Features

- **`.em-perspective-parent`**: Initializes the global `perspective: 1000px;` bounding box required for 3D transforms.
- **`.em-hover-tilt`**: A smooth, pure CSS card tilt effect that lifts and rotates elements on hover to create depth.
- **Pure CSS**: While advanced tracking requires JavaScript, this proposal provides a highly performant, lightweight CSS-only tilt that instantly upgrades card layouts.
- **Motion Safe**: Fully respects `prefers-reduced-motion: reduce` by killing the transition entirely.

## 🛠️ Usage

Open `demo.html` in your browser. All code is contained within `style.css`. Hover over the gradient card to see the depth!

You can apply the proposed utility classes to any card component:

```html
<!-- The wrapper establishes the 3D viewport -->
<div class="em-perspective-parent">
  <!-- The card itself tilts on hover -->
  <div class="em-hover-tilt">My beautiful 3D card content!</div>
</div>
```

_Tip for developers: You can add `transform: translateZ(50px)` to elements inside the card to make them float above the background for a true parallax effect!_

_Note: This is submitted via the `submissions/examples/` directory to adhere to the strict CI/CD guidelines preventing external modification of `core/` files. The maintainer can easily merge these rules into `core/utilities.css`._

## 🔗 Related Issue

Resolves Issue #16174
