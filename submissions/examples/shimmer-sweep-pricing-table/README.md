# Shimmer-Sweep Pricing Table

A complete glassmorphism pricing experience with a directional CSS shimmer that travels across each card when the user hovers or focuses it.

## Purpose

This example demonstrates how a single decorative highlight can make a static pricing surface feel tactile without introducing JavaScript. The card remains stable while a separate highlight layer travels across its surface.

The visual treatment is intentionally subtle. The shimmer is an accent to the pricing information rather than the primary content.

## File structure

```text
shimmer-sweep-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three detailed pricing tiers.
- Individual plan numbers and supporting summaries.
- Glass surfaces with layered gradients, blur, borders, and shadows.
- Directional shimmer implemented with `@keyframes shimmer-sweep`.
- Hover and keyboard-focus states share the same visual treatment.
- Responsive desktop, tablet, and mobile layouts.
- A compact comparison section below the pricing cards.
- Native anchor controls with visible focus indicators.
- Reduced-motion handling disables the moving highlight.
- No JavaScript, frameworks, external fonts, or external assets.

## Usage

Open `demo.html` in a modern browser. The component can be copied into an existing page by keeping the `.plans`, `.plan`, `.plan__glow`, and `.action` structure and importing the stylesheet.

A minimal card looks like this:

```html
<article class="plan">
  <div class="plan__glow" aria-hidden="true"></div>
  <header class="plan__header">
    <span class="plan__icon">01</span>
    <div>
      <p class="name">Starter</p>
      <p class="summary">For focused individual work.</p>
    </div>
  </header>
  <p class="price">$9 <small>/ month</small></p>
  <a class="action" href="#starter">Choose Starter</a>
</article>
```

## Component anatomy

### Page background

The page uses two large radial gradients to establish depth behind the cards. A small dot texture adds a restrained technical feel without requiring an image asset.

### Glass card

`.plan` owns the translucent surface, border, blur, shadow, and interaction transition. The pseudo-elements provide additional depth without touching the document flow.

### Shimmer layer

`.plan__glow` is an intentionally oversized translucent strip. It begins outside the left edge of the card and is skewed so the highlight travels diagonally.

### Pricing content

Each card includes a plan number, name, summary, price, supporting copy, feature list, and action. The content remains readable even when the shimmer is disabled.

### Comparison notes

The lower three-column section explains the implementation principles. It also gives the showcase enough supporting content to demonstrate how the component could sit inside a larger page.

## Motion details

The core animation is:

```css
@keyframes shimmer-sweep {
  0% {
    left: -80%;
  }

  100% {
    left: 130%;
  }
}
```

The highlight starts well outside the card, crosses the full surface, and exits on the opposite side. Because the layer is clipped by `.plan`, users see only the portion that intersects the card.

The card itself uses a separate short transition for elevation. This separation keeps the shimmer independent from the card transform.

## Why use a separate layer?

Animating the entire card would move its text, borders, and buttons. That would make the interaction noisy and could interfere with readability. A dedicated layer lets the surface appear to catch light while the content remains fixed.

## Timing guidance

The default sweep lasts `900ms`. A duration around one second works well for a premium interaction because the highlight is noticeable but does not linger.

For dense interfaces, use a shorter duration. For a more cinematic landing page, a slightly longer duration can work, provided the effect is not triggered continuously.

## Customization

Core colors and timing live in `:root`.

| Token | Purpose |
| --- | --- |
| `--bg` | Page background |
| `--panel` | Base glass surface |
| `--panel-strong` | Stronger glass surface |
| `--border` | Card border |
| `--border-soft` | Secondary dividers |
| `--text` | Primary text |
| `--muted` | Supporting text |
| `--subtle` | Metadata text |
| `--violet` | Primary accent |
| `--violet-light` | Highlight accent |
| `--cyan` | Secondary accent |
| `--ease` | Shared easing curve |

### Changing the shimmer color

The highlight uses a white-to-violet gradient. Replace the middle stops in `.plan__glow` if a project needs a different brand treatment.

### Changing the angle

The `skewX(-22deg)` value controls the diagonal character of the sweep. A more negative value makes the highlight more angled.

### Changing the sweep width

The width of `.plan__glow` controls how broad the moving highlight appears. A narrow layer creates a sharp glint; a wider layer creates a softer wash.

## Responsive behavior

Desktop uses three equal cards. Tablet and smaller layouts stack the cards so the content remains comfortably readable.

The comparison notes also collapse to a single column at the tablet breakpoint. On narrow screens the page padding and card padding are reduced without removing content.

## Accessibility

The shimmer is decorative and does not convey required information. Its element is marked `aria-hidden`.

The plan actions are native links. They remain keyboard accessible and expose a visible `:focus-visible` outline.

The component supports reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  .plan:hover .plan__glow,
  .plan:focus-within .plan__glow {
    animation: none;
    opacity: 0;
  }
}
```

The pricing information and actions remain fully available when motion is disabled.

## Performance notes

The shimmer is limited to an interaction state rather than running continuously. This avoids a permanent animation loop on a page that may contain many cards.

The visual layer is clipped by the card and uses opacity plus position movement. The implementation does not require layout-changing JavaScript or a rendering canvas.

## Design principles

1. Keep pricing content stable.
2. Make the shimmer decorative.
3. Trigger the strongest motion through user interaction.
4. Use a short, predictable duration.
5. Respect reduced-motion preferences.
6. Preserve the same hierarchy on mobile.
7. Keep the component dependency-free.

## Browser considerations

The example uses standard CSS grid, flexbox, gradients, custom properties, backdrop blur, and keyframes. If backdrop blur is unavailable, the translucent panel still provides a usable surface because the border and background remain visible.

## Testing checklist

- Open the demo in a desktop browser.
- Hover each pricing card.
- Tab through the page and confirm the shimmer appears on focus.
- Resize below the tablet breakpoint.
- Resize to a narrow mobile viewport.
- Enable reduced motion and confirm the shimmer stops.
- Confirm all plan actions remain reachable with the keyboard.

## License

This example is intended as a self-contained EaseMotion CSS showcase and follows the repository contribution guidelines.
