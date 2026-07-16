## slide‑out‑left (RTL) – Exit Animation for Arabic Layouts
A simple exit animation: the element slides to the left while fading out. Perfect for dismissing items or confirming actions in right‑to‑left (RTL) interfaces such as Arabic websites.

## Classes used
- Layout: container, flex-center, full-screen, text-center,     btn-group
- Background: bg-light
- Typography: title, subtitle, card-title, card-sub, note
- Components: card, btn, primary, secondary
- Hover: btn:hover
- Animation: fade-in, delay-200, delay-500, exit

## RTL support
- When the document uses dir="rtl", the .card.exit class automatically applies translateX(-50px) so the card slides left instead of right.
This ensures the animation feels natural in Arabic and other RTL layouts.

## How it works
- The card starts at transform: translateX(0) and opacity: 1.
- Adding the class .exit triggers a CSS transition that moves the card 50px to the left and fades it out over 0.3s with an ease‑in curve.
- The Reset button removes .exit, instantly restoring the card.
- With prefers-reduced-motion, the card simply disappears without sliding.

## How to use
- Add the class card to any dismissible element.
- Toggle the class exit via JavaScript to animate the exit, this is for live usability/interactions.
- Include the CSS rules in your project (either in style.css or inline in your HTML).