# ease-card-shimmer-load

A card skeleton loader with an animated shimmer sweep, used as a placeholder while real content loads. Click the toggle button to see the skeleton swap for loaded content.

## Features

- 🎯 Smooth CSS keyframe shimmer sweep across skeleton blocks
- 🖱️ Interactive trigger: click toggle to switch between loading/loaded states
- 🎨 Fully customizable via CSS custom properties
- 🌗 Light/dark mode support via `[data-theme]`
- 📱 Responsive: thumbnail height scales down on small screens
- ♿ Accessible: `role="status"` + `aria-live="polite"` + `aria-busy` on the card so assistive tech is notified when loading completes; skeleton is `aria-hidden` with a visually-hidden "Loading content…" text as a fallback
- 🧠 Respects `prefers-reduced-motion`

## Usage

```html
<div class="ease-shimmer-card" role="status" aria-live="polite" aria-busy="true">
  <div class="ease-shimmer-skeleton" aria-hidden="true">
    <div class="ease-shimmer-block ease-shimmer-thumb"></div>
    <div class="ease-shimmer-block ease-shimmer-line ease-shimmer-line--title"></div>
    <div class="ease-shimmer-block ease-shimmer-line"></div>
    <div class="ease-shimmer-block ease-shimmer-line ease-shimmer-line--short"></div>
  </div>

  <div class="ease-shimmer-content">
    <img src="photo.jpg" alt="Description" />
    <h3>Real Title</h3>
    <p>Real loaded content.</p>
  </div>
</div>
```

Toggle to the loaded state by adding the `.is-loaded` class to `.ease-shimmer-card` (and updating `aria-busy="false"`) once your real data arrives — this hides the skeleton and reveals `.ease-shimmer-content` with a subtle fade-in.

## CSS Variables

| Variable                     | Default   | Description                          |
|-------------------------------|-----------|-----------------------------------------|
| `--ease-shimmer-bg`            | `#ffffff` | Card background                        |
| `--ease-shimmer-border`        | `#e2e8f0` | Card border color                      |
| `--ease-shimmer-base`          | `#e5e7eb` | Skeleton block base color              |
| `--ease-shimmer-highlight`     | `#f8fafc` | Shimmer sweep highlight color          |
| `--ease-shimmer-radius`        | `0.9rem`  | Card corner radius                     |
| `--ease-shimmer-duration`      | `1.6s`    | Shimmer sweep animation duration        |
| `--ease-shimmer-text`          | `#0f172a` | Loaded content title color             |
| `--ease-shimmer-muted`         | `#64748b` | Loaded content body text color         |
| `--ease-shimmer-max-width`     | `320px`   | Max card width                         |

## Accessibility

- The card uses `role="status"` and `aria-live="polite"` so screen readers announce when content finishes loading.
- `aria-busy` reflects the current loading state and is toggled by the demo script.
- The skeleton itself is `aria-hidden="true"` (purely decorative) with a visually-hidden "Loading content…" text as a redundant cue for assistive tech that doesn't process `aria-busy`.
- All shimmer and fade-in animations are disabled under `prefers-reduced-motion: reduce`.

## Browser Support

Works in all modern browsers supporting CSS custom properties and `@keyframes` (Chrome, Firefox, Safari, Edge).