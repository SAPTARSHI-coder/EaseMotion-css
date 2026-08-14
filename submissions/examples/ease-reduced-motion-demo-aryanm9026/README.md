# ease-reduced-motion-demo

## 1. What does this do?

A set of entrance and interaction animation components that correctly implement `prefers-reduced-motion` support — substituting motion with opacity transitions rather than disabling animations globally.

## 2. How is it used?

Add the class to any element. Animations trigger on page load. Use stagger helpers for sequential reveals.

```html
<div class="ease-slide-up">Slides up and fades in</div>
<div class="ease-slide-left">Slides from left and fades in</div>
<div class="ease-zoom-in">Scales up and fades in</div>
<div class="ease-flip-in">Flips in on X axis and fades in</div>

<div class="ease-slide-up ease-delay-1">First</div>
<div class="ease-slide-up ease-delay-2">Second</div>
<div class="ease-slide-up ease-delay-3">Third</div>

<button class="ease-pulse-hover">Pulses on hover</button>

<div class="ease-shimmer" style="height: 12px; border-radius: 6px;"></div>
```

When the OS `prefers-reduced-motion: reduce` setting is active, all motion is automatically replaced with a short opacity fade. No class changes needed.

## 3. Why is it useful?

EaseMotion CSS is an animation-first framework, but animations are an accessibility concern. Vestibular disorders, epilepsy, and motion sensitivity affect over 70 million users globally — for them, large translate/scale/rotate animations can cause dizziness, nausea, or seizures.

The standard fix is `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }` — but this is the wrong approach. It silently breaks JavaScript that listens for `animationend` events, and it removes visual feedback entirely, making state changes invisible.

**The correct pattern (used here):** replace motion with a short opacity fade. State changes remain perceivable. `animationend` still fires. The user gets a calmer experience without losing functionality.

This submission is also intended as a **reference pattern** for how reduced-motion support should be applied across EaseMotion CSS. Every animation class in the framework can adopt this same two-layer structure:

```css
.ease-slide-up {
  opacity: 0;
  transform: translateY(32px);
  animation: em-slideUp 0.5s ease forwards;
}

@media (prefers-reduced-motion: reduce) {
  .ease-slide-up {
    transform: none;
    animation-name: em-fadeIn;
  }
}
```

This approach is compliant with **WCAG 2.1 Success Criterion 2.2.2 (Pause, Stop, Hide)**.