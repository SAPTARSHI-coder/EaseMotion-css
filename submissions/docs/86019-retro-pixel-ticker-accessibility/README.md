# Retro Pixel Ticker — Accessibility

## Overview
This guide documents accessibility considerations for the Retro Pixel Ticker.
The component presents scrolling or changing information with a pixel-inspired style.
Accessibility remains independent of the decorative presentation.

## Purpose
Use a ticker for short, secondary updates or announcements.
Do not place essential instructions only inside moving content.
Provide a readable static alternative when content changes dynamically.

## Semantics
Give the ticker a descriptive label or heading.
Keep important content in the document structure.
Use meaningful text instead of decorative symbols as labels.
Avoid unnecessary ARIA roles when native HTML is sufficient.

## Motion
Continuous movement can create accessibility problems.
Prefer paused or user-controlled motion where practical.
Respect `prefers-reduced-motion`.
Do not require users to read content while it is moving.

## Keyboard
Interactive pause controls must be keyboard accessible.
Use a native button for pause and resume actions.
Keep focus visible at all times.
Ensure focus does not become trapped inside the ticker.

## Screen Readers
Provide a nonmoving version for assistive technology when needed.
Avoid repeatedly announcing unchanged decorative content.
Use live regions only for meaningful dynamic updates.
Keep announcements concise and intentional.

## Responsive Behavior
The ticker should remain readable on small screens.
Avoid forcing horizontal scrolling for static alternatives.
Allow long text to wrap when motion is disabled.

## Styling
The retro pixel appearance should remain secondary to readability.
Use high-contrast text and backgrounds.
Keep controls visually distinct from decorative ticker content.

## Customization
Adjust pixel typography and borders without changing semantics.
Use CSS variables for surfaces, accents, spacing, and timing.
Keep accessibility-focused overrides after theme defaults.

## Usage
Copy the markup from the demo into the target page.
Replace sample ticker items with short project-specific messages.
Add a pause control when the ticker moves automatically.

## Testing
Test with keyboard navigation.
Test with reduced motion enabled.
Test with a screen reader.
Test long messages.
Test narrow viewports.
Test the pause and resume controls.

## Browser Support
The implementation uses standard HTML and CSS.
Modern browsers support the media query and layout features used here.

## Files
`README.md` contains this accessibility guide.
`demo.html` contains the standalone ticker demonstration.
`style.css` contains the presentation and motion rules.

## Summary
The ticker can retain its retro style without sacrificing usability.
Give users control over movement and provide meaningful static content.
Use the demo as the reference implementation for accessible integration.
