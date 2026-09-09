# Morphing Loader

Documentation and standalone usage guide for issue #78653.

## Overview

The Morphing Loader is a lightweight loading indicator built from CSS shapes.
Its changing form communicates that an operation is still in progress.
The component is suitable for content loading, processing states, and async views.
Its visual treatment adds motion without requiring an animation library.
The status message remains separate from decorative animated elements.

## Features

- Smooth CSS-based shape morphing.
- Centered and responsive loader layout.
- Clear loading status text.
- Reduced-motion support.
- Semantic structure for the loading message.
- No external animation dependency.
- Easy sizing and timing customization.

## Demo

Open `demo.html` in a modern browser to preview the component.
The example places the animated shape beside a concise status message.
Observe the animation during an active loading state.
Use browser accessibility settings to test reduced-motion behavior.
Resize the viewport to confirm the component remains centered and contained.

## Usage

Display the component while the related operation is incomplete.
Keep the status message close enough to identify what is loading.
Hide or remove the component when the operation finishes.
Use a real application state to control visibility in production.
Keep decorative shapes separate from meaningful status information.
Link `style.css` through the host project's normal stylesheet pipeline.

## Accessibility

The loading state should be communicated through readable status text.
Decorative animation should not be the only indication that work is occurring.
Motion is reduced when `prefers-reduced-motion` is enabled.
Avoid placing rapidly changing text inside the animated shape.
Maintain sufficient contrast between the status and its background.
The component should not prevent keyboard interaction with surrounding content.

## Responsive Behavior

The component uses flexible dimensions so it fits different containers.
Its surrounding layout can center it horizontally and vertically.
The animated shape scales down at smaller viewport widths.
Spacing is reduced when the available space becomes limited.
The status text remains readable without horizontal scrolling.

## Customization

Adjust the component width and height in `style.css`.
Change border radius values to alter the shape language.
Modify animation duration for a faster or slower visual rhythm.
Update gaps between the animated shape and status message.
Change surface and border treatments to match the project theme.
Keep motion subtle enough that the loading state remains comfortable to watch.

## Implementation Notes

The visual animation is handled entirely by CSS keyframes.
The HTML separates status content from presentation-only shapes.
Responsive rules keep the component inside its parent container.
The demo can be opened directly without a build step.
The component can be integrated into application loading states with minimal markup.

## File Structure

- `demo.html` — expanded loading demonstration.
- `style.css` — animation and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard CSS animation, transforms, and media queries.
The status message remains useful if decorative animation is unavailable.

## Testing Checklist

- Confirm the loading state has a readable status message.
- Verify the animation runs smoothly at normal viewport sizes.
- Test the component with reduced-motion enabled.
- Resize the viewport and inspect the component dimensions.
- Check contrast between the component and surrounding surface.
- Confirm the component does not cover unrelated interactive content.

## Reuse

Replace the example status text with an operation-specific message.
Keep the animated layer decorative and the status independently understandable.
Follow repository contribution and licensing conventions when reusing the example.
