# Mousetrap Spring Snap

A fully rendered mechanical mousetrap component created for EaseMotion issue #66769.

## Requirements covered

- Real mousetrap structure rather than a generic animated card.
- Semantic elements for the wood base, spring coil, snap bar, catch hook, trigger plate and bait holder.
- Component-specific named keyframes for the spring, arm and meter motion.
- Pure HTML and CSS with no JavaScript dependency.
- Hover and keyboard focus affordances.
- Responsive desktop, tablet and mobile layouts.
- `prefers-reduced-motion` support.

## Files

- `demo.html` contains the complete semantic component and supporting documentation sections.
- `style.css` contains all visual styling, mechanical detail and animation logic.
- `README.md` documents the component and customization approach.

## Motion model

The snap bar begins in a loaded position, accelerates toward the wood base, overshoots slightly, and returns to its resting state. The spring coil compresses at the same moment so the relationship between stored tension and release is visually clear.

The motion uses named keyframes rather than generic utility animations. This keeps the component portable and makes the intended motion easy to find during review.

## Accessibility

The main trap is keyboard focusable and has an accessible label. Controls use native buttons and visible focus styles. Reduced-motion users receive a nearly static presentation rather than the continuous mechanical movement.

## Customization

The design tokens at the top of `style.css` can be changed to alter the wood, metal, accent, background and surface colors. The component does not depend on external assets, so it can be copied into a static page without a build step.

## Responsive behavior

The desktop version gives the mechanism a generous stage. At tablet width the illustration scales down while the supporting anatomy cards become two columns. On small screens the cards stack and the mechanism uses a smaller scale so the entire component remains visible.

## Review checklist

- [x] Fully rendered mousetrap
- [x] Wood base
- [x] Snap bar
- [x] Catch hook
- [x] Spring coil
- [x] Bait
- [x] Named keyframes
- [x] Responsive CSS
- [x] Reduced-motion support
- [x] Keyboard focus treatment
