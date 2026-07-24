# Collapse Text Example

## Description
A standard HTML/CSS example demonstrating a "Collapse Text" attention-seeker animation. When hovered or focused, the text's letter-spacing decreases, giving the illusion that the text is collapsing inwards.

## Files
- `demo.html`: The markup for the text element inside a focusable wrapper.
- `style.css`: Uses CSS transitions on the `letter-spacing` property to create the collapse effect.

## Accessibility
- Wrapper is focusable via `tabindex="0"`.
- Focus is indicated clearly with `:focus-visible`.
- **Reduced Motion**: Disables the letter-spacing animation to prevent visual shifting. Instead, it provides a subtle text color change on hover/focus to maintain interaction feedback.
