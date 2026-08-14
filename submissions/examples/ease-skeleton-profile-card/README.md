# ease-skeleton-profile-card

An animated profile card loading skeleton with a circular avatar placeholder, multiple text-line placeholders, and a smooth shimmer sweep — pure HTML & CSS, no JavaScript required.

## Features

- 👤 Circular avatar placeholder
- 📝 Multiple text-line placeholders (title, subtitle, body lines)
- ✨ Smooth CSS `@keyframes` shimmer animation
- 📱 Fully responsive layout
- 🌙 Light and dark theme support via `[data-theme]`
- ⚡ Pure HTML & CSS implementation — no JS
- 🧩 Two layout variants: horizontal (list row) and stacked (profile detail card)
- ♿ Accessible: `role="status"` + `aria-label` on the card so assistive tech knows content is loading; skeleton blocks are `aria-hidden` since they carry no real information
- 🧠 Respects `prefers-reduced-motion`

## Usage

### Horizontal variant (e.g. user list / directory row)

```html
<div class="ease-skel-card" role="status" aria-label="Loading profile">
  <div class="ease-skel-block ease-skel-avatar" aria-hidden="true"></div>
  <div class="ease-skel-lines" aria-hidden="true">
    <div class="ease-skel-block ease-skel-line ease-skel-line--title"></div>
    <div class="ease-skel-block ease-skel-line ease-skel-line--subtitle"></div>
  </div>
</div>
```

### Stacked variant (e.g. profile detail card)

```html
<div class="ease-skel-card ease-skel-card--stacked" role="status" aria-label="Loading profile">
  <div class="ease-skel-block ease-skel-avatar" aria-hidden="true"></div>
  <div class="ease-skel-lines" aria-hidden="true">
    <div class="ease-skel-block ease-skel-line ease-skel-line--title"></div>
    <div class="ease-skel-block ease-skel-line ease-skel-line--subtitle"></div>
    <div class="ease-skel-block ease-skel-line ease-skel-line--full"></div>
    <div class="ease-skel-block ease-skel-line ease-skel-line--short"></div>
  </div>
</div>
```

Once real data loads, simply replace the skeleton markup with actual profile content (avatar image, name, bio) in your application code.

## CSS Variables

| Variable                  | Default   | Description                        |
|----------------------------|-----------|---------------------------------------|
| `--ease-skel-bg`            | `#ffffff` | Card background                       |
| `--ease-skel-border`        | `#e2e8f0` | Card border color                     |
| `--ease-skel-base`          | `#e5e7eb` | Skeleton block base color             |
| `--ease-skel-highlight`     | `#f8fafc` | Shimmer sweep highlight color         |
| `--ease-skel-radius`        | `1rem`    | Card corner radius                    |
| `--ease-skel-duration`      | `1.6s`    | Shimmer sweep animation duration       |
| `--ease-skel-avatar-size`   | `4rem`    | Avatar diameter (horizontal variant)   |
| `--ease-skel-max-width`     | `300px`   | Max card width                         |

## Accessibility

- Each card uses `role="status"` and `aria-label="Loading profile"` so screen readers announce that content is loading, without reading out the skeleton's meaningless placeholder shapes.
- Individual skeleton blocks are marked `aria-hidden="true"` since they carry no semantic content.
- The shimmer animation is disabled under `prefers-reduced-motion: reduce`.

## Browser Support

Works in all modern browsers supporting CSS custom properties and `@keyframes` (Chrome, Firefox, Safari, Edge). Cross-browser tested with standard CSS features only — no vendor-specific requirements.