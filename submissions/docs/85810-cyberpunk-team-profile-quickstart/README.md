# Cyberpunk Team Profile Card — Quickstart

## Overview

This guide documents the Cyberpunk Team Profile Card quickstart pattern.

The component uses semantic profile content, modifier classes, and CSS custom properties.

It is designed for a team directory, product page, or project showcase.

The example uses HTML and CSS without JavaScript dependencies.

## Markup

Create a profile article with a name, role, image, and supporting description.

Use a real heading for the member name and descriptive alternative text for profile images.

Keep action links as native anchors so keyboard users can reach them naturally.

## Example

```html
<article class="team-card team-card--neon">
  <img class="team-card__avatar" src="avatar.jpg" alt="Alex Morgan">
  <div class="team-card__body">
    <p class="team-card__role">Frontend Engineer</p>
    <h2 class="team-card__name">Alex Morgan</h2>
    <p class="team-card__bio">Builds accessible interface systems.</p>
    <a class="team-card__link" href="#profile">View profile</a>
  </div>
</article>
```

## Class Structure

`team-card` is the component block.

`team-card__avatar`, `team-card__body`, and `team-card__link` are component elements.

`team-card--neon` is an optional visual modifier.

Keep modifier classes attached to the component so variants remain predictable.

## CSS Custom Properties

Expose colors, borders, glow strength, spacing, and radius through custom properties.

```css
.team-card {
  --card-surface: #111827;
  --card-accent: #22d3ee;
  --card-glow: 0 0 2rem rgb(34 211 238 / 30%);
}
```

Override variables at the component or theme scope rather than duplicating selectors.

## Keyboard Guidance

Use native links and buttons for interactive actions.

Keep the visual focus indicator visible.

Do not require hover to reveal essential information.

Maintain a logical DOM order so keyboard navigation follows the content order.

## Accessibility

Provide meaningful `alt` text for informative images.

Use decorative images with empty alternative text when appropriate.

Maintain readable contrast between text and the cyberpunk surface.

Do not communicate membership status through color alone.

## Responsive Use

Let the card shrink within its parent container.

Use a single-column layout on narrow screens.

Avoid fixed widths that create horizontal scrolling.

Test the component at mobile, tablet, and desktop widths.

## Reduced Motion

Keep glow and hover transitions optional.

Respect `prefers-reduced-motion` for decorative effects.

The card must remain fully usable when motion is reduced.

## Customization

Change the accent variable to match a product theme.

Adjust the surface variable for light or dark variants.

Tune glow intensity without changing component markup.

Add additional metadata while preserving heading hierarchy.

## Testing

- Verify keyboard navigation.
- Verify visible focus states.
- Check image alternatives.
- Test browser zoom.
- Test narrow screens.
- Test reduced-motion preferences.
- Confirm no essential content depends on hover.

## Files

`README.md` contains this quickstart guide.

`demo.html` provides a standalone visual example.

`style.css` contains the presentation and responsive rules.

The three files are intended to be copied into a documentation example.
