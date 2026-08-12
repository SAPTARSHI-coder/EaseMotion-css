# Typing Terminal

A terminal window that types out its own boot log with a `steps()` typewriter effect and an endlessly blinking caret.

## How is it used?

Wrap output lines in `.line` elements and add a `.type` span for the animated text:

```html
<div class="terminal">
  <p class="line"><span class="prompt">$</span> <span class="type">npm start</span><span class="caret"></span></p>
  <p class="line out one">✓ Server ready</p>
</div>
```

Adding the `.boot` class replays the whole sequence: the typewriter line grows via the `typeLine` keyframe and each `.out` line fades in with a staggered delay.

## Why is it useful?

Typing effects are everywhere in devtools, onboarding screens, and "CLI" marketing pages. This component keeps the motion pure CSS (`steps()` + `max-width`) so it stays cheap to render, works without JS, and follows EaseMotion's principle that an animation should be reusable through one readable class.
