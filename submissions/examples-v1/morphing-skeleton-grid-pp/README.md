# CSS-Only Morphing Skeleton Grid to Content Reveal

## What does this do?

This component implements a responsive, highly polished dashboard grid of cards that smoothly morph from animated skeleton shimmers into rich loaded content cards (containing images, user profiles, interactive buttons, metrics, and media players) when triggered. The entire interaction and transition logic is implemented strictly in pure CSS.

## How is it used?

Structure your markup inside a `.morph-card` container holding a `.skeleton-layer` and a `.content-layer`. Use a checkbox toggle (e.g. at the top of the grid or inside the card) or card hover/focus states to trigger the active reveal state:

```html
<div class="morph-card">
  <!-- Sibling Trigger (for standalone card triggers) -->
  <input type="checkbox" id="card-trigger" class="card-trigger-checkbox" />

  <!-- Skeleton Layer (Displayed by default) -->
  <div class="skeleton-layer">
    <div class="skeleton-media shimmer-block"></div>
    <div class="skeleton-row-meta">
      <div class="skeleton-circle shimmer-block"></div>
      <div class="skeleton-meta-lines">
        <div class="skeleton-line shimmer-block"></div>
      </div>
    </div>
  </div>

  <!-- Content Layer (Revealed on active state) -->
  <div class="content-layer">
    <div class="content-media">
      <img src="..." alt="Media" />
    </div>
    <div class="content-meta">
      <img class="content-avatar" src="..." alt="Avatar" />
      <h3 class="content-title">Loaded Content</h3>
    </div>
  </div>
</div>
```

## Why is it useful?

Typical page loading indicators or skeleton loaders switch content instantly using JavaScript `display: none` / `display: block` or direct DOM injection. This results in visual stuttering and reflow layout shifts as components snap into place.

Key architectural advantages of this pure CSS approach:

- **Morphing Shape Coordinate Alignment**: By matching the size, positioning, and borders of the skeleton placeholders to their rich counterparts, we trigger synchronized scaling and opacity transitions that simulate actual shapes morphing (e.g. skeleton circle shrinking into the profile image, text bars collapsing as text fades and slides up).
- **Background-Position Shimmer**: Creates a subtle left-to-right pulse shimmer using a moving linear gradient background, animated smoothly via CSS keyframes.
- **Staggered Content Reveals**: Employs staggered `transition-delay` sequences on sibling children in the content layer, allowing images to render first, followed by headings, description lines, and interactive buttons for a premium "cascading load" effect.
- **Dual Trigger Mechanics**: Combines a global `:has()` selector trigger (for simulation control checkboxes) with individual `:hover` triggers, allowing developers to test loading states both dashboard-wide and card-by-card.
- **A11y & Reduced Motion Friendly**: Detects user preferences via `@media (prefers-reduced-motion: reduce)` to disable the shimmer animation and layout transforms, performing an instant flat opacity crossfade transition instead.

## Tech Stack

- HTML5
- CSS3 (CSS Grids, `:has()` Selectors, Shimmer animations, Staggered transitions, Custom bezier curves)

## Preview

Open `demo.html` directly in any modern web browser to view and interact with the Morphing Skeleton Grid.

## Contribution Notes

- Class naming was handled by the contributor (`pp`).
- Maintainer will rename classes to standard `ease-*` conventions (e.g. `.ease-morph-card`, `.ease-shimmer-block`) and map colors to the framework's theme variables upon merge.
