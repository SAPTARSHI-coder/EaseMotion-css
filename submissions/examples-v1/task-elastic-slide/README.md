# Elastic Slide Animation - Task Management (Pure CSS)

A pure CSS animated Elastic Slide transition tailored for Task Management interfaces (e.g., Jira, Linear, Asana). It uses a specialized `cubic-bezier` curve to create a satisfying, physical "bounce" effect when opening task details drawers or sidebars.

## Features
- 🪀 **Elastic Overshoot**: Utilizes a bezier curve with values outside the `0-1` threshold (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`) to naturally spring and settle.
- 📋 **Productivity Aesthetic**: Pre-configured with clean borders, utilitarian typography, and subtle contextual shadows.
- ♿ **Accessibility First**: Includes native support for the `@media (prefers-reduced-motion: reduce)` query. For users with vestibular disorders, the elastic slide is completely disabled and replaced with a gentle, static opacity crossfade.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--slide-timing` | `0.6s` | Duration of the elastic slide. Must be slightly longer than linear slides to allow the bounce to resolve. |
| `--elastic-ease` | `cubic-bezier(...)` | The math powering the elastic bounce effect. |
| `--accent-color` | `#0052CC` | The primary highlight color (defaults to a productivity blue). |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. The animation relies on the `transform: translateX()` property combined with the `--elastic-ease` variable on state change.