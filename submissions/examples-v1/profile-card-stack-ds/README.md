# Profile Card Stack

## Feature overview
A modern stacked profile card interface with overlapping cards that spread apart on hover and lift individually for interaction.

## Preview description
The demo displays a centered card stack with 5 overlapping profile cards. Hovering over the stack reveals a smooth spread animation, and hovering over a specific card yields a subtle lift, scale increase, and deeper shadow.

## Folder structure
- `demo.html` — semantic page markup for the profile card stack.
- `style.css` — layout, stacking effects, responsive behavior, and hover motion.
- `README.md` — feature description, usage details, and customization guidance.

## How the stack animation works
- Cards are arranged in a horizontal flex container with negative gap values to overlap them.
- Each profile card is assigned a separate position class that defines its default layer order and spread transform.
- Hovering over the stack container triggers CSS transforms to spread cards outward diagonally.
- Hovering an individual card adds a lift effect, subtle scale, and stronger shadow to indicate focus.
- When the cursor leaves, cards return smoothly to their original stacked position.

## Customization options
- `--card-width` — change the base width of each profile card.
- `--card-gap` — adjust the amount of overlap between cards.
- `--transition` — modify animation duration and easing.
- `--card-radius` — adjust corner rounding for the card style.
- `--shadow` — update the ambient shadow depth for the panel.
- `background`, `border`, and accent colors can be updated in the root variables.

## Browser compatibility
This component uses modern CSS features like flex layout, transforms, transitions, gradients, and custom properties. It is compatible with current versions of Chrome, Firefox, Edge, and Safari. In older browsers, the card stack remains usable though hover transitions may be less fluid.
