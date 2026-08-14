# Glassmorphism Button

Documentation showcase for EaseMotion CSS issue #78665. This example demonstrates translucent glass-style action buttons with layered borders, blur, depth, and clear interaction states.

## Files

- `demo.html` — semantic button examples.
- `style.css` — translucent surfaces, borders, shadows, hover states, focus treatment, and responsive layout.

## Visual Model

The button surface combines transparency, a subtle border, background blur, and a controlled shadow. The visual treatment is an enhancement; the underlying controls remain native buttons.

Two actions are provided to demonstrate primary and secondary hierarchy. The example can be extended with icons or additional actions without changing the core structure.

## Usage

Use a native `<button>` for an in-page action and connect it to application behavior as required. Replace the sample labels with concise action-oriented text.

## Accessibility

- Native buttons preserve keyboard and assistive technology behavior.
- Focus-visible styling provides a clear keyboard indicator.
- Text remains readable against the translucent surface.
- Motion is reduced when requested by the user.
- The component does not require JavaScript for presentation.

## Responsive Behavior

The action group wraps when the available width is limited. Button padding and card spacing are reduced at smaller viewport sizes while preserving touch-friendly controls.

## Customization

Adjust blur, opacity, border strength, radius, shadow, and accent values in `style.css`. If `backdrop-filter` is unavailable, the solid translucent background still provides a usable fallback.

## Preview

Open `demo.html` and hover or keyboard-focus each action. Resize the viewport to see the responsive action group.
