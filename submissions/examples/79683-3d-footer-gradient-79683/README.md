# 3D Footer — Gradient

Issue #79683 demonstrates a responsive footer with layered gradient depth and a restrained three-dimensional presentation. The component is intended to add visual character to a page footer while keeping navigation semantic, readable, and easy to maintain.

## Overview

The footer combines layered gradients, shadows, spacing, and subtle perspective to create depth without images, canvas, JavaScript, or external UI libraries. Its content structure is intentionally reusable for product pages, portfolios, SaaS websites, and documentation layouts.

## Features

- Layered gradient surface treatment
- Subtle perspective depth
- Responsive navigation groups
- Semantic native links
- Visible keyboard focus states
- Mobile stacking behavior
- Clear content hierarchy
- Reduced-motion support
- Pure HTML and vanilla CSS
- No external dependencies

## Structure

- `demo.html` contains the complete footer demonstration and semantic navigation structure.
- `style.css` contains gradients, depth effects, spacing, responsive rules, and interaction states.
- `README.md` documents the component and integration approach.

## Usage

Open `demo.html` directly in a modern browser to preview the footer. For integration, copy the footer structure into the page where the component is needed and include `style.css`. Replace the navigation labels, destinations, branding, and supporting content with project-specific values.

## Visual Treatment

The three-dimensional appearance is produced with CSS gradients, shadows, and a controlled perspective transform. The effect is intentionally decorative so that the footer remains understandable even when visual effects are reduced or unavailable.

## Responsive Behavior

Navigation groups remain distributed across wider layouts and stack into a readable flow on smaller screens. Spacing is reduced progressively without removing important navigation or forcing links into cramped columns.

## Accessibility

Navigation uses native links and clear headings. `:focus-visible` styling keeps keyboard interaction visible, while readable spacing helps users scan the footer. No essential information is communicated solely through gradients, shadows, or perspective.

## Customization

Adjust the gradient stops, shadow strength, spacing, border radius, typography, and responsive breakpoints in `style.css`. The component can adopt a different color system without changing the semantic HTML structure.

## Performance

The visual effects are CSS-based and do not require images or JavaScript calculations. Keeping the gradients and shadows restrained helps the component remain lightweight while still providing the requested depth.

## Browser Support

The example uses standard HTML and modern CSS features supported by current evergreen browsers. No build process is required to preview or integrate the component.

## Reduced Motion

Motion and perspective effects are supplementary. Reduced-motion preferences are respected so users who request less animation are not dependent on decorative transitions.

## Files

- `demo.html` — complete responsive footer example
- `style.css` — gradient, perspective, responsive, and accessibility styles
- `README.md` — component documentation

## Issue

EaseMotion CSS issue #79683.
