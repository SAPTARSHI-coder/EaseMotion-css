# Guided Breathing Circle — Issue #14029

## What does this do?

A guided meditation breathing circle component with CSS expand/contract animation (scale 1 → 1.4 → 1) and synchronized text cues ("Breathe In", "Hold", "Breathe Out", "Rest") with phase guidance and countdown.

## How is it used?

```html
<div class="ease-breathe">
  <div class="ease-breathe-circle"></div>
  <div class="ease-breathe-circle-inner"></div>
  <span class="ease-breathe-text">Breathe In</span>
</div>
```

The `.ease-breathe-circle` animates with a `breatheCycle` keyframe (8s default). Cycle duration can be adjusted via JS by updating `animationDuration`. Text and phase cues update at each quarter-cycle point. Inner circle provides a depth effect with opposite phase animation.

## Why is it useful for EaseMotion CSS?

Guided breathing is a core pattern in wellness and meditation apps. This component demonstrates how CSS animations can power mindfulness tools, aligning with EaseMotion's animation-first philosophy while remaining accessible with `prefers-reduced-motion` support.
