# Cyberpunk Team Profile Card — Accessibility Setup

## Overview
This guide documents accessibility setup for a Cyberpunk Team Profile Card.

The component presents identity, role, and biography information.

## Markup

```html
<article class="team-card">
  <img class="team-card__avatar" src="avatar.jpg" alt="Alex Morgan">
  <div class="team-card__content">
    <h2>Alex Morgan</h2>
    <p class="team-card__role">Product Designer</p>
    <p>Designs clear interfaces and reusable systems.</p>
  </div>
</article>
```

Use meaningful alt text for identity images.

Decorative imagery should use empty alt text.

## Accessibility

Keep text contrast strong against dark surfaces.

Do not use neon color as the only information cue.

Use headings for member names.

Interactive profiles should use native anchors.

## Keyboard Navigation

Native links support Tab and activation keys.

Keep focus indicators visible against the cyberpunk theme.

Do not make the entire card focusable unless it is an actual link.

## Class Structure

`team-card` is the wrapper.

`team-card__avatar` identifies the profile image.

`team-card__content` contains text.

`team-card__role` identifies the role.

## Custom Properties

```css
.team-card {
  --team-surface: #0c1020;
  --team-text: #f5f7ff;
  --team-accent: #45f3ff;
  --team-focus: #ffffff;
}
```

## Responsive Behavior

Let identity content stack on narrow screens.

Keep names and roles readable at high zoom.

## Reduced Motion

Disable decorative glow movement when reduced motion is requested.

## Testing

Test alt text, contrast, keyboard focus, zoom, mobile layout, and reduced motion.

## Files

`README.md` contains accessibility guidance.

`demo.html` contains the example.

`style.css` contains responsive presentation.

## Summary

Semantic headings, useful image alternatives, native links, visible focus, and strong contrast keep the cyberpunk profile accessible.