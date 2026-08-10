# Animation Play State Utility Classes

## 1. What does this do?
Adds three composable utility classes — `animate-pause`, `animate-running`, and
`hover-pause` — that control `animation-play-state` without any JavaScript,
letting developers freeze or resume any looping animation by toggling a single class.

## 2. How is it used?

Apply the utilities alongside any existing animation class:

```html
<!-- Permanently paused -->
<div class="ease-bounce animate-pause">Bouncing (paused)</div>

<!-- Always running (explicit override) -->
<div class="ease-pulse animate-running">Pulsing</div>

<!-- Pauses automatically on hover — no JS needed -->
<div class="ease-rotate hover-pause">Hover to pause rotation</div>

<!-- JS toggle: add/remove animate-pause to freeze/resume -->
<div class="ease-bounce" id="controlled">Controlled by button</div>
<button onclick="document.getElementById('controlled').classList.toggle('animate-pause')">
  Toggle
</button>
```

The three classes:

| Class | Property set | When to use |
|---|---|---|
| `animate-pause` | `animation-play-state: paused` | Freeze an animation on load or via JS toggle |
| `animate-running` | `animation-play-state: running` | Explicitly resume (override a paused state) |
| `hover-pause` | paused on `:hover`, running otherwise | Pause on hover — no JS needed |

## 3. Why is it useful?

EaseMotion CSS's looping animations (`.ease-bounce`, `.ease-rotate`, `.ease-pulse`,
`.ease-ping`, `.ease-float`) run indefinitely by default. There is currently no way
to pause them without writing custom CSS or JavaScript. These three utility classes
fill that gap in a way that is:

- **Human-readable** — `animate-pause` says exactly what it does
- **Composable** — works with any existing EaseMotion animation class, present or future
- **Zero JavaScript** — `hover-pause` uses pure CSS `:hover`
- **JS-friendly** — `animate-pause` can be toggled via `classList` for richer controls
- **Accessible** — freezing an animation on hover also benefits users who prefer
  reduced motion but don't have the OS setting enabled

This fits EaseMotion CSS's philosophy: if you can say "pause the animation", you should
be able to write it as a class.
