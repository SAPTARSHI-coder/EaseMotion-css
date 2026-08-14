# Team Member Card

## Feature overview
A responsive team section with modern profile cards that reveal social icons and description details on hover.

## Preview description
The demo presents 4 polished team cards with circular avatars, role labels, short bios, and inline social links. Hovering or focusing a card lifts it, increases the shadow, scales the avatar, and reveals the social icons.

## Folder structure
- `demo.html` — page markup for the team card demo.
- `style.css` — styling, responsive layout, hover animations, and focus states.
- `README.md` — feature explanation, usage details, and customization guidance.

## How the hover animation works
- Each `.team-card` uses `transform` and `box-shadow` transitions for a gentle lift effect on hover/focus.
- The `.avatar` scales up slightly when the card is active.
- `.social-links` and `.bio` use opacity and translate transitions to slide up smoothly from below the card content.
- Animations remain within the 300–500ms range using a natural easing curve for polished motion.

## Customization options
- `--accent` — change the accent color for roles and hover states.
- `--duration` — adjust how quickly hover animations occur.
- `--card-width` — control the card width and grid layout.
- `--radius` — update border radius for card rounding.
- `--shadow` — tweak the depth of the card shadow.
- Icon appearance can be changed by replacing the text icons with emoji, SVG, or font icons.

## Browser compatibility
This component uses modern CSS features such as custom properties, transforms, transitions, and CSS Grid. It works well in current versions of Chrome, Firefox, Edge, and Safari. On older browsers, the layout remains functional though the animation polish may be reduced.
