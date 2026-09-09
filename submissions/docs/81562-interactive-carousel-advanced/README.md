# Interactive Carousel Advanced Styling

Documentation for the advanced-styling Interactive Carousel requested in issue #81562.

## Scope

This guide extends the basic carousel documentation with styling-focused guidance.
It covers the visual track, card surfaces, controls, CSS variables, responsive behavior, and accessible motion.
The structure remains compatible with a lightweight EaseMotion CSS submission.

## Features

- Layered card styling.
- Stronger hover and focus treatment.
- Responsive card sizing.
- Customizable navigation controls.
- CSS variable-driven theme system.
- Native keyboard-accessible buttons.
- Reduced-motion support.
- Decorative effects kept separate from content.

## Structure

Use `.carousel` as the root component.
Use `.carousel__viewport` to contain overflow.
Use `.carousel__track` for the moving row.
Use `.carousel__slide` for each card.
Use `.carousel__controls` for navigation.
Use `.carousel__button` for previous and next actions.
Keep semantic content inside each slide.
The complete example is available in `demo.html`.

## Class Naming

Use element classes for structure and modifier classes for variants.
`.carousel--glow` can represent an optional visual treatment.
`.carousel__slide--featured` can emphasize a specific card.
`.carousel__button--next` and `.carousel__button--previous` can distinguish controls.
Avoid class names that describe implementation-specific CSS properties.

## CSS Variables

Expose variables for card surface, border, accent, shadow, gap, width, and motion.
Override variables on `.carousel` to create theme-specific versions.
Use separate focus variables so keyboard visibility does not depend on hover styling.
Keep transition duration centralized for predictable movement.

## Advanced Styling

Layered shadows can create depth without changing the semantic structure.
Gradient borders can highlight the active visual area.
A subtle card transform can provide hover feedback when motion is allowed.
Navigation controls can use surface contrast and a clear focus ring.
Decorative glow should remain secondary to card content.
Do not use excessive blur that reduces text readability.

## Basic Integration

Start from the markup in the demo.
Replace the sample cards with project-specific content.
Keep controls as native buttons.
Connect the controls to the track movement logic when required.
Keep application data and carousel presentation independent.

## Accessibility

Use accessible names for previous and next controls.
Keep keyboard focus visible.
Do not require hover to reveal essential information.
Ensure active or featured cards are understandable without color alone.
Respect reduced-motion preferences.
Keep contrast sufficient for text, controls, and borders.

## Keyboard Interaction

Tab moves through interactive controls in document order.
Enter and Space activate native buttons.
Do not override native keyboard behavior unnecessarily.
If the implementation adds focus management, document it alongside the integration code.

## Responsive Behavior

Use flexible card widths rather than fixed desktop-only dimensions.
Reduce visible cards as the viewport narrows.
Allow one card to occupy the available mobile width.
Keep controls outside the clipping region when possible.

## Customization

Change the card elevation through shadow variables.
Tune the accent glow without modifying markup.
Adjust card radius, gap, and width independently.
Change button surface and focus ring values for the host theme.
Modify motion duration while preserving reduced-motion handling.

## Demo

Open `demo.html` directly in a browser.
The demo contains multiple styled cards, controls, and responsive behavior.
No external framework is required.

## Files

- `demo.html` — expanded advanced carousel example.
- `style.css` — formatted advanced styling.
- `README.md` — advanced styling and accessibility guide.

## Verification

Test hover and keyboard focus independently.
Check the carousel at desktop, tablet, and mobile widths.
Confirm text remains readable over every surface.
Verify controls remain accessible without a pointer.
Test with reduced motion enabled.
