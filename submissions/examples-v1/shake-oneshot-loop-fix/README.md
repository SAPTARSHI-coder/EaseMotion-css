# Fix: ease-shake Misclassified as Looping Animation

**Issue:** [#6645](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/6645)

## Problem

`.ease-shake` uses `animation-fill-mode: both` with **no `infinite` keyword**
— making it a one-shot animation that fires once and stops.

However, `docs/index.html` listed it under the **Looping Animations** table
alongside `.ease-bounce`, `.ease-rotate`, and `.ease-pulse` which are all
`infinite`. This misleads developers who expect a repeating shake.

## Fix

Two changes:

### 1. CSS — Add `.ease-shake-loop` as explicit infinite variant

```css
/* One-shot — fires once (correct, just wrong docs category) */
.ease-shake {
  animation: ease-kf-shake var(--ease-shake-duration) var(--ease-ease) both;
}

/* Looping — new infinite variant */
.ease-shake-loop {
  animation: ease-kf-shake var(--ease-shake-duration) var(--ease-ease) infinite;
}
```

### 2. Docs — Move to correct section

| Class | Before | After |
|---|---|---|
| `.ease-shake` | ❌ Looping Animations | ✅ One-shot / Attention |
| `.ease-shake-loop` | — (missing) | ✅ Looping Animations |

## Usage

```html
<!-- One-shot: form error, wrong input (fires once) -->
<div class="ease-shake">Invalid input</div>

<!-- Looping: persistent attention indicator -->
<div class="ease-shake-loop">Awaiting input...</div>

<!-- Replay one-shot via JS -->
<script>
  el.classList.remove('ease-shake');
  void el.offsetWidth; // reflow
  el.classList.add('ease-shake');
</script>
```

## How to Verify

1. Open `demo.html`
2. `.ease-shake` box — click Replay to see it fires once and stops
3. `.ease-shake-loop` box — shakes continuously as expected

## Files
- `style.css` — adds `.ease-shake-loop`, documents classification in comments
- `demo.html` — live demo of both variants + docs table showing the fix