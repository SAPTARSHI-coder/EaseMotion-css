# Interactive Notification Badge — Accessibility Integration

## Overview
This guide documents the accessible use of an interactive notification badge.
The component presents a compact count or status indicator near related content.
The accessibility scope keeps the visual badge synchronized with its meaning.

## Markup
Use a button when the badge itself performs an action.

```html
<button class="notification-badge" type="button" aria-label="Open 4 notifications">
  <span aria-hidden="true">4</span>
</button>
```

## Class Naming
`notification-badge` is the component block.
Use `notification-badge__count` for a dedicated count element when needed.
Use modifiers such as `notification-badge--quiet` for intentional variants.
Avoid styling based on unrelated page selectors.

## Accessibility
Provide an accessible name that explains the badge action.
Do not rely on the visible number as the only accessible label.
Use `aria-hidden` on decorative duplicate content when the accessible name already conveys it.
Keep the interactive element keyboard reachable.
Provide a visible focus state.
Do not use color alone to communicate unread or alert status.

## Keyboard Guidance
Native buttons provide keyboard activation automatically.
Do not replace button semantics with clickable generic containers.
Ensure focus order follows the surrounding interface.
Keep the badge reachable without requiring pointer interaction.

## Custom Properties
The component can expose variables for size, radius, surface, text, and focus treatment.

```css
.notification-badge {
  --badge-size: 2rem;
  --badge-radius: 999px;
  --badge-focus: 0 0 0 3px rgb(80 120 255 / 35%);
}
```

## Usage
Place the badge near the content it describes.
Use a concise accessible label for the current count.
Update the label when the notification count changes.
If the badge opens a panel, make that relationship clear to assistive technology.

## Responsive Behavior
Keep the badge large enough to remain usable on touch devices.
Avoid clipping the count at small widths.
Preserve readable contrast at every viewport size.

## Motion
Optional attention effects should respect `prefers-reduced-motion`.
The badge must remain understandable without animation.
Do not make essential status information dependent on movement.

## Testing Checklist
- Test keyboard focus.
- Test Enter and Space activation.
- Test with a screen reader.
- Test changing notification counts.
- Test high-contrast environments.
- Test reduced-motion preferences.
- Test small touch targets.

## File Structure
`README.md` documents the accessibility integration.
`demo.html` provides the expanded standalone demonstration.
`style.css` contains clean presentation rules.

## Maintenance
Keep semantics in HTML and visual treatment in CSS.
Document any custom interaction added by the host application.
Verify labels whenever the notification behavior changes.
