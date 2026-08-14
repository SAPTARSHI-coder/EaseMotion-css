# CSS Blur-Entrance Hero Section for Fintech Dashboard Layouts

A responsive fintech hero section demonstrating a smooth **Blur-Entrance** animation using only HTML and CSS.

The hero content starts slightly blurred and displaced, then smoothly becomes sharp and visible when the page loads.

## Features

* Pure HTML and CSS
* No JavaScript
* No external frameworks
* Blur-to-sharp entrance animation
* Smooth CSS keyframes
* CSS custom properties
* Responsive desktop, tablet, and mobile layouts
* Interactive button hover effects
* Floating dashboard information cards
* Keyboard-friendly focus states
* `prefers-reduced-motion` support
* Lightweight implementation

## Folder Structure

```text
blur-entrance-hero-fintech/
├── demo.html
├── style.css
└── README.md
```

## Usage

Copy the folder into:

```text
submissions/examples/
```

Then open `demo.html` directly in a browser.

No build process or dependencies are required.

## How the Blur-Entrance Works

The hero content initially uses:

```css
opacity: 0;
filter: blur(14px);
transform: translateY(24px);
```

The `blur-entrance` keyframe then transitions these properties to their final values:

```css
@keyframes blur-entrance {
  0% {
    opacity: 0;
    filter: blur(14px);
    transform: translateY(24px);
  }

  60% {
    opacity: 1;
    filter: blur(3px);
  }

  100% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
```

This creates a soft entrance where the content gradually becomes clear.

## CSS Custom Properties

The main customization variables are defined in `:root`.

| Property                   | Default   | Description              |
| -------------------------- | --------- | ------------------------ |
| `--blur-bg`                | `#f3f7fb` | Page background          |
| `--blur-surface`           | `#ffffff` | Card background          |
| `--blur-text`              | `#142033` | Primary text             |
| `--blur-muted`             | `#667085` | Secondary text           |
| `--blur-accent`            | `#2563eb` | Main accent              |
| `--blur-success`           | `#16a34a` | Success/status color     |
| `--blur-border`            | `#e5eaf1` | Border color             |
| `--blur-radius-lg`         | `28px`    | Hero radius              |
| `--blur-radius-md`         | `16px`    | Card radius              |
| `--blur-entrance-duration` | `900ms`   | Entrance animation speed |
| `--blur-entrance-delay`    | `120ms`   | Content animation delay  |

## Customization

### Change animation speed

```css
:root {
  --blur-entrance-duration: 1200ms;
}
```

### Change the starting blur

Modify the initial value:

```css
.hero__content {
  filter: blur(20px);
}
```

### Change the accent

```css
:root {
  --blur-accent: #7c3aed;
}
```

## Responsive Behavior

### Desktop

The hero uses a two-column layout:

* Hero content on the left
* Financial dashboard preview on the right

### Tablet

The layout changes to a single-column structure.

### Mobile

The content stacks vertically and buttons expand to the available width.

## Accessibility

The component provides:

* Semantic HTML
* Descriptive heading
* Keyboard-accessible links
* Visible focus indicators
* Decorative visual elements that don't affect the content
* Reduced-motion support

When `prefers-reduced-motion: reduce` is enabled, the entrance animation is effectively disabled and the content is displayed immediately.

```css
@media (prefers-reduced-motion: reduce) {
  .hero__content,
  .hero__visual {
    opacity: 1;
    filter: none;
    transform: none;
  }
}
```

## Performance

The animation uses CSS keyframes and does not require JavaScript.

The animation combines:

* `opacity`
* `transform`
* `filter`

The effect is intentionally short and lightweight for a dashboard showcase.

## Browser Support

The example uses commonly available CSS features:

* CSS Grid
* Flexbox
* CSS custom properties
* CSS keyframes
* CSS transitions
* CSS gradients
* `filter: blur()`
* `prefers-reduced-motion`

## Contribution

Created for:

**EaseMotion CSS — GSSoC 2026**

Issue:

**#59392 — Add CSS Blur-Entrance Hero Section for Fintech Dashboard Layouts**

## License

Follow the license and contribution guidelines of the parent EaseMotion CSS repository.
