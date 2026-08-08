# Slide-Up Navbar for Product Catalogs

## Overview

This showcase implements issue #62271.

It demonstrates a compact navigation dock that slides upward into view.

The interaction uses pure HTML and CSS.

No JavaScript is required.

The dock is fixed near the bottom of the viewport.

It becomes visible through hover and focus interaction.

## Files

`demo.html` contains the catalog and navigation markup.

`style.css` contains the dock transition and responsive layout.

`README.md` documents the component and accessibility strategy.

## Motion model

The dock starts below the visible viewport.

Its transform places it outside the bottom edge.

The active state translates it into view.

A cubic-bezier easing gives the entrance a soft lift.

The hero panel uses a supporting rise animation.

The navigation itself does not loop continuously.

The motion occurs when the state changes.

## Accessibility

The dock is a semantic navigation element.

It has an accessible navigation label.

All menu items are normal links.

Focus-visible outlines are retained.

The dock becomes visible when the shell receives focus.

This ensures keyboard users can access it.

Reduced-motion disables the entrance transition.

The dock remains visible in reduced-motion mode.

The navigation labels are always present.

## Responsive behavior

The desktop dock uses evenly sized navigation items.

Tablet layouts keep the same horizontal structure.

Small screens let each dock item flex evenly.

The dock width adapts to the viewport.

The catalog uses four columns on large screens.

The catalog becomes two columns on smaller screens.

The feature section becomes one column on phones.

Footer information stacks vertically.

## CSS tokens

`--bg` controls the background.

`--panel` controls glass surfaces.

`--line` controls borders.

`--text` controls primary type.

`--muted` controls secondary type.

`--accent` controls the navigation accent.

`--radius` controls shared rounding.

## Customization

Change the dock translate value to alter its resting position.

Change the transition duration for a faster or slower entrance.

Change the easing curve for different personality.

Change the dock background opacity for more or less glass.

Change the accent token for another visual identity.

Add navigation items by copying the existing anchor pattern.

The component does not require scripting.

## Performance

There are no JavaScript event listeners.

There are no timers.

There is no continuous navigation animation.

The transition is state-driven.

The browser interpolates the transform.

The page remains idle when the dock is stationary.

## Usage

Open `demo.html` directly.

Keep `style.css` beside it.

No dependencies are needed.

No build step is needed.

Copy the dock structure into another catalog page.

Keep the navigation landmark and label.

## Design intent

The slide-up movement makes navigation feel attached to the page.

The fixed position keeps navigation reachable.

The glass surface separates the dock from catalog content.

The active state is obvious without being aggressive.

The pattern works for product catalogs.

It can also work for portfolios.

It can work for dashboards.

It can work for documentation navigation.

## Browser considerations

The layout uses standard Flexbox and Grid.

Backdrop blur is progressive enhancement.

The transform is widely supported.

No browser-specific JavaScript is required.

## Issue checklist

- [x] Pure HTML.
- [x] Pure CSS.
- [x] Required demo file.
- [x] Required stylesheet.
- [x] Required README.
- [x] CSS transition.
- [x] Keyframe animation.
- [x] Slide-up interaction.
- [x] Responsive desktop layout.
- [x] Responsive tablet layout.
- [x] Responsive mobile layout.
- [x] Keyboard focus support.
- [x] Reduced-motion support.
- [x] Issue number in folder name.
