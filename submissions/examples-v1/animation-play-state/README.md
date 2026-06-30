# animation-play-state

## What does this do?

Demonstrates `animation-play-state` — the CSS property that pauses and resumes running animations without removing or restarting them. Three demos: hover-to-pause, toggle button, and a staggered card deck that pauses/resumes as a group.

## How is it used?

```css
/* Pause on hover */
.spinner {
  animation: spin 2s linear infinite;
}
.spinner:hover {
  animation-play-state: paused;
}

/* Toggle via class */
.spinner.paused {
  animation-play-state: paused;
}
```

## Why is it useful?

`animation-play-state` gives developers declarative control over animation timing — perfect for pause-on-hover carousels, accessibility toggles, and performance optimization (pausing off-screen animations). It fits EaseMotion CSS's philosophy of expressive, accessible animation with zero JavaScript overhead.
