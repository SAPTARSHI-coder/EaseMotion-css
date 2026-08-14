# Retro Pixel Skeleton

A simple retro pixel-inspired skeleton loading component for displaying placeholders while content is loading.

## Features

* Simple HTML structure
* Lightweight CSS
* Reusable modifier classes
* Customizable CSS variables
* Responsive design
* Accessibility-friendly
* Reduced-motion support

## Basic HTML

```html
<div
  class="retro-skeleton"
  aria-hidden="true">
</div>
```

## Available Classes

### Base Class

```text
.retro-skeleton
```

Provides the basic skeleton appearance.

### Avatar

```text
.retro-skeleton--avatar
```

Creates a circular avatar placeholder.

### Title

```text
.retro-skeleton--title
```

Creates a larger placeholder suitable for headings.

### Text

```text
.retro-skeleton--text
```

Creates a smaller placeholder suitable for text.

## Complete Example

```html
<section class="loading-card" aria-busy="true">

  <div
    class="retro-skeleton retro-skeleton--avatar"
    aria-hidden="true">
  </div>

  <div class="loading-content">

    <div
      class="retro-skeleton retro-skeleton--title"
      aria-hidden="true">
    </div>

    <div
      class="retro-skeleton retro-skeleton--text"
      aria-hidden="true">
    </div>

    <div
      class="retro-skeleton retro-skeleton--text"
      aria-hidden="true">
    </div>

  </div>

</section>
```

## Custom CSS Variables

The component supports CSS custom properties.

```css
.retro-skeleton {
  --retro-skeleton-bg: #d8d8d8;
  --retro-skeleton-highlight: #eeeeee;
  --retro-skeleton-radius: 4px;
}
```

You can override these values:

```css
.retro-skeleton {
  --retro-skeleton-bg: #222222;
  --retro-skeleton-highlight: #444444;
  --retro-skeleton-radius: 0;
}
```

## Accessibility

Skeleton placeholders should normally be hidden from screen readers because they do not contain meaningful information.

Use:

```html
aria-hidden="true"
```

For a loading container, use:

```html
<section aria-busy="true">
```

When the content finishes loading, update the container so that the real content is available to assistive technologies.

## Keyboard Interaction

Skeleton placeholders should not normally receive keyboard focus.

Avoid using:

```html
tabindex="0"
```

on skeleton elements.

If the skeleton represents an interactive component, ensure that the final interactive element is keyboard accessible after loading.

## Reduced Motion

The loading animation respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .retro-skeleton::after {
    animation: none;
  }
}
```

This prevents unnecessary animation for users who prefer reduced motion.

## Usage

1. Include the component CSS.
2. Add the `retro-skeleton` base class.
3. Add a modifier class when a specific shape is required.
4. Use `aria-hidden="true"` for decorative skeletons.
5. Use `aria-busy="true"` on the loading container when appropriate.
6. Replace the skeleton with the actual content after loading.

## Example

```html
<link rel="stylesheet" href="style.css">

<div
  class="retro-skeleton retro-skeleton--text"
  aria-hidden="true">
</div>
```

## License

This documentation is provided as part of the EaseMotion-css project.
