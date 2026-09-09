# Responsive Video Player — Advanced Styling

## Overview
This guide documents advanced styling for a responsive video player.
The feature is designed to preserve a stable media area across screen sizes.
It keeps presentation concerns in CSS while leaving media controls semantic.
The advanced scope focuses on visual refinement and flexible layout behavior.

## What This Provides
- Responsive video sizing.
- Consistent aspect-ratio handling.
- Flexible container styling.
- Custom CSS variable overrides.
- Reusable modifier classes.
- Reduced-motion friendly presentation.

## Markup
Use a semantic video element inside a dedicated player wrapper.

```html
<div class="video-player video-player--wide">
  <video class="video-player__media" controls preload="metadata">
    <source src="media/demo.mp4" type="video/mp4">
    Your browser does not support HTML video.
  </video>
</div>
```

## Class Naming
`video-player` is the component block.
`video-player__media` identifies the media element.
`video-player--wide` is an optional modifier for a wider presentation.
Keep modifiers attached to the component rather than creating unrelated selectors.

## Advanced Layout
The wrapper can use `aspect-ratio` to reserve predictable media space.
Use `object-fit: cover` when the design intentionally crops media.
Use `object-fit: contain` when the complete video frame must remain visible.
Avoid fixed heights that can cause overflow on narrow screens.

## Custom Properties
Expose design values through CSS variables.

```css
.video-player {
  --player-radius: 1rem;
  --player-shadow: 0 1rem 2.5rem rgb(0 0 0 / 18%);
  --player-surface: #10131a;
}
```

Variables allow projects to adapt the component without rewriting selectors.
Keep overrides close to the consuming component or theme scope.

## Responsive Behavior
The player should never exceed its parent width.
Use `width: 100%` for the media element.
Let the aspect ratio control the vertical dimension where appropriate.
At smaller widths, reduce decorative padding before reducing usable media space.

## Accessibility
Keep the native video controls available unless an accessible custom control system exists.
Provide captions with a `<track>` element when captions are available.
Use descriptive surrounding content when the video's purpose is not obvious.
Do not communicate important information through visual styling alone.
Keyboard users must be able to reach native media controls.
Avoid removing visible focus indicators from interactive controls.

## Keyboard Guidance
Native video controls should remain keyboard operable.
If custom controls are added, use real buttons instead of clickable generic elements.
Provide clear focus states for every custom control.
Keep focus order aligned with the visual reading order.

## Reduced Motion
Do not introduce unnecessary animated resizing or decorative transitions.
Respect `prefers-reduced-motion` for optional visual effects.
The media itself should remain usable regardless of motion preferences.

## Usage
Copy the component markup into a page and load the stylesheet.
Replace the sample media source with the project's video asset.
Add captions when required by the content or audience.
Use the modifier only when the wider presentation is appropriate.

## Customization
Adjust radius, shadow, surface, and spacing variables for the host design.
Change the aspect ratio when the source material requires a different frame.
Keep the component's semantic structure unchanged while restyling it.

## Testing Checklist
- Test on narrow mobile widths.
- Test on large desktop layouts.
- Test keyboard-only navigation.
- Test visible focus states.
- Test captions and transcript behavior.
- Test with reduced-motion preferences enabled.
- Test videos with different intrinsic dimensions.
- Test both portrait and landscape media.

## Browser Notes
Modern browsers support the responsive CSS features used by this pattern.
Always provide fallback text inside the video element.
Verify media codec support separately from layout support.

## File Structure
`README.md` contains the documentation for this scope.
`demo.html` contains the standalone example.
`style.css` contains the component presentation rules.

## Implementation Principle
Keep structure, presentation, and media assets separate.
Prefer native browser media behavior over unnecessary scripting.
Use modifiers for intentional visual variants.
The result should remain maintainable when embedded in another page.
