# Ripple-Wave Pricing Table

A detailed responsive pricing component with glassmorphism surfaces and two expanding ripple layers that originate from the active card.

## Purpose

This example explores a ripple as an interaction cue for pricing cards. When a user hovers or focuses a plan, two circular waves expand behind the content and fade away.

The effect communicates activity without changing the actual pricing information. The card remains stable while the decorative rings provide motion and depth.

## File structure

```text
ripple-wave-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three complete pricing plans.
- Detailed feature lists and supporting copy.
- Two staggered circular waves create the signature interaction.
- CSS `@keyframes ripple` controls the expansion and fade.
- Hover and keyboard focus trigger the same decorative motion.
- A motion-stage guide explains the sequence.
- Supporting notes document the visual strategy.
- Responsive three-column-to-single-column layout.
- Glass blur, gradients, borders, and depth shadows.
- No JavaScript or external dependencies.
- `prefers-reduced-motion` disables the ripple and card movement.

## Usage

Open `demo.html` directly in a modern browser. Copy the `.plans` section and keep the `.wave` elements inside each card to reproduce the effect.

A simplified card is:

```html
<article class="plan">
  <span class="wave wave--one" aria-hidden="true"></span>
  <span class="wave wave--two" aria-hidden="true"></span>
  <div class="plan__header">
    <span class="index">01</span>
    <div>
      <p class="name">Starter</p>
      <p class="summary">For personal projects.</p>
    </div>
  </div>
  <a class="action" href="#starter">Choose Starter</a>
</article>
```

## Motion details

The first ripple begins immediately and the second starts `180ms` later. The rings expand from a small `22px` origin to a large `620px` diameter before fading away.

The animation is attached to decorative elements rather than the card itself. This keeps the pricing content stable while the visual effect passes behind it.

## Ripple stages

### Origin

The ring begins as a compact circle near the upper-middle region of the card. Its opacity is high enough to make the starting point visible without competing with the price.

### Expansion

The ring grows rapidly. Because the parent card uses `overflow: hidden`, the ring is clipped cleanly at the card boundary.

### Fade

The final portion of the animation reduces opacity to zero. The ring then disappears completely and remains idle until the next interaction.

## Why two layers?

One ring can feel like a simple pulse. A second ring with a small delay creates a richer rhythm while still keeping the implementation small.

Two layers also make it easier to understand the motion direction because the eye can compare the leading and trailing wave fronts.

## Customization

The main visual tokens are centralized in `:root`.

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
| `--violet-light` | Ripple accent |
| `--cyan` | Secondary ripple accent |
| `--ease` | Interaction easing |

### Changing the duration

The default ripple lasts `1100ms`. Shorter durations make the interaction sharper; longer durations create a more atmospheric effect.

### Changing the delay

The second ring begins `180ms` after the first. Increasing the delay creates more visible separation between the waves.

### Changing the final size

The keyframes end at `620px`. A smaller value creates a tighter wave that stays closer to the center. A larger value makes the ripple reach the entire card more dramatically.

## Responsive behavior

The desktop layout uses three columns. At the tablet breakpoint the plans stack into a single column and the cards receive slightly smaller minimum heights.

On mobile, the motion guide becomes a vertical sequence so its labels remain readable. Card padding is also reduced while all pricing information remains unchanged.

## Accessibility

The decorative wave elements are marked `aria-hidden="true"` because they do not convey required information.

All actions use native links with visible focus outlines. The same ripple state is activated through `:focus-within`, not just pointer hover.

Reduced-motion users receive the same cards and controls without the expanding animation:

```css
@media (prefers-reduced-motion: reduce) {
  .plan:hover .wave,
  .plan:focus-within .wave {
    animation: none;
    opacity: 0;
  }
}
```

## Performance notes

The ripple is event-driven rather than continuously animated. No animation runs while the user is not interacting with a card.

The effect changes the size and opacity of a decorative element inside an already clipped card. It does not require JavaScript, canvas rendering, or a permanent animation loop.

## Browser considerations

The component uses standard CSS grid, flexbox, gradients, transitions, custom properties, keyframes, and media queries. The glass effect uses `backdrop-filter` with a prefixed property.

If backdrop blur is unavailable, the translucent surface and border remain visible.

## Testing checklist

- Open the demo in a desktop browser.
- Hover each pricing card.
- Confirm two waves appear with a delay.
- Tab through every action link.
- Confirm focus activates the ripple.
- Resize to tablet width.
- Resize to mobile width.
- Enable reduced motion.
- Confirm ripple movement is disabled.
- Confirm pricing content remains fully visible.

## Design principles

1. Keep the ripple decorative.
2. Keep pricing content stable.
3. Use a short stagger between waves.
4. Clip the animation to the card surface.
5. Make keyboard focus equivalent to hover.
6. Respect reduced-motion preferences.
7. Keep the implementation dependency-free.

## License

This example is intended as a self-contained EaseMotion CSS showcase and follows the repository contribution guidelines.
