# Animated Divider / Separator

## What does this do?

A CSS-only animated divider and separator component with four variants: basic horizontal rule, text-labelled divider with centered content, animated divider with scaleX entrance, and vertical divider for inline use.

## How is it used?

```html
<!-- Basic divider -->
<hr class="ease-divider" />

<!-- Strong variant -->
<hr class="ease-divider ease-divider-strong" />

<!-- Text-labelled divider -->
<div class="ease-divider-text">Section Break</div>

<!-- Animated divider (expands from left) -->
<hr class="ease-divider-animated" />

<!-- Delayed animated divider -->
<hr class="ease-divider-animated ease-divider-animated-delayed" />

<!-- Vertical divider for inline content -->
<span>Home</span>
<span class="ease-divider-vertical"></span>
<span>About</span>
```

## Why is it useful for EaseMotion CSS?

Dividers and separators are a fundamental UI element used across all types of pages — between sections, in navigation, breadcrumbs, and forms. The animated variant adds a polished entrance effect that aligns with EaseMotion CSS's animation-first philosophy while remaining fully accessible with reduced-motion support.
