# Shake Text Emphasis

**What does this do?**
Adds a CSS-only shake animation for short text elements that need a brief attention cue during hover or focus interactions.

**How is it used?**
```html
<button class="shake-text" style="--shake-distance: 5px; --shake-duration: 360ms;">
  Username already taken
</button>
```

**Why is it useful?**
Shake motion is a familiar pattern for validation messages, warning labels, counters, and inline reminders. This fits EaseMotion CSS because it is small, readable, dependency-free, transform-based, and easy for the maintainer to standardize into a configurable text-emphasis utility.
