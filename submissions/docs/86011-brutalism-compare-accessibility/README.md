# Brutalism Compare — Accessibility

## Overview
This submission documents the Brutalism Compare component.
The accessibility scope focuses on clear semantics and keyboard use.
The visual treatment remains intentionally bold and minimal.
The component is designed for comparison-focused interfaces.

## Purpose
Use the component when two or more options need direct comparison.
Keep headings descriptive so users understand each comparison group.
Use concise supporting text for important differences.
Avoid relying on color alone to distinguish states.

## Structure
The main comparison wrapper contains the component heading.
Each comparison item should have a unique descriptive title.
Related values should remain grouped in the same visual and semantic region.
Links and buttons should use native interactive elements.

## Accessibility
Provide an accessible name for the comparison section.
Use heading levels in a logical order.
Ensure text and controls have sufficient contrast.
Keep focus indicators visible.
Do not hide keyboard focus with outline removal.

## Keyboard Support
Interactive controls must be reachable with Tab.
The focus order should follow the visual reading order.
Use Enter or Space according to the native control type.
Avoid clickable generic containers when a button or link is appropriate.

## Screen Readers
Use meaningful text instead of decorative labels.
If an icon communicates information, provide an accessible label.
Do not duplicate long visual text unnecessarily.
Keep status information available to assistive technology.

## Responsive Behavior
The comparison layout should adapt to narrow screens.
Columns can stack when horizontal space becomes limited.
Keep each comparison item readable without horizontal scrolling.
Maintain adequate spacing between interactive targets.

## Styling
The stylesheet keeps the brutalist visual language intentionally direct.
Borders, spacing, typography, and surfaces remain easy to customize.
Avoid decorative animation when it interferes with comprehension.

## Reduced Motion
Respect the user's reduced-motion preference.
Disable nonessential transitions when reduced motion is enabled.
The comparison remains fully usable without animation.

## Usage
Copy the component markup from the demo into a project.
Link the supplied stylesheet after the project's base styles.
Replace the sample comparison content with project-specific values.
Keep the semantic structure intact when changing the visual design.

## Customization
Adjust CSS custom properties for spacing and surface values.
Change typography to match the host design system.
Keep contrast checks after any color customization.

## Testing Checklist
Test keyboard-only navigation.
Test visible focus states.
Test at mobile and desktop widths.
Test with a screen reader.
Test at increased browser zoom.
Test with reduced motion enabled.
Test long comparison labels.

## Browser Support
The component uses standard HTML and CSS features.
Modern browsers provide the intended responsive behavior.
Always test the final theme in the target browser set.

## Files
`README.md` contains this implementation guide.
`demo.html` contains the standalone accessibility example.
`style.css` contains the component presentation rules.

## Summary
The component combines brutalist presentation with accessible structure.
Keep native semantics wherever possible.
Use the provided demo as the reference implementation for reuse.
