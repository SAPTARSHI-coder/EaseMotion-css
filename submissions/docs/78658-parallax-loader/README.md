# Parallax Loader

Documentation and standalone usage guide for issue #78658.

## Overview

The Parallax Loader uses layered movement to create depth around a loading state.
Different visual layers move at different rates to produce a restrained parallax effect.
It is useful for content loading, processing screens, and branded waiting states.
The status message stays separate from the decorative animated layers.
The implementation relies on CSS rather than a heavy animation dependency.

## Features

- Layered parallax movement.
- Responsive loader sizing.
- Separate readable loading status.
- CSS-based animation.
- Reduced-motion support.
- Decorative layers isolated from meaningful content.
- Easy timing and spacing customization.

## Demo

Open `demo.html` in a modern browser to preview the loader.
The example shows multiple visual layers around a central loading indicator.
The status text communicates that the related content is still being prepared.
Resize the browser to inspect the responsive scaling.
Enable reduced-motion to verify that decorative movement is simplified.

## Usage

Display the loader while the related operation is in progress.
Keep a concise status message visible near the animated indicator.
Remove or hide the loader after the operation finishes.
Keep decorative layers independent from application state text.
Use real application state to control when the loader is shown.
Link `style.css` through the host project's normal stylesheet pipeline.

## Accessibility

The loading message should communicate the state without relying on animation.
Decorative layers should not contain essential text.
Motion is simplified when `prefers-reduced-motion` is enabled.
The status text should maintain sufficient contrast against its background.
The loader should not block keyboard access to unrelated content.
Avoid excessive movement that could distract users during longer operations.

## Responsive Behavior

The loader uses flexible dimensions to fit different containers.
Layer offsets are reduced when the viewport becomes narrow.
The central indicator remains visually prominent at smaller sizes.
Spacing is adjusted to prevent overflow on mobile screens.
The status message remains readable without horizontal scrolling.

## Customization

Adjust layer size and offsets in `style.css`.
Change animation duration to create a slower or faster rhythm.
Modify the depth relationship between individual layers.
Update spacing around the status message.
Change borders and surface treatments to match the host design.
Keep movement subtle when changing the animation values.

## Implementation Notes

The parallax effect is created with standard CSS animation rules.
The HTML separates status information from decorative visual layers.
Responsive rules reduce the visual depth on small screens.
The demo can be opened directly without a build process.
The component can be integrated into application loading states with minimal markup.

## File Structure

- `demo.html` — expanded parallax loading demonstration.
- `style.css` — parallax animation and responsive styling.
- `README.md` — usage and accessibility documentation.

## Browser Support

The component targets current evergreen browsers.
It uses standard CSS transforms, keyframes, media queries, and layout rules.
The status message remains useful if decorative animation is unavailable.

## Testing Checklist

- Confirm the status message clearly communicates the loading state.
- Verify the layers remain inside the loader container.
- Test the component with reduced-motion enabled.
- Resize the viewport and inspect layer scaling.
- Check contrast between the status and background.
- Confirm the loader does not cover unrelated controls.

## Reuse

Replace the example status with an operation-specific message.
Adapt layer styling to match the visual identity of the host interface.
Follow repository contribution and licensing conventions when reusing the example.
