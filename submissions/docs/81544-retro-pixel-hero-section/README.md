# Retro Pixel Hero Section

Documentation for the Retro Pixel Hero Section requested in issue #81544.

## Scope

This guide covers the basic-usage variant identified in the issue title.
It documents the hero structure, reusable classes, CSS variables, and accessible content patterns.
The component uses CSS presentation rather than requiring a framework or animation library.

## Features

- Retro pixel-inspired visual treatment.
- Semantic hero heading and supporting copy.
- Clear primary call to action.
- Layered decorative pixel accents.
- Custom CSS variables for easy theming.
- Responsive stacking on smaller screens.
- Keyboard-visible focus treatment.
- Reduced-motion support.

## Structure

Use a `<header>` or `<section>` as the hero container.
Place one primary heading before supporting content.
Keep the main call to action as a native link or button.
Decorative pixel shapes should remain separate from meaningful copy.
The complete markup is provided in `demo.html`.

## Class Naming

Use `.hero` for the component root.
Use `.hero__content` for the text block.
Use `.hero__eyebrow` for optional supporting context.
Use `.hero__title` for the main heading.
Use `.hero__description` for supporting copy.
Use `.hero__actions` for primary and secondary actions.
Use `.hero__visual` for decorative pixel artwork.
Use modifier classes for states or presentation variants.

## CSS Variables

Variables cover the background, accent, text, spacing, pixel size, and transition speed.
Override them at the component root to create a different retro palette.
Keep layout values centralized so the hero can be reused consistently.

## Basic Usage

Start with the semantic hero structure from the demo.
Replace the sample heading and copy with project-specific content.
Keep the primary action concise and descriptive.
Add a secondary action only when it provides a meaningful alternative.
Decorative elements can be removed without affecting the content hierarchy.

## Accessibility

Use one clear primary heading for the page or section.
Do not use pixel decoration as a replacement for text.
Ensure links and buttons have descriptive names.
Keep focus indicators visible against the retro background.
Maintain sufficient contrast between copy and surfaces.
Respect `prefers-reduced-motion` for animated accents.

## Responsive Behavior

The desktop layout places content and visual decoration side by side.
The mobile layout stacks the content and visual area vertically.
Typography scales within readable limits.
Action controls wrap naturally when the viewport becomes narrow.
Decorative pixels are reduced on small screens to preserve focus on content.

## Customization

Change the palette through the exposed custom properties.
Adjust pixel block size to create a denser or lighter visual grid.
Modify hero spacing without changing the HTML structure.
Tune accent animation duration while preserving reduced-motion behavior.
Replace the decorative artwork with project-specific shapes if needed.

## Demo

Open `demo.html` directly in a modern browser.
The demo includes a complete hero heading, copy, actions, and pixel decoration.
It is self-contained and requires no build process.

## Files

- `demo.html` — expanded hero usage example.
- `style.css` — formatted retro pixel styling.
- `README.md` — feature-specific documentation.

## Verification

Check the hero at desktop and mobile widths.
Navigate actions using only the keyboard.
Confirm the heading remains the primary visual hierarchy.
Test the page with reduced motion enabled.
Verify that decorative elements do not carry essential information.
