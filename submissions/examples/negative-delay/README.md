# Negative animation-delay

## What does this do?

Demonstrates negative `animation-delay` — a technique that starts an animation partway through its cycle. Used for creating seamless staggered waves (dots bouncing in sequence) and offsetting identical animations to different visual phases.

## How is it used?

```css
.dot {
  animation: bounce 0.6s ease-in-out infinite;
}
.dot:nth-child(1) {
  animation-delay: -0.15s;
}
.dot:nth-child(2) {
  animation-delay: -0.3s;
}
/* or with a custom property: */
.dot {
  animation-delay: calc(var(--i) * -0.15s);
}
```

## Why is it useful?

Negative delay is the key to staggered animations that look like a coordinated wave rather than a sequential start. Unlike positive delay (which waits), negative delay makes elements appear to already be mid-animation — essential for loading spinners, progress indicators, and motion patterns that need to feel continuous and in-sync from the first frame.
