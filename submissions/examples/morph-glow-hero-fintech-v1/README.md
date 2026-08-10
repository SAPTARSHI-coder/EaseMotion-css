# CSS Morph-Glow Hero Section for Fintech Dashboard Layouts

A responsive fintech hero section demonstrating an organic **Morph-Glow** animation using pure HTML and CSS.

The glowing background shapes continuously change their border-radius, position, rotation, and scale to create a soft morphing effect behind the financial dashboard.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Organic morphing glow effect
* CSS keyframe animations
* Smooth hover transitions
* CSS custom properties
* Responsive desktop, tablet, and mobile layouts
* Financial dashboard preview
* Floating metric cards
* Keyboard-friendly focus states
* `prefers-reduced-motion` support

## Folder Structure

```text
morph-glow-hero-fintech/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the folder into:

```text
submissions/examples/
```

Then open `demo.html` in a browser.

No build tools or JavaScript dependencies are required.

## How the Morph-Glow Works

The glowing shapes use large rounded elements with animated `border-radius`, `transform`, and `scale` values.

Example:

```css
.hero__glow {
  border-radius: 48% 52% 62% 38% / 42% 45% 55% 58%;

  filter: blur(18px);

  animation:
    morph-glow
    var(--morph-duration)
    ease-in-out
    infinite alternate;
}
```

The animation continuously changes the shape:

```css
@keyframes morph-glow {
  0% {
    border-radius:
      48% 52% 62% 38%
      / 42% 45% 55% 58%;
  }

  50% {
    border-radius:
      35% 65% 58% 42%
      / 62% 38% 55% 45%;
  }

  100% {
    border-radius:
      40% 60% 52% 48%
      / 60% 42% 58% 40%;
  }
}
```

This creates the organic morphing appearance without JavaScript.

## CSS Custom Properties

The main customization variables are defined in `:root`.

| Property            | Default                  | Description             |
| ------------------- | ------------------------ | ----------------------- |
| `--morph-bg`        | `#07111f`                | Page background         |
| `--morph-surface`   | `#0e1b2d`                | Card background         |
| `--morph-text`      | `#f8fafc`                | Primary text            |
| `--morph-muted`     | `#9aaabd`                | Secondary text          |
| `--morph-accent`    | `#38bdf8`                | Main accent             |
| `--morph-success`   | `#34d399`                | Success color           |
| `--morph-border`    | `rgb(255 255 255 / 0.1)` | Border color            |
| `--morph-radius-lg` | `28px`                   | Hero radius             |
| `--morph-radius-md` | `18px`                   | Card radius             |
| `--morph-duration`  | `7s`                     | Glow animation duration |
| `--morph-glow-size` | `320px`                  | Main glow size          |

## Customization

### Change the animation speed

```css
:root {
  --morph-duration: 10s;
}
```

### Change the glow size

```css
:root {
  --morph-glow-size: 400px;
}
```

### Change the accent color

```css
:root {
  --morph-accent: #a78bfa;
}
```

## Responsive Behavior

### Desktop

The hero displays:

* Text content on the left
* Financial dashboard visual on the right
* Decorative morphing glow behind the content

### Tablet

The layout switches to a single-column structure.

### Mobile

The content stacks vertically and the buttons become full width.

## Accessibility

The component includes:

* Semantic HTML
* Descriptive heading
* Keyboard-accessible links
* Visible focus states
* Decorative animation elements marked with `aria-hidden`
* `prefers-reduced-motion` support

When reduced motion is enabled, the morphing animations are disabled.

```css
@media (prefers-reduced-motion: reduce) {
  .hero__glow,
  .morph-orb,
  .metric-card {
    animation: none;
  }
}
```

## Performance

The effect uses CSS animations rather than JavaScript.

The main animation uses:

* `transform`
* `border-radius`
* `opacity`
* `filter`

The glow is placed behind the content and does not interfere with interaction.

## Browser Support

The example uses commonly supported CSS features:

* CSS Grid
* Flexbox
* CSS custom properties
* CSS keyframes
* CSS transitions
* CSS gradients
* `filter: blur()`
* `backdrop-filter`
* `prefers-reduced-motion`

## Contribution

Created for:

**EaseMotion CSS — GSSoC 2026**

Issue:

**#59398 — Add CSS Morph-Glow Hero Section for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
