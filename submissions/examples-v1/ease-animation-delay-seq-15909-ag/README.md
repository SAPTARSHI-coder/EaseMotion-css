# Animation Delay Sequences Demo

This submission demonstrates four practical patterns for CSS animation stagger sequences using incremental `animation-delay` values. All delays are driven via the `--stagger-delay` CSS custom property set directly on each element.

---

## Patterns Demonstrated

| Pattern       | Keyframe            | Effect                            |
| ------------- | ------------------- | --------------------------------- |
| Card Stagger  | `staggerFadeUp`     | Cards fade in and rise from below |
| List Slide-In | `staggerSlideRight` | Items slide in from the left      |
| Grid Wave     | `staggerScale`      | Cells pop in with elastic scale   |
| Word-by-Word  | `staggerFadeUp`     | Words animate in sequentially     |

## Core Pattern

```css
/* Each item gets an incremental --stagger-delay */
.item:nth-child(1) {
  --stagger-delay: 0s;
}
.item:nth-child(2) {
  --stagger-delay: 0.1s;
}
/* ... */

/* Parent triggers animation via a class toggle */
.container.is-played .item {
  animation: staggerFadeUp 0.45s ease both;
  animation-delay: var(--stagger-delay, 0s);
}
```

The `is-played` class is toggled by JavaScript, allowing the sequence to be replayed by removing and re-adding the class (after forcing a reflow with `element.offsetWidth`).

## Verification Steps

1. Open `demo.html` in a browser.
2. Verify all four demos animate on page load with distinct stagger timing.
3. Click **Replay** on any demo to re-trigger its sequence.
4. Enable `prefers-reduced-motion` — verify all elements appear immediately without animation.
