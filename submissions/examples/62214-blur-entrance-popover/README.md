# Blur-Entrance Popover for Product Catalogs

## Overview

This showcase implements issue #62214 for EaseMotion CSS.

The component demonstrates a product catalog where each product exposes a contextual popover.

The popover enters with a coordinated blur, opacity, and vertical translation effect.

The implementation is intentionally dependency-free.

There is no JavaScript.

There is no framework runtime.

There are no external component libraries.

The demo is composed from semantic HTML and a dedicated stylesheet.

## Files

### demo.html

The HTML file contains the complete showcase.

It includes a site header.

It includes primary navigation.

It includes a hero section.

It includes a catalog grid.

It includes three product cards.

It includes contextual product popovers.

It includes an accessibility-oriented pattern notes section.

It includes a footer.

### style.css

The stylesheet contains all visual presentation.

The stylesheet defines the design tokens.

It defines the responsive layout.

It defines the glass surfaces.

It defines the catalog artwork.

It defines the popover state.

It defines the blur entrance transition.

It defines keyboard focus behavior.

It defines responsive breakpoints.

It defines reduced-motion behavior.

## Core interaction

The `.product-card` element is the interaction container.

The `.product-popover` starts visually hidden.

Its opacity is zero.

Its visibility is hidden.

Its filter applies a blur.

Its transform shifts it downward.

When the card is hovered, the popover becomes visible.

When the card contains keyboard focus, the popover becomes visible as well.

The focus-within state is important for keyboard users.

The final state removes the blur.

The final state restores full opacity.

The final state returns the popover to its natural position.

The transition uses separate timings for opacity and spatial movement.

This creates a softer entrance than a single property transition.

## CSS custom properties

`--bg` controls the page foundation.

`--surface` controls translucent panels.

`--surface-strong` is available for stronger surfaces.

`--line` controls borders.

`--text` controls primary typography.

`--muted` controls secondary typography.

`--accent` stores the primary accent color.

`--accent-soft` stores the translucent accent treatment.

`--success` controls inventory status text.

`--radius` controls shared corner rounding.

`--shadow` controls the major surface shadow.

These variables make the component easy to retheme.

## Accessibility

The page uses semantic landmarks.

The main content is wrapped in a `main` element.

Navigation is labelled.

Decorative artwork uses `aria-hidden`.

Interactive elements remain normal links.

Focus-visible outlines are deliberately visible.

The popover also opens through `:focus-within`.

This means keyboard users are not dependent on hover.

The reduced-motion media query is included.

Users who request reduced motion receive a stable presentation.

The visual effect is never required to understand product content.

## Responsive behavior

Desktop layouts use three catalog columns.

Tablet layouts reduce the grid to two columns.

Small screens use one column.

The hero becomes a single-column composition.

The desktop navigation hides on narrow screens.

The section heading becomes vertically stacked.

The footer becomes vertically stacked.

The cards remain readable at narrow widths.

The popover remains inside the product card boundary.

## Performance notes

The animation uses CSS properties suited to compositing.

The interaction does not calculate layout with JavaScript.

No continuous animation runs on the catalog cards.

The blur entrance only runs when a state changes.

The page therefore remains quiet while idle.

The decorative background uses static gradients.

The design avoids unnecessary DOM wrappers.

## Customization

Change `--accent` to change the visual identity.

Change `--surface` to adjust glass density.

Change `--radius` to change the card geometry.

Change the popover transition duration for a faster interaction.

Change the transform distance for a stronger entrance.

Change the blur radius for a softer or sharper reveal.

The product copy can be replaced without changing the animation.

Additional cards can use the same markup pattern.

## Usage

Open `demo.html` in a modern browser.

No build step is required.

No package installation is required.

No server is required for the basic demo.

The stylesheet is loaded with a relative path.

The example can also be copied into an existing HTML page.

Keep the class names together when reusing the component.

The component is intentionally self-contained.

## EaseMotion fit

The example demonstrates motion as communication.

The animation identifies the relationship between a product and its extra information.

Blur establishes a sense of depth.

Translation establishes direction.

Opacity establishes arrival.

Together they form a restrained entrance sequence.

The effect remains subtle rather than distracting.

It is suitable for catalogs, dashboards, storefronts, and editorial cards.

## Browser considerations

Backdrop blur is treated as progressive enhancement.

The translucent surface remains useful without it.

Modern Chromium, Firefox, and Safari versions support the core CSS used here.

The layout uses standard Grid and Flexbox.

No browser-specific scripting is required.

## Issue checklist

- [x] Pure HTML and CSS.
- [x] Required `demo.html` file.
- [x] Required `style.css` file.
- [x] Required `README.md` file.
- [x] Smooth transition states.
- [x] Keyframe animation included for the supporting entrance note.
- [x] Desktop responsive layout.
- [x] Tablet responsive layout.
- [x] Mobile responsive layout.
- [x] Keyboard focus support.
- [x] `prefers-reduced-motion` support.
- [x] Feature-specific folder.
- [x] Issue number included in the folder name.

## Credits

Built as a focused EaseMotion CSS showcase.

The component intentionally demonstrates how much interaction can be achieved with platform CSS.
