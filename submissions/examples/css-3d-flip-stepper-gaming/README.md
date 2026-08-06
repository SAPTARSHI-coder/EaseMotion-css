# 3D-Flip Stepper for Gaming Hub Layouts

A vertical stepper where each step flips in from a 3D perspective, designed for gaming mission trackers.

## What does this do?

Renders a vertical step tracker where each step enters with a `rotateX(-80deg → 0)` perspective flip and staggered delay, giving a satisfying card-flip reveal for quest/mission progression.

## How is it used?

```html
<div class="flip-stepper">
  <div class="flip-step flip-step--done">
    <div class="flip-step__face">
      <div class="flip-step__marker">
        <span class="flip-step__check-icon">✓</span>
        <span class="flip-step__num">1</span>
      </div>
      <div class="flip-step__info">
        <h3 class="flip-step__title">Step Title</h3>
        <p class="flip-step__desc">Description</p>
      </div>
      <span class="flip-step__tag flip-step__tag--done">Complete</span>
    </div>
  </div>
</div>
```

## Why is it useful?

Gaming UIs thrive on tactile, satisfying feedback. The 3D flip entrance uses `perspective` and `rotateX` for a card-flip effect that feels physical and game-like, without any JS animation library.

## CSS Custom Properties

| Property      | Description       | Default   |
| ------------- | ----------------- | --------- |
| `--fs-accent` | Active step color | `#7c6cff` |
| `--fs-done`   | Completed color   | `#34d399` |
| `--fs-card`   | Card background   | `#151820` |
| `--fs-border` | Border color      | `#252a36` |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
