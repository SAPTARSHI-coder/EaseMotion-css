# Shake Border Entrance

## What does this do?

This submission adds a pure CSS entrance animation that makes bordered elements shake briefly before settling into their final position.

## How is it used?

Add the animation class to any bordered card, alert, or button:

```html
<article class="shake-border-card">
  <h2>Security Notice</h2>
  <p>Review the highlighted setting before continuing.</p>
</article>

<button class="shake-border-button" type="button">Review changes</button>
```

## Why is it useful?

The effect gives bordered components a clear entrance cue without JavaScript or external assets. It fits EaseMotion CSS because it is small, reusable, responsive, and includes a reduced-motion fallback for users who prefer less animation.
