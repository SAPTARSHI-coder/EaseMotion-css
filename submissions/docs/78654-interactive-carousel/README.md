# Interactive Carousel

Documentation and standalone usage guide for issue #78654.

## Overview

The Interactive Carousel presents related content in a horizontal sequence.
Users can move between cards with clearly labelled previous and next controls.
The component works well for features, testimonials, products, or compact galleries.
Its structure separates the viewport, track, cards, and navigation controls.
The example uses native controls and a small amount of focused interaction logic.

## Features

- Previous and next navigation controls.
- Responsive card sizing and spacing.
- Keyboard-accessible native buttons.
- Clear labels for assistive technology.
- Reduced-motion support.
- Flexible card content.
- No external carousel dependency.

## Demo

Open `demo.html` in a modern browser to preview the carousel.
Use the previous and next buttons to move through the card track.
Resize the viewport to observe changes in the visible card arrangement.
Use Tab to verify that controls remain easy to reach with the keyboard.
The cards remain readable even when the viewport becomes narrow.

## Usage

Place the carousel inside a container that defines the available width.
Keep the viewport separate from the navigation controls.
Add or remove cards without changing the control semantics.
Use descriptive headings and content inside each card.
Connect controls to the track movement through the demo interaction logic.
Link `style.css` through the host project's normal stylesheet pipeline.

## Accessibility

Previous and next controls use native buttons.
Each control has an accessible name describing its purpose.
Cards remain readable without relying on hover effects.
Keyboard users can move through controls using normal browser navigation.
Reduced-motion preferences disable or simplify animated movement.
Do not hide essential information only inside animated states.

## Responsive Behavior

The carousel adapts card width to the available viewport.
The number of visible cards can decrease on smaller screens.
Gaps are reduced when the container becomes narrow.
Controls remain accessible without creating horizontal page scrolling.
Long card content should wrap naturally inside each card.

## Customization

Adjust card width to control the visual density of the carousel.
Change gap values to alter spacing between cards.
Modify border radius and shadows to match the project surface style.
Update transition timing to match the site's motion language.
Change viewport padding without changing the navigation semantics.
Keep controls visually distinct from the card content.

## Implementation Notes

The demo keeps the carousel track inside a clipped viewport.
The navigation controls move the track by a predictable amount.
The HTML structure remains understandable without the visual movement.
CSS handles the layout, card styling, and responsive behavior.
The component can be integrated into a larger page without a framework.

## File Structure

- `demo.html` — expanded interactive carousel demonstration.
- `style.css` — carousel layout and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard HTML, CSS layout, transitions, and browser events.
The cards remain readable if animated movement is unavailable.

## Testing Checklist

- Confirm previous and next controls work correctly.
- Verify control labels are understandable with assistive technology.
- Test the carousel using only the keyboard.
- Resize the viewport and inspect card wrapping or sizing.
- Enable reduced-motion and verify simplified movement.
- Check that no page-level horizontal scrolling is introduced.

## Reuse

Replace the example cards with project-specific content.
Keep navigation controls labelled and predictable when adapting the component.
Follow repository contribution and licensing conventions when reusing the example.
