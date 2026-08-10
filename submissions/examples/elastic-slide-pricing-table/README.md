# Elastic-Slide Pricing Table

A responsive glassmorphism pricing table with a spring-like horizontal slide interaction. The motion overshoots slightly and settles back, giving the cards a tactile elastic personality.

## Purpose

This component demonstrates how a carefully chosen cubic-bezier curve can create a spring-like feeling without JavaScript physics. The card performs a short horizontal movement and the easing curve creates the impression of a small overshoot before settling.

The interaction is paired with a restrained ambient accent so the card feels responsive without becoming visually noisy.

## File structure

```text
elastic-slide-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Detailed three-tier pricing content.
- Elastic horizontal movement driven by a custom `cubic-bezier()` curve.
- Decorative ambient highlight follows the active card.
- Hover and keyboard focus share the same motion state.
- Motion-stage guide explains the interaction.
- Supporting notes describe the spring behavior.
- Responsive fallback changes the movement from horizontal slide to vertical lift.
- No JavaScript or external dependencies.
- `prefers-reduced-motion` disables all elastic movement.

## Usage

Open `demo.html` directly in a browser. Copy the `.plans` section and include `style.css` to reuse the component.

A simplified card can be structured as:

```html
<article class="plan">
  <div class="plan__accent" aria-hidden="true"></div>
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

The desktop interaction uses `translateX(12px)` with:

```css
--spring: cubic-bezier(.22, 1.6, .36, 1);
```

The curve intentionally exceeds the normal range of a conventional ease-out curve. That creates a small overshoot and gives the movement a spring-like character.

The card transition is deliberately longer than a typical button transition. A longer duration gives the easing curve enough time to communicate its elastic quality.

## Why cubic-bezier?

A full JavaScript spring system would add unnecessary complexity to a small pricing interaction. CSS cubic-bezier timing can approximate a physical response while keeping the component dependency-free.

The result is deterministic, lightweight, and easy to customize.

## Responsive fallback

Horizontal movement works well when three cards have enough space. On smaller screens the cards stack vertically, so horizontal movement would be less useful and could feel like accidental overflow.

The mobile breakpoint therefore changes the active state to a vertical lift. This keeps the component's personality while adapting the motion to the layout.

## Interaction states

### Rest

Cards remain neutral with a soft glass surface and ambient background accent.

### Hover

The active card slides horizontally with spring-like easing. Its border and shadow also become slightly stronger.

### Focus

`:focus-within` applies the same motion so keyboard users receive the same feedback.

### Reduced motion

The card translation and accent movement are removed when reduced motion is requested.

## Customization

The primary design tokens live in `:root`.

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
| `--spring` | Elastic easing curve |

### Changing the bounce

Adjust the second value of the cubic-bezier curve. A stronger overshoot creates a bouncier personality; a value closer to `1` makes the movement more conventional.

### Changing the distance

The desktop translation is `12px`. Reduce it for dense product interfaces or increase it for a more expressive showcase.

### Changing the accent

The `.plan__accent` element uses a cyan radial gradient. It can be replaced with a violet gradient or removed for a flatter glass design.

## Responsive behavior

Desktop uses three equal cards with horizontal elastic movement. Tablet layouts stack the cards and use a vertical lift instead.

On narrow mobile screens the motion guide becomes a vertical list and card padding is reduced.

## Accessibility

Actions remain native links and keyboard focus activates the same state as hover. The decorative accent is hidden from assistive technology.

The motion does not change the content or meaning of the pricing cards.

Reduced-motion preferences remove both card translation and ambient accent movement:

```css
@media (prefers-reduced-motion: reduce) {
  .plan:hover,
  .plan:focus-within {
    transform: none;
  }
}
```

## Performance notes

The component uses CSS transforms and transitions rather than JavaScript-driven animation. There is no requestAnimationFrame loop or continuously running spring calculation.

The ambient accent moves only during interaction, so the page does not maintain a permanent animation workload.

## Browser considerations

The design uses CSS grid, flexbox, gradients, custom properties, transitions, and media queries. The glass effect uses `backdrop-filter` with a prefixed property for compatibility.

If backdrop blur is unavailable, the translucent surface and border remain visible.

## Testing checklist

- Open the demo in a desktop browser.
- Hover each pricing card.
- Confirm the slide overshoots and settles.
- Tab through all action links.
- Confirm focus activates the same motion.
- Resize to tablet width.
- Resize to a narrow mobile viewport.
- Enable reduced motion.
- Confirm all motion stops while content remains visible.

## Design principles

1. Use easing to create personality.
2. Keep the travel distance small.
3. Adapt motion to the layout.
4. Keep pricing information stable.
5. Support keyboard focus.
6. Respect reduced-motion preferences.
7. Avoid JavaScript when CSS is sufficient.

## License

This example is intended as a self-contained EaseMotion CSS showcase and follows the repository contribution guidelines.
