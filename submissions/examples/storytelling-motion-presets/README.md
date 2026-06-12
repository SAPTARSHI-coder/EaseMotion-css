# Storytelling Motion Presets

## Overview

Storytelling Motion Presets change the way developers apply animation by focusing on intent instead of effect names. Use classes like `.introduce`, `.highlight`, `.reveal`, `.showcase`, `.celebrate`, and `.focus` to describe the experience you want users to feel.

## Problem Statement

Traditional animation utilities force developers to think in terms of mechanics: fade, slide, zoom. That means each interaction requires assembling multiple classes, estimating easing curves, and guessing which combination feels right.

Modern UI motion should be written the way designers describe experiences: "make this feel like a celebration," "draw attention gently," or "reveal this feature naturally."

## Proposed Solution

This feature introduces a CSS-only preset system that maps storytelling intent to polished motion. Each preset is a curated animation combination that includes opacity, transform, easing, and visual polish by default.

Developers no longer need to choose between out-of-context effect names. They choose the story:

- Introduce content softly.
- Highlight a key card.
- Reveal details progressively.
- Showcase products with emphasis.
- Celebrate user success.
- Focus user attention subtly.

## Available Storytelling Presets

### `.introduce`

- Fade in
- Slide up
- Smooth, welcoming easing
- Best for hero sections, onboarding content, and first impressions

### `.highlight`

- Gentle scale
- Soft glow
- Attention motion that feels polished without being loud
- Ideal for pricing cards, featured items, and callout panels

### `.reveal`

- Progressive fade
- Upward motion
- Natural settle effect
- Great for feature lists, content reveals, and progressive announcements

### `.showcase`

- Zoom in
- Fade in
- Slight emphasis on scale and arrival
- Built for product showcases, hero visuals, and landing page highlights

### `.celebrate`

- Bounce
- Glow
- Positive motion with a warm reward feeling
- Perfect for success messages, confirmations, and milestone feedback

### `.focus`

- Subtle fade
- Scale in
- Directional attention motion
- Designed for notifications, dashboard updates, and focused highlights

## Usage Examples

Add a storytelling preset class directly to any element:

```html
<div class="panel animate-intent introduce">
  <h3>Welcome aboard</h3>
</div>
```

```html
<article class="card animate-intent highlight">
  <h3>Featured plan</h3>
</article>
```

```html
<section class="card animate-intent celebrate">
  <h3>Success!</h3>
</section>
```

## Benefits

- Semantic motion that reads like human intent.
- Dramatically simplified animation authoring.
- Consistent motion language across pages.
- Pure CSS implementation with no JavaScript.
- Responsive and accessible by default.
- Easy to reuse in modern SaaS UI patterns.

## Comparison With Traditional Animation Utilities

Traditional utilities require manually combining separate motion effects:

```html
<div class="fade-in slide-up ease-out duration-800"></div>
```

With Storytelling Motion Presets, the same intent is expressed directly:

```html
<div class="animate-intent introduce"></div>
```

This moves the API away from animation mechanics and toward the experience designers and product teams actually describe.

## Future Improvements

- Add additional presets for exit states, emphasis, and onboarding flows.
- Create semantic variants like `.introduce-soft` or `.celebrate-strong`.
- Build an auto-stagger utility for lists that works with intent presets.
- Add theme-aware motion custom properties for duration and glow strength.
- Introduce a JavaScript helper for conditional preset application based on scroll and user interaction.

## Alignment With EaseMotion CSS Philosophy

This example is built around the guiding principle of EaseMotion CSS:

> If you can describe it in English, you should be able to write it as a class.

These storytelling presets make motion vocabulary feel natural, expressive, and easy to use in real product interfaces.
