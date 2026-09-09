# Cyberpunk Team Profile Card — Responsive Breakpoints Layout

## Overview
This guide documents responsive layout for a Cyberpunk Team Profile Card.

The card presents a member name, role, short bio, and optional avatar.

The visual style uses strong borders and neon-inspired accents.

## Markup

```html
<article class="team-card">
  <div class="team-card__avatar" aria-hidden="true">AM</div>
  <div class="team-card__content">
    <h2>Alex Morgan</h2>
    <p class="team-card__role">Product Designer</p>
    <p>Designs clear interfaces and reusable systems.</p>
  </div>
</article>
```

Use a real image with meaningful alt text when an actual portrait is supplied.

## Class Structure

`team-card` is the component wrapper.

`team-card__avatar` represents the identity visual.

`team-card__content` contains the textual profile.

`team-card__role` identifies the member role.

## Responsive Breakpoints

Use a horizontal arrangement on wide screens.

Reduce spacing at tablet widths.

Stack avatar and content on narrow screens when necessary.

Keep long names and roles from overflowing.

## Custom Properties

```css
.team-card {
  --team-surface: #0c1020;
  --team-text: #f5f7ff;
  --team-accent: #45f3ff;
  --team-border: #45f3ff;
}
```

## Accessibility

Do not use color as the only identity cue.

Provide alt text for meaningful profile images.

Keep headings and role text readable.

Interactive profiles should use native links.

## Keyboard Guidance

Native links remain keyboard accessible.

Keep visible focus indicators.

Avoid focusable decorative wrappers.

## Reduced Motion

Disable optional neon movement under reduced-motion preferences.

## Testing

Test wide, tablet, mobile, long names, zoom, focus, and reduced motion.

## Files

`README.md` documents breakpoints.

`demo.html` contains the standalone card.

`style.css` contains responsive styling.

## Summary

The responsive profile card keeps identity and role information readable while preserving the cyberpunk visual language.