# Concentric Fitness Activity Rings

## What does this do?

Three concentric progress rings driven by CSS variables for goal completion.

## How is it used?

```html
<div class="activity-rings" style="--move:.72;--exercise:.45;--stand:.9;"><svg viewBox="0 0 120 120" aria-label="Activity rings"><circle class="ring ring--move" cx="60" cy="60" r="54" pathLength="1"/><circle class="ring ring--exercise" cx="60" cy="60" r="42" pathLength="1"/><circle class="ring ring--stand" cx="60" cy="60" r="30" pathLength="1"/></svg></div>
```

Open `demo.html` in a browser to try it.

## Why is it useful?

Readable goal metaphor for habit and fitness UIs with staggered motion.
