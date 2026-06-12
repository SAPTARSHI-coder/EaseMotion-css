# Ease Bounce Sn

## What does this do?

A CSS-only bounce animation utility that creates bouncing effects for attention-grabbing UI elements, using physics-based CSS easing for natural-looking motion.

## How is it used?

```html
<!-- Continuous bounce -->
<div class="animate-bounce">Bouncing element</div>

<!-- Single entrance bounce -->
<div class="animate-bounce-once">Bounces once on load</div>

<!-- Hover bounce -->
<div class="hover-bounce">Bounces on hover</div>

<!-- Custom intensity and speed -->
<div class="animate-bounce" style="--bounce-height: 40px; --bounce-speed: 0.3s">
  High, fast bounce
</div>
```

Speed modifier classes:

- `.bounce-fast` — sets `--bounce-speed: 0.3s`
- `.bounce-slow` — sets `--bounce-speed: 1s`

Customize via CSS custom properties:

- `--bounce-height` — controls bounce distance (default: `20px`)
- `--bounce-speed` — controls animation duration (default: `0.6s`)

## Why is it useful?

Bounce animations are great for call-to-action buttons, notification badges, download prompts, and social media interaction indicators. This implementation uses CSS `cubic-bezier` easing for natural physics-based motion, is zero-dependency CSS-only, respects `prefers-reduced-motion`, and reduces intensity on small screens for better UX.
