# 3D Tilt Card (`em-card-tilt-3d`)

A utility to add realistic depth to UI cards using 3D CSS transforms.

## What does this add?
It provides a subtle 3D tilt (rotate on X and Y axes) when a user hovers over an element, along with an optional inner class to elevate child elements off the background using `translateZ`.

## How to use it?

1. Apply the `.em-card-tilt-3d` class to your main card container.
2. (Optional) Apply the `.em-card-tilt-3d-content` class to the inner wrapper of your card to make it float towards the user.

```html
<div class="em-card-tilt-3d card-wrapper">
  <div class="em-card-tilt-3d-content card-content">
    <h2>Premium Depth</h2>
    <p>Hover over this card to see a subtle 3D tilt effect.</p>
  </div>
</div>
```

## Why does it fit EaseMotion CSS?
EaseMotion CSS focuses on bringing elements to life. Adding depth to UI cards is a common requirement for premium landing pages. This utility relies purely on CSS `perspective`, `transform-style: preserve-3d`, and `rotate3d` to create a realistic effect without any JavaScript overhead, staying true to our animation-first and human-readable philosophy.
