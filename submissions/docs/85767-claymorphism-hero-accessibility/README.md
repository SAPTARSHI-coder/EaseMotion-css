# Claymorphism Hero Banner Section — Accessibility Setup

## Overview

This guide documents an accessible claymorphism hero banner.

The visual style uses soft surfaces and depth while keeping semantic headings and links.

## Markup

```html
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__content">
    <p class="hero__eyebrow">New release</p>
    <h1 id="hero-title">Build better interfaces</h1>
    <p class="hero__summary">A responsive component with accessible content structure.</p>
    <a class="hero__action" href="#learn">Learn more</a>
  </div>
</section>
```

## Accessibility

Use one meaningful heading for the hero's primary message.

Keep action links as native anchors.

Do not rely on shadow, color, or depth to communicate meaning.

Ensure text and action contrast remains readable against the clay surface.

Preserve visible keyboard focus.

## Custom Properties

```css
.hero {
  --hero-surface: #f3e8ff;
  --hero-text: #241b35;
  --hero-accent: #7c3aed;
  --hero-radius: 2rem;
}
```

Use theme overrides rather than duplicating component rules.

## Responsive Behavior

Let hero content wrap naturally on small screens.

Avoid fixed heights that clip headings or actions.

Keep the primary action within the normal reading order.

## Reduced Motion

Decorative transforms and shadows should not be required for comprehension.

Respect `prefers-reduced-motion` for optional transitions.

## Keyboard Testing

Tab through the action and verify the focus indicator.

Test browser zoom and keyboard-only navigation.

Confirm no interaction depends on hover.

## Visual Testing

Check contrast at every supported theme value.

Test mobile, tablet, and desktop widths.

Verify long headings do not overflow.

## Files

`README.md` contains accessibility guidance.

`demo.html` is the standalone hero example.

`style.css` contains responsive claymorphism presentation.
