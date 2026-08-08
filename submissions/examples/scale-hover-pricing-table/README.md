# Scale-Hover Pricing Table

A detailed glassmorphism pricing component where the active plan gently scales above the surrounding cards on hover or keyboard focus.

## Purpose

The component uses scale as a visual hierarchy tool. Rather than shifting the layout or changing the entire card design, the active plan grows slightly and receives a stronger shadow and border.

This makes the interaction useful for pricing comparisons where all options should remain visible.

## File structure

```text
scale-hover-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Complete three-tier pricing content.
- `transform: scale()` interaction with a custom easing curve.
- Soft radial highlight appears inside the active card.
- Glassmorphism surfaces with depth shadows and backdrop blur.
- Responsive grid with a smaller scale factor on mobile.
- Keyboard focus receives the same visual hierarchy as hover.
- Supporting interaction notes below the cards.
- Reduced-motion support removes scaling and highlight movement.
- No JavaScript or external assets.

## Usage

Open `demo.html` directly. The component requires only `style.css` and can be dropped into an existing page without JavaScript.

A minimal card follows this structure:

```html
<article class="plan">
  <div class="plan__header">
    <span class="index">01</span>
    <div>
      <p class="name">Starter</p>
      <p class="summary">For personal projects.</p>
    </div>
  </div>
  <p class="price">$9 <small>/ month</small></p>
  <a class="action" href="#starter">Choose Starter</a>
</article>
```

## Motion details

The card scales to `1.055` on larger screens and `1.025` on smaller screens. This difference prevents the interaction from feeling oversized on narrow displays.

The transform uses the card center as its origin. As a result, the active plan expands around its own visual center instead of appearing to stretch from one edge.

The active state also increases border contrast and shadow depth. A radial highlight is revealed through a pseudo-element to reinforce the sense of depth.

## Why scale instead of translate?

A translation moves the card but keeps its size. Scale creates a more direct sense of emphasis because the entire surface becomes slightly larger.

The effect works especially well when several equal cards are presented side by side. The user can still see every option while the current target becomes visually dominant.

## Interaction states

### Rest

All plans have equal visual weight and share the same glass surface.

### Hover

Pointer interaction scales the nearest plan and increases its visual depth.

### Focus

`:focus-within` applies the same treatment to keyboard users.

### Reduced motion

The scale and highlight are disabled when the operating system requests reduced motion.

## Customization

The primary tokens are defined in `:root`.

| Token | Purpose |
| --- | --- |
| `--bg` | Page background |
| `--glass` | Base glass surface |
| `--glass-strong` | Stronger glass surface |
| `--border` | Card border |
| `--border-soft` | Divider color |
| `--text` | Primary text |
| `--muted` | Supporting text |
| `--subtle` | Metadata text |
| `--violet` | Primary accent |
| `--violet-light` | Light accent |
| `--cyan` | Secondary accent |
| `--ease` | Shared easing curve |

### Scale amount

The desktop scale is `1.055`. A value near `1.03` is calmer, while values above `1.08` produce a much stronger showcase effect.

### Transition duration

The default is `300ms`. Shorter values make the component feel sharper. Longer values can feel more cinematic but should be used carefully in dense interfaces.

### Highlight strength

The radial highlight is controlled by the `.plan::before` opacity and gradient. Lower the alpha values for a quieter interface or increase them for a more luminous glass treatment.

## Responsive behavior

Desktop uses three equal columns. At the tablet breakpoint the cards stack vertically and the zoom amount is reduced.

The interaction notes also collapse into a single column. On narrow screens the scale guide becomes a vertical sequence so it does not compress into tiny labels.

## Accessibility

The component uses semantic links for actions and visible focus outlines. The scale animation is decorative and does not communicate information unavailable elsewhere.

Keyboard users receive the same visual hierarchy through `:focus-within`.

Reduced-motion support is explicit:

```css
@media (prefers-reduced-motion: reduce) {
  .plan:hover,
  .plan:focus-within {
    transform: none;
  }
}
```

The content and layout remain available with motion disabled.

## Performance notes

The interaction uses `transform` rather than changing width, height, margins, or padding. This prevents the grid from recalculating its layout whenever the pointer moves across a card.

There is no permanent animation loop. The effect is activated only during interaction.

## Browser considerations

The glass effect uses `backdrop-filter` with a prefixed property. If blur is unavailable, the translucent background and border still provide enough separation.

The example relies on standard CSS grid, flexbox, custom properties, gradients, transitions, and media queries.

## Testing checklist

- Open the demo on a desktop viewport.
- Hover each plan.
- Tab through each action.
- Confirm focus produces the same scale.
- Resize to tablet width.
- Resize to a narrow mobile viewport.
- Enable reduced motion.
- Confirm scaling and highlight are disabled.

## Design principles

1. Use scale as emphasis rather than layout change.
2. Keep all pricing content stable.
3. Make keyboard focus visually meaningful.
4. Keep mobile scale restrained.
5. Respect reduced-motion preferences.
6. Avoid continuous animation when interaction is enough.
7. Keep the component dependency-free.

## License

This example is intended as a self-contained EaseMotion CSS showcase and follows the repository contribution guidelines.
