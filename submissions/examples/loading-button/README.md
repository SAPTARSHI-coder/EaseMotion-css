# Loading Button Component

An accessible, highly composable, and interactive button module styled under the custom `@layer easemotion-components` cascade rule.

## Features
- **Modern Layout Isolation:** Uses CSS variable fallback defaults for custom sizing, colors, scaling, and typography.
- **Micro-interactions:** Smooth spring-like feedback transforms on button activation state (`:active`).
- **Accessible Design:** Features robust, clean `:focus-visible` styling offsets and a media query sweep to immediately respect user systems with `prefers-reduced-motion` enabled.

## How to Use

Drop the core functional HTML element straight into your workspace alongside `style.css`:

```html
<!-- Base Primary Variant -->
<button class="ease-btn ease-btn-primary">
  Continue Process
</button>

<!-- State Implementation: Active Spinner -->
<button class="ease-btn ease-btn-primary ease-btn-loading">
  Saving Data...
</button>
