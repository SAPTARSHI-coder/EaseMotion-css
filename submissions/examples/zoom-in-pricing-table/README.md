# Zoom-In Pricing Table

A responsive glassmorphism pricing table built around a controlled `transform: scale()` interaction. The active card grows toward the viewer while surrounding choices remain readable.

## Purpose

This example demonstrates a focused hover interaction for pricing interfaces. Instead of changing colors dramatically or moving the entire layout, the active card uses scale to create a clear visual hierarchy.

The effect is intentionally restrained so users can compare all plans while still seeing which plan currently has attention.

## File structure

```text
zoom-in-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three complete pricing cards.
- Plan summaries, feature lists, prices, and actions.
- Smooth zoom-in effect on hover and keyboard focus.
- Subtle inactive-card de-emphasis on capable browsers using `:has()`.
- Glass blur, layered gradients, borders, and depth shadows.
- Motion-stage guide above the pricing cards.
- Supporting interaction notes below the cards.
- Responsive desktop and mobile behavior.
- No JavaScript or external assets.
- Reduced-motion support removes scaling and opacity changes.

## Usage

Open `demo.html` directly in a browser. The core component is the `.plans` grid containing `.plan` cards.

A simplified card structure is:

```html
<article class="plan">
  <div class="plan__header">
    <span class="index">01</span>
    <div>
      <p class="name">Starter</p>
      <p class="summary">For independent builders.</p>
    </div>
  </div>
  <p class="price">$9 <small>/ month</small></p>
  <a class="action" href="#starter">Choose Starter</a>
</article>
```

## Motion details

The primary interaction uses `transform: scale()` with a custom easing curve. The transform origin remains centered, so the active card grows around its own center instead of behaving like a layout resize.

The desktop scale is intentionally stronger than the mobile scale. On smaller screens a large zoom can cause excessive overflow and make neighboring content difficult to compare.

## Interaction model

### Rest state

All three cards have equal visual weight. Borders, shadows, and glass surfaces establish the baseline hierarchy.

### Hover state

The pointer activates the nearest card. The card scales slightly, its border becomes brighter, and its shadow grows deeper.

### Keyboard focus

The same visual treatment is available through `:focus-within`, so keyboard users receive the same hierarchy cue.

### Inactive cards

Where supported, `:has()` reduces the opacity of cards that are not currently hovered. This is an enhancement rather than a requirement. Browsers without `:has()` retain the base layout and remain fully usable.

## Why use scale?

Scale is useful for pricing cards because it creates emphasis without changing the card's internal spacing. The user can quickly compare the active plan against the other choices.

The interaction is also easy to understand: the plan appears to move closer to the user while the rest of the interface stays stable.

## Customization

The main visual tokens live in `:root`.

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

### Changing the scale

The desktop interaction uses `scale(1.065)`. Values around `1.03` create a calmer effect, while values above `1.08` make the interaction much more obvious.

### Changing duration

The default transition is `300ms`. Around `260ms–340ms` works well for a card interaction because the response is quick without feeling abrupt.

### Changing the emphasis

The inactive-card opacity can be removed if a design needs all pricing options to remain equally prominent. The scale interaction remains functional without the `:has()` enhancement.

## Responsive behavior

Desktop uses three columns and a stronger zoom. At the tablet breakpoint the cards stack vertically and the zoom amount is reduced.

On mobile, the motion-stage guide becomes a vertical sequence and the card padding is reduced. The pricing content remains the same so no important information is lost at smaller widths.

## Accessibility

The interaction is not restricted to pointer hover. `:focus-within` gives keyboard users the same active-card cue.

The plan actions are native anchors and expose a visible focus outline. No required information depends on the scaling effect.

Reduced motion is explicitly handled:

```css
@media (prefers-reduced-motion: reduce) {
  .plan:hover,
  .plan:focus-within {
    transform: none;
  }
}
```

The inactive-card opacity enhancement is also disabled under reduced motion.

## Performance notes

The interaction uses a transform rather than changing width, height, margin, or padding. This avoids forcing the entire pricing grid to recalculate its layout during every pointer movement.

There is no continuous animation loop. Motion occurs only when the user interacts with a plan.

## Browser considerations

The `:has()` selector is progressive enhancement. The base component does not depend on it for layout or accessibility.

The glass effect uses `backdrop-filter` with a prefixed property for broader compatibility. If blur is unavailable, the translucent backgrounds and borders still provide readable cards.

## Testing checklist

- Open the demo on a desktop viewport.
- Hover each pricing card.
- Tab through all plan actions.
- Confirm focus activates the same scale behavior.
- Resize to tablet width.
- Resize to a narrow mobile viewport.
- Enable reduced motion and reload.
- Confirm scaling is disabled while content remains visible.
- Test in a browser without `:has()` support if possible.

## Design principles

1. Use scale as emphasis rather than layout change.
2. Keep all pricing content stable.
3. Make keyboard focus visually meaningful.
4. Use progressive enhancement for `:has()`.
5. Reduce motion when requested.
6. Keep the interaction responsive on small screens.
7. Avoid continuous animation when interaction is enough.

## License

This example is intended as a self-contained EaseMotion CSS showcase and follows the repository contribution guidelines.
