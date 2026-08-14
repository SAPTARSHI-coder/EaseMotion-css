# 3D Accordion

Documentation and standalone usage guide for issue #78659.

## Overview

The 3D Accordion combines expandable content with a restrained perspective effect.
It organizes related information while adding visual depth to each panel transition.
The pattern works well for FAQs, documentation sections, product details, and settings.
Native buttons provide predictable interaction and keyboard behavior.
The component keeps content meaningful even when visual movement is removed.

## Features

- Expandable accordion panels.
- Subtle 3D perspective treatment.
- Native button triggers.
- `aria-expanded` state communication.
- `aria-controls` relationships between triggers and panels.
- Responsive spacing and panel sizing.
- Reduced-motion support.

## Demo

Open `demo.html` in a modern browser to preview the accordion.
Activate each trigger to reveal its associated content panel.
Use Tab to navigate between triggers with the keyboard.
Observe the perspective transition during normal interaction.
Enable reduced-motion to verify that the visual movement is simplified.

## Usage

Create one native button for each accordion trigger.
Give every panel a unique identifier.
Connect each trigger with its panel using `aria-controls`.
Update `aria-expanded` whenever a panel changes state.
Keep the panel content directly associated with its trigger in the markup.
Link `style.css` through the host project's normal stylesheet pipeline.

## Accessibility

Native buttons provide expected keyboard interaction.
The expanded state is exposed through `aria-expanded`.
The controlled relationship is described by `aria-controls`.
Content remains readable when animation is disabled.
Focus indicators should remain visible after custom styling.
Motion is reduced when `prefers-reduced-motion` is enabled.

## Responsive Behavior

Panels use flexible widths so they remain inside their parent container.
Spacing decreases when the viewport becomes narrow.
Perspective depth can be reduced on smaller screens.
Long panel content wraps naturally instead of causing page overflow.
Triggers remain large enough to interact with on touch screens.

## Customization

Adjust perspective depth to control the intensity of the 3D effect.
Change panel padding to control content density.
Modify border radius and shadow values for different surface styles.
Update transition duration to match the host interface.
Change trigger typography without changing its semantic role.
Keep expanded and collapsed states visually distinguishable.

## Implementation Notes

The demo uses native controls and focused state management.
CSS provides perspective, transitions, panel styling, and responsive behavior.
The HTML structure remains understandable without the visual effect.
The component can be adapted to single-open or multi-open accordion behavior.
The implementation does not require an external component library.

## File Structure

- `demo.html` — expanded accordion demonstration.
- `style.css` — 3D panel and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard HTML attributes, CSS transforms, transitions, and media queries.
The accordion remains functional when decorative 3D styling is unavailable.

## Testing Checklist

- Confirm every trigger is keyboard accessible.
- Verify `aria-expanded` matches the visible panel state.
- Confirm `aria-controls` references the correct panel.
- Resize the viewport and inspect panel wrapping.
- Test with reduced-motion enabled.
- Check focus visibility and content contrast.

## Reuse

Replace the example panel text with project-specific content.
Keep trigger labels concise and descriptive when adapting the component.
Follow repository contribution and licensing conventions when reusing the example.
