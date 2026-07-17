# Motion Personas + Intent-Based Motion

## Overview

Motion Personas + Intent-Based Motion is a flagship EaseMotion feature that shifts animation from implementation-focused classes to human-readable semantic motion.

Instead of selecting a specific animation type, developers choose the personality of the interface and the intent of the motion:

- Personas define the feel of the motion
- Intents define the purpose of the animation

Together they create a more expressive, maintainable animation system.

## Motion Personas

Use one persona to define the motion personality:

- `.ease-persona-premium`
- `.ease-persona-playful`
- `.ease-persona-minimal`
- `.ease-persona-energetic`
- `.ease-persona-cinematic`

Each persona controls animation duration, timing, hover behavior, motion intensity, and reveal style.

## Intent-Based Motion

Use one intent to define the animation purpose:

- `.ease-introduce`
- `.ease-highlight`
- `.ease-confirm`
- `.ease-notify`
- `.ease-celebrate`
- `.ease-warn`

Intents consume persona variables and automatically adapt to the selected motion personality.

## How to use it

Combine a persona and an intent on the same element:

```html
<button class="ease-persona-premium ease-confirm">Save changes</button>
<div class="ease-persona-playful ease-introduce">New widget loaded</div>
<section class="ease-persona-minimal ease-notify">Status update received</section>
```

## Examples

### Premium confirmation

```html
<button class="ease-persona-premium ease-confirm">Save changes</button>
```

### Playful introduction

```html
<div class="ease-persona-playful ease-introduce">New dashboard card available</div>
```

### Minimal highlight

```html
<div class="ease-persona-minimal ease-highlight">Key metric updated</div>
```

### Energetic celebration

```html
<div class="ease-persona-energetic ease-celebrate">Milestone unlocked!</div>
```

### Cinematic warning

```html
<div class="ease-persona-cinematic ease-warn">Review required before publishing</div>
```

## Accessibility

This feature respects `prefers-reduced-motion: reduce` by disabling animation and hover transforms, while preserving layout and visibility.

## Best Practices

- Use personas to express the brand tone or product personality.
- Use intents to express why the motion is happening.
- Combine one persona and one intent for predictable, semantic animation.
- Prefer `ease-introduce` and `ease-notify` for passive UI updates.
- Use `ease-celebrate` and `ease-warn` for stronger emotional moments.

## Production notes

- Uses CSS custom properties for persona variables.
- Intents consume persona variables for scalable combinations.
- Built with lightweight opacity and transform animations.
- Compatible with modern browsers and existing EaseMotion utilities.

Open `demo.html` directly in a browser to preview the system.
