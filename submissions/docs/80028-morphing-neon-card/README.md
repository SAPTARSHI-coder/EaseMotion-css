# Morphing Neon Card — Usage Guide

## Overview

This guide documents usage of the Morphing Neon Card.

The issue requests a clear usage guide under `submissions/docs/`.

The example presents a card with a luminous border and subtle morphing visual treatment.

The presentation is implemented with CSS and can be reused without a framework.

## Markup

```html
<article class="neon-card">
  <div class="neon-card__glow" aria-hidden="true"></div>
  <div class="neon-card__content">
    <p class="neon-card__eyebrow">Feature</p>
    <h2 class="neon-card__title">Morphing Neon Card</h2>
    <p class="neon-card__text">A reusable content surface with a soft animated neon edge.</p>
    <a class="neon-card__link" href="#details">Explore feature</a>
  </div>
</article>
```

## Class Naming

`neon-card` is the component block.

`neon-card__glow` is the decorative layer.

`neon-card__content`, `__title`, `__text`, and `__link` identify content elements.

Keep decorative layers hidden from assistive technology.

## Usage

Place the card inside a grid, list, or standalone section.

Replace the title, text, and link with application-specific content.

Use the component for short content summaries rather than long documents.

Keep the link label meaningful when several cards appear together.

## CSS Variables

```css
.neon-card {
  --card-surface: #101827;
  --card-accent: #63e6ff;
  --card-secondary: #8b5cf6;
  --card-radius: 1.25rem;
}
```

Variables allow the neon palette to be reused across themes.

## Morphing Effect

The glow layer can use border-radius changes or subtle transforms to create the morphing appearance.

Keep the animation decorative rather than essential.

Use low-amplitude movement so content remains stable.

## Accessibility

Use semantic article markup when the card represents an independent item.

Keep the title in the heading hierarchy of the page.

Ensure the link has a visible focus state.

Do not use the animated glow to communicate required information.

## Keyboard Interaction

The card link must be reachable with the keyboard.

Do not make the entire card clickable with a generic element unless the interaction is implemented accessibly.

Keep focus visible against the dark surface.

## Responsive Behavior

Cards should shrink to the available width.

Keep padding comfortable on mobile screens.

Allow text to wrap naturally.

Avoid fixed heights that clip content.

## Reduced Motion

Respect `prefers-reduced-motion` for the morphing animation.

The static card should remain visually complete when motion is disabled.

## Usage Notes

Load `style.css` after base styles.

Copy the HTML structure into the consuming page.

Repeat the component for multiple feature cards while keeping headings meaningful.

## Testing Checklist

- Test keyboard focus.
- Test link activation.
- Test reduced motion.
- Test narrow screens.
- Test long titles.
- Test long descriptions.
- Test browser zoom.
- Test contrast.

## Documentation Integration

Place the guide under `submissions/docs/` as requested.

Link the guide from the documentation index or cheatsheet.

## Files

`README.md` contains the usage guide.

`demo.html` contains the standalone demonstration.

`style.css` contains the card presentation and animation.

## Summary

The Morphing Neon Card provides a reusable visual surface with a restrained animated glow while keeping content semantic and accessible.
