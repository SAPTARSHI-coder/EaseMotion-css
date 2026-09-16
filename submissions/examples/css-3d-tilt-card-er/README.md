# 3D Tilt Card

A pure CSS card component with a 3D perspective tilt effect and a dynamic shine overlay on hover.

## What does this do?

Creates a card that tilts in 3D space when hovered, with a moving radial-gradient shine effect that follows the tilt direction, giving a realistic depth and lighting feel without any JavaScript.

## How is it used?

```html
<div class="tilt-card">
    <div class="tilt-card__shine"></div>
    <div class="tilt-card__content">
        <h2 class="tilt-card__title">Card Title</h2>
        <p class="tilt-card__text">Card description goes here.</p>
        <span class="tilt-card__tag">Tag</span>
    </div>
</div>
```

## Why is it useful?

It demonstrates how modern CSS properties like `perspective`, `transform-style: preserve-3d`, `translateZ`, and `radial-gradient` can be combined to create immersive 3D interactions that previously required JavaScript libraries. It fits EaseMotion CSS by providing a reusable, animation-driven UI component that enhances user engagement through motion and depth.
