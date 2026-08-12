# Slide-Up Stepper for Gaming Hub Layouts

A vertical stepper that slides up each step with staggered timing, designed for gaming quest/mission trackers.

## What does this do?

Renders a vertical step-by-step progress tracker where each step slides up from below with a staggered delay, using CSS transitions and spring easing for a snappy entrance.

## How is it used?

```html
<div class="stepper" role="list" aria-label="Quest steps">
  <div class="step step--done" role="listitem">
    <div class="step__marker">
      <svg
        class="step__check"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span class="step__num">1</span>
    </div>
    <div class="step__content">
      <h3 class="step__title">Step Title</h3>
      <p class="step__desc">Step description</p>
    </div>
    <span class="step__badge step__badge--done">Done</span>
  </div>
</div>
```

## Why is it useful?

Gaming hubs need clear visual progression for quests and missions. The slide-up stagger creates a satisfying reveal that matches the reward-driven feel of gaming UIs, without any JS animation library.

## CSS Custom Properties

| Property       | Description       | Default   |
| -------------- | ----------------- | --------- |
| `--su-accent`  | Active step color | `#6d5cff` |
| `--su-done`    | Completed color   | `#22c55e` |
| `--su-surface` | Card background   | `#181b23` |
| `--su-border`  | Border color      | `#272c3a` |
| `--su-radius`  | Card radius       | `12px`    |

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
