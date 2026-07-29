# Elastic Slide Animation - Minimal Blog (Pure CSS)

A pure CSS animated Elastic Slide transition tailored for elegant, typography-focused Minimal Blog interfaces (e.g., Medium, Substack). It uses a refined `cubic-bezier` curve to create a soft, premium "spring up" effect for subscription panels and author drawers.

## Features
- 🪀 **Refined Elastic Overshoot**: Utilizes a specific bezier curve (`cubic-bezier(0.5, 1.5, 0.4, 1)`) designed to gently overshoot the Y-axis boundary and settle seamlessly without aggressive bouncing.
- 🖋️ **Typographic Aesthetic**: Pre-configured with a stark monochrome palette, high whitespace, and classic Serif/Sans-Serif font pairings.
- ♿ **Accessibility First**: Includes native support for the `@media (prefers-reduced-motion: reduce)` query. For users with vestibular disorders, the elastic bounce is completely disabled and replaced with a calm, static opacity crossfade.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--slide-timing` | `0.7s` | Duration of the elastic slide. Extended slightly to allow the premium physics to resolve smoothly. |
| `--elastic-ease` | `cubic-bezier(...)` | The math powering the elastic bounce effect. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. The animation relies on the `transform: translateY()` property combined with the `--elastic-ease` variable triggered by the hidden CSS checkbox.