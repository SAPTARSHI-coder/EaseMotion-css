# ease-tag-input-animate-add

Tag input component where new tags slide in from the left with a fade-in animation when added via the input field. Existing tags can be removed with a scale/fade-out transition.

## Features

- Slide-in animation (`translateX` + `opacity`) for newly added tags
- Remove button that scales and fades the tag before removing from DOM
- Input + Add button with Enter key support
- Google Fonts Inter integration
- Dark theme with customizable CSS custom properties

## CSS Custom Property Control

- `--removing`: Set to `1` on a tag element to trigger the removal transition (opacity → 0, scale → 0.7). The JavaScript applies this before removing the element after 350ms.
- `tia-tag-visible` class: Added via `requestAnimationFrame` after a tag is created to trigger the slide-in keyframe animation.
