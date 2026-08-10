# CSS-only Skeleton Loading States

## What does this do?
A suite of "Skeleton Loading" utility classes that let developers quickly
mock up the layout of data cards or profiles with animated, pulsating
placeholders while waiting for actual data to load. Two pure CSS
animation variants are included:

- **Pulse** (default): a soft, breathing opacity change.
- **Shimmer**: a dynamic sweeping gradient that moves continuously across
  the elements to simulate active loading.

## How is it used?

**Pulse (default):**
```html
<div class="demo-row">
  <div class="ease-skeleton ease-skeleton-circle avatar-size"></div>
  <div class="demo-col">
    <div class="ease-skeleton ease-skeleton-text" style="width: 80%;"></div>
    <div class="ease-skeleton ease-skeleton-text" style="width: 55%;"></div>
  </div>
</div>
<div class="ease-skeleton ease-skeleton-text"></div>
<div class="ease-skeleton ease-skeleton-btn"></div>
```

**Shimmer:** wrap the same markup in a `.ease-skeleton-shimmer` container:

```html
<div class="ease-skeleton-shimmer">
  <div class="ease-skeleton ease-skeleton-circle avatar-size"></div>
  ...
</div>
```

Shapes available: `.ease-skeleton-text`, `.ease-skeleton-circle`,
`.ease-skeleton-btn`.

## Why is it useful?
Modern web applications heavily rely on skeleton loaders to improve
perceived performance during network requests. These `.ease-skeleton`
classes provide a plug-and-play solution to create beautiful loading
states that automatically match the framework's existing border-radius
(`--ease-radius-md`, `--ease-radius-full`) and color token systems
(`--ease-color-neutral-*`), without needing external libraries. Includes
dark mode overrides via `prefers-color-scheme: dark` and respects
`prefers-reduced-motion`.