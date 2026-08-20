# Hover Modal

Documentation showcase for EaseMotion CSS issue #78650. The example explores a dark modal-style preview panel that reveals through hover and keyboard focus.

## Files

- `demo.html` — trigger and preview content using semantic controls.
- `style.css` — reveal transition, depth, focus treatment, responsive spacing, and reduced-motion handling.

## Interaction

The trigger is a native button and the preview panel is identified with an accessible description. The visual reveal is intended for progressive enhancement and should be connected to application state when a real modal needs to open, close, trap focus, or update content dynamically.

## Usage

Use the visual pattern for previews, product cards, contextual information, or lightweight hover panels. For a production modal that contains complex interaction, use a proper dialog implementation with managed focus and an explicit open/close state.

## Accessibility

- Uses native buttons and links.
- Provides a visible focus state.
- Keeps the preview content readable without relying on animation.
- Reduced-motion preferences minimize transitions.
- The showcase does not pretend to replace full dialog state management.

## Responsive Behavior

The panel uses fluid sizing and internal spacing. On narrow screens it stays within the viewport and prioritizes readable text and reachable actions.

## Customization

Adjust the reveal distance, opacity, shadow, radius, surface color, and transition duration in `style.css`. The visual state can be adapted to cards, tooltips, or preview panels.

## Preview

Open `demo.html`, hover the trigger, and tab to it to inspect the focus interaction. Use the action links as normal navigation examples.
