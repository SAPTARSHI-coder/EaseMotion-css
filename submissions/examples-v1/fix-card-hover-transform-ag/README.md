# Fix ease-card Hover Paint-Free Lift

## What does this do?
Replaces the animated `box-shadow` transition with a `transform: translateY(-4px)`
transition on hover. Both shadow values are declared statically so only the
GPU-composited transform property animates.

## How is it used?
```html
<div class="ease-card" tabindex="0">
  <p class="ease-card__title">Card Title</p>
  <p class="ease-card__body">Content here.</p>
</div>
```

## Why is it useful?
Animating `box-shadow` triggers repaint on every frame. Animating `transform`
only uses the GPU compositor — eliminating paint entirely and making the
hover effect butter-smooth on all devices. Fixes: #35803
