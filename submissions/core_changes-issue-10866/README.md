# ease-read-more

## What does this do?

Provides a CSS-only expandable "read more" / "show more" text component using the native `<details>`/`<summary>` HTML elements. No JavaScript required.

## How is it used?

Wrap your text content in a `<details>` element with a `.ease-read-more-content` container and a `<summary>` with a chevron indicator.

```html
<div class="ease-read-more">
  <details>
    <div class="ease-read-more-content">
      <p>Long text content goes here...</p>
    </div>
    <summary>
      <span class="ease-read-more-chevron"></span>
      <span>Read more</span>
    </summary>
  </details>
</div>
```

The `.ease-read-more-content` wrapper provides:
- **Collapsed state**: clipped to ~3 lines (4.5rem max-height) with a gradient fade-out overlay
- **Expanded state**: full height with fade-out removed
- **Smooth transition**: max-height animates between 4.5rem and 1000px

The `.ease-read-more-chevron` rotates 180 degrees when the details are open.

## Why is it useful?

Long text content (product descriptions, blog excerpts, terms of service, documentation) commonly uses an expand/collapse pattern. This component provides a reusable, accessible, zero-JavaScript implementation using native HTML elements.

## Features

- CSS-only expand/collapse via `<details>`/`<summary>`
- Smooth max-height transition
- Gradient fade-out overlay in collapsed state
- Rotating chevron indicator
- Accessible (native `<details>` element — keyboard navigable, screen-reader friendly)
- Respects `prefers-reduced-motion`
- Pure CSS, no JavaScript
