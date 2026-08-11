# Reduced Motion Override

## What does this do?
Adds a global `prefers-reduced-motion` media query override that scales down or disables motion for any element using an `ease-*` utility class, for users who have requested reduced motion at the OS/browser level.

## How is it used?
```html
<div class="ease-demo-card">
  Animated content — motion automatically reduces when the user
  has enabled "reduce motion" in their system settings.
</div>
```
No extra markup or class needed — the override targets `[class*="ease-"]` globally, so it applies automatically to any existing or future EaseMotion animation/transition utility.

## Why is it useful?
Motion-heavy interfaces can cause discomfort (dizziness, nausea, distraction) for users with vestibular disorders or motion sensitivity. Respecting `prefers-reduced-motion` is a baseline accessibility requirement (WCAG 2.3.3). This override collapses animation/transition durations to near-zero and removes transform-based hover motion, while leaving opacity-based feedback intact, so the framework degrades gracefully for users who need it — fitting EaseMotion's animation-first philosophy without excluding accessibility-conscious users.

## Testing
Open DevTools → Rendering tab → emulate `prefers-reduced-motion: reduce`, then reload `demo.html` to see the override applied.
