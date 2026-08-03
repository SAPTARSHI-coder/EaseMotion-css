# 🎯 CSS Floating Action Button (FAB) Animation Showcase

Resolves: #58366

## Description
A standalone, offline-friendly demo showcasing six different Floating
Action Button (FAB) animation styles, built with pure HTML and CSS — no
JavaScript, no external dependencies.

## Included Styles
1. **Expand on Hover** — the button widens to reveal a text label alongside
   its icon.
2. **Radial Menu** — sub-action buttons fan out in a radial arc around the
   main button.
3. **Speed Dial** — mini action buttons stack and slide up vertically above
   the main button.
4. **Pulse FAB** — continuous outward pulse rings draw attention to the
   button.
5. **Morphing FAB** — the button's shape morphs from a circle to a rounded
   square on interaction.
6. **Rotating FAB** — the icon spins smoothly on hover/focus, well suited to
   settings/refresh actions.

## Files
- `demo.html` — all six FAB demos laid out in a responsive grid.
- `style.css` — all FAB styles and animations.
- `README.md` — this file.

## Usage
Open `demo.html` directly in any browser — everything works offline with
no build step. To reuse an individual FAB style in your own project, copy
its markup block from `demo.html` and the matching CSS rules from
`style.css` (each style is clearly commented and namespaced, e.g.
`.fab--expand`, `.fab-radial`, `.fab-speed-dial`, `.fab--pulse`,
`.fab--morph`, `.fab--rotate`).

## Interaction Notes
- All effects are triggered via `:hover`, `:focus-visible`, and
  `:focus-within` — so every FAB is fully keyboard accessible (Tab to
  focus, no mouse required).
- Radial Menu and Speed Dial reveal their sub-items on hover of the
  container **or** focus of any item within it, so keyboard users can tab
  into the sub-actions without needing to hover.

## Accessibility
- All interactive elements are real `<button>`/`<a>` elements (no
  non-semantic divs).
- Visible focus outlines (`:focus-visible`) on every FAB.
- Respects `prefers-reduced-motion: reduce` — all animations/transitions
  collapse to effectively instant for users who request reduced motion.
- Touch targets are sized comfortably (48–56px) for mobile use.

## Testing
Opened `demo.html` in a browser and verified all six styles trigger
correctly on hover and on keyboard Tab-focus, and that reduced-motion
emulation (via DevTools) disables the animations as expected.