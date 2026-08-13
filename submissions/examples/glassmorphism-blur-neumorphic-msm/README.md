# Glassmorphism Blur Neumorphic Effect

## What does this do?

This submission adds a pure HTML and CSS neumorphic panel that blends soft extruded surfaces with glassmorphism blur styling.

## How is it used?

Place the card markup from `demo.html` in a static page and link the included stylesheet:

```html
<section class="glass-neumo-card">
  <div class="glass-neumo-preview" aria-hidden="true"></div>
  <button class="glass-neumo-button" type="button">Tune blur field</button>
</section>
```

The component works by opening `demo.html` directly in a browser. It does not need JavaScript, external fonts, frameworks, images, or a build step.

## Why is it useful?

EaseMotion CSS encourages expressive motion and approachable UI primitives. This example shows how frosted-glass depth can be paired with neumorphic shadows, clear content hierarchy, keyboard-visible focus states, and reduced-motion support while staying lightweight.

## Accessibility Notes

- Uses semantic headings, a button, and descriptive text.
- Decorative glass layers are marked with `aria-hidden="true"`.
- The primary action has a visible `:focus-visible` state.
- Animations are disabled for users who prefer reduced motion.
