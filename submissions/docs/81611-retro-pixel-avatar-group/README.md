# Retro Pixel Avatar Group — Advanced Styling

## Overview
Advanced styling guidance for a retro pixel avatar group.
The component presents multiple identities in a compact, visually distinctive group.

## Markup
```html
<div class="avatar-group" aria-label="Project contributors">
  <span class="avatar" aria-label="Ari">AR</span>
  <span class="avatar" aria-label="Mina">MI</span>
  <span class="avatar" aria-label="Dev">DV</span>
</div>
```

## Class Naming
`avatar-group` is the parent block.
`avatar` represents each visual identity.
Use modifiers for density or size variants rather than page selectors.

## Advanced Styling
Layer avatars with controlled overlap.
Use a consistent pixel-inspired border and radius.
Keep the visual treatment readable at small sizes.

## Variables
Expose avatar size, gap, border, surface, text, and shadow values.

```css
.avatar-group { --avatar-size: 3rem; --avatar-gap: -.6rem; }
```

## Accessibility
Give each meaningful avatar an accessible name.
If an avatar is decorative, hide it from assistive technology.
Do not communicate identity through color alone.

## Keyboard Guidance
If avatars are interactive, use native links or buttons.
Provide visible focus states and logical tab order.

## Responsive Behavior
Reduce overlap on very narrow screens when readability would suffer.
Avoid shrinking avatars below a usable size.

## Motion
Optional hover movement should respect reduced-motion preferences.
No essential identity information should depend on animation.

## Testing
Test small screens, zoom, keyboard focus, contrast, and screen readers.
Test groups with one, three, and many avatars.

## Files
`README.md` is the advanced styling guide.
`demo.html` is the standalone example.
`style.css` contains the presentation layer.

## Maintenance
Keep avatar content semantic.
Keep visual effects isolated to component classes.
