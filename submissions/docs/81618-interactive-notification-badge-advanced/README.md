# Interactive Notification Badge — Advanced Styling

## Overview
Advanced styling for a compact interactive notification indicator.
The component keeps its interaction semantic while allowing visual customization.

## Scope
This issue covers advanced visual treatment rather than application state management.
Use the badge beside the content or control it describes.

## Markup
```html
<button class="notification-badge notification-badge--accent" type="button" aria-label="Open 4 notifications">
  <span class="notification-badge__count" aria-hidden="true">4</span>
</button>
```

## Class Conventions
`notification-badge` is the component block.
`notification-badge__count` identifies the displayed value.
`notification-badge--accent` is an optional modifier.
Keep modifiers independent from page-specific selectors.

## Custom Properties
Expose size, radius, spacing, surface, text, shadow, and focus values as variables.

```css
.notification-badge {
  --badge-size: 2.75rem;
  --badge-radius: 999px;
  --badge-shadow: 0 10px 24px rgb(0 0 0 / 15%);
}
```

## Visual States
Provide normal, hover, focus, and pressed states.
Keep focus visually stronger than hover.
Avoid changing dimensions on focus because that can move nearby content.

## Responsive Styling
Use relative sizing where the surrounding layout is fluid.
Keep the control comfortably tappable on narrow screens.
Avoid clipping multi-digit counts.

## Accessibility
Use a real button for an actionable badge.
Provide an accessible name that describes its action and current status.
Do not rely on color or animation to communicate notification state.
Maintain visible keyboard focus.

## Keyboard Interaction
Native button semantics provide Enter and Space activation.
Do not replace these semantics with a generic clickable element.
Keep the focus order predictable.

## Motion
Decorative attention effects should respect `prefers-reduced-motion`.
The notification count must remain understandable without animation.

## Customization
Override variables from the component or a theme scope.
Use modifiers for deliberate variants instead of duplicated components.

## Testing
Test hover, focus, and pressed presentation.
Test keyboard-only use.
Test screen-reader naming.
Test one-digit and multi-digit counts.
Test mobile widths.
Test reduced-motion preferences.

## File Structure
`README.md` documents the advanced styling scope.
`demo.html` demonstrates the component.
`style.css` contains the presentation layer.

## Maintenance
Keep interaction behavior in the host application.
Keep visual rules local to the component.
Review contrast whenever the theme changes.
