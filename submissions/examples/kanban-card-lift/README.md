# Kanban Card Lift

This example adds a kanban task card that lifts on hover or keyboard focus.

## Files

- `demo.html` contains the kanban lane and task card markup.
- `style.css` defines the card lift, focus state, and reduced-motion fallback.

## Highlights

- Keyboard-focusable task card using `tabindex="0"`.
- Stable card sizing with hover movement handled by transform.
- Visible focus and hover states for the same interaction.
- Removes transform motion for reduced-motion users.
