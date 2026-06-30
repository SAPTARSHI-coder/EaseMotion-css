# Animated Cursor Trail

## What it does

Creates a trailing particle effect that follows the user's mouse cursor. Multiple layers with staggered transition delays create a smooth, comet-like trail.

## How to use it

Add the trail elements to your page:

<div class="ease-cursor-trail"></div>
<div class="ease-cursor-trail-2"></div>
<div class="ease-cursor-trail-3"></div>

Add JavaScript for cursor tracking:

<script>
document.addEventListener('mousemove', function(e) {
    document.documentElement.style.setProperty('--ease-cursor-x', e.clientX - 6 + 'px');
    document.documentElement.style.setProperty('--ease-cursor-y', e.clientY - 6 + 'px');
});
</script>

## Variants

- ease-cursor-trail-glow - Adds blur filter for glowing effect
- ease-cursor-trail-sparkle - Adds rotating sparkle emoji
- ease-cursor-trail-large - Larger trail particles (20px)
- ease-cursor-trail-gradient - Gradient background instead of radial

## Layers

- .ease-cursor-trail - Primary trail (fastest, 0.05s delay)
- .ease-cursor-trail-2 - Secondary trail (0.1s delay)
- .ease-cursor-trail-3 - Tertiary trail (0.15s delay)
- .ease-cursor-trail-4 - Quaternary trail (0.2s delay)
- .ease-cursor-trail-5 - Quintenary trail (0.25s delay)

## Accessibility

Disables on touch devices and when prefers-reduced-motion is active.

## Why it fits EaseMotion CSS

- Minimal JavaScript (only cursor position tracking)
- Pure CSS animation for pulse and trail effects
- Composable layers
- Respects accessibility preferences
- Smooth, performant transitions
