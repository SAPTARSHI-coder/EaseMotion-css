# Parallax Spinner Usage Guide

## Overview

This submission documents a reusable Parallax Spinner component.

Issue #79765 requests a clear usage guide for the component.

The documentation lives under `submissions/docs/` as requested.

The example uses HTML and CSS so it can be opened directly in a browser.

The spinner is intended for loading states where a layered visual treatment is useful.

## What the Component Does

The spinner presents a central loading indicator with layered depth.

The parallax effect creates the impression that separate visual layers move at different depths.

The effect should remain decorative and must not communicate essential information by motion alone.

A static loading label can provide an additional text description.

## Basic Markup

Use a semantic loading region around the spinner.

```html
<div class="parallax-spinner" role="status" aria-label="Loading">
  <span class="parallax-spinner__layer" aria-hidden="true"></span>
  <span class="parallax-spinner__core" aria-hidden="true"></span>
  <span class="parallax-spinner__label">Loading…</span>
</div>
```

The `role="status"` communicates a non-interactive status update.

The decorative layers are hidden from assistive technology.

Keep the visible label when the loading state benefits from explicit text.

## Class Structure

`parallax-spinner` is the component block.

`parallax-spinner__layer` represents a decorative depth layer.

`parallax-spinner__core` represents the central visual element.

`parallax-spinner__label` contains the human-readable status.

Use these classes consistently when adapting the component.

## Container Sizing

The spinner can be placed inside a fixed-height loading area or an inline content region.

Use a flexible width so the component can fit different layouts.

Avoid forcing a large minimum height when the loading state is part of a compact interface.

Center the component with the parent layout rather than relying on absolute page coordinates.

## Animation Behavior

The decorative layers can rotate or translate to create the parallax appearance.

Keep animation timing smooth and predictable.

Avoid excessive speed because a loading indicator should remain comfortable to watch.

The animation should not change the component's overall footprint.

## Accessibility

Provide an accessible status such as `role="status"` and a useful label.

Hide purely decorative layers with `aria-hidden="true"`.

Do not depend on animation to tell users that content is loading.

If loading finishes, remove or update the status appropriately.

Keep sufficient contrast between the visible label and its background.

## Reduced Motion

Respect the user's reduced-motion preference.

A reduced-motion mode can replace continuous movement with a static spinner state.

Do not remove the loading status when animation is disabled.

The component should remain understandable without visual motion.

## Customization

CSS custom properties can control spinner size, layer spacing, duration, and accent treatment.

Adjust the size to match the surrounding interface.

Use a shorter animation only when the visual design requires it.

Keep the number of decorative layers small so the component stays easy to maintain.

## Responsive Usage

The spinner should scale down comfortably on narrow screens.

Avoid fixed horizontal offsets that can cause clipping.

Test the component inside cards, dialogs, full-page loading states, and inline regions.

Confirm that the label remains readable when the viewport becomes narrow.

## Integration Example

Place the component where asynchronous content is temporarily unavailable.

Use the same loading semantics across similar screens for consistency.

Do not use the spinner as a substitute for progress information when an operation has measurable progress.

For long operations, pair it with a useful progress message when appropriate.

## Testing Checklist

- Open `demo.html` directly in a browser.
- Confirm the spinner is visually centered.
- Resize the viewport to mobile width.
- Test keyboard and assistive-technology semantics.
- Verify the loading label is exposed.
- Enable reduced-motion preferences.
- Confirm decorative layers are ignored by assistive technology.
- Check contrast in the surrounding theme.

## Browser Considerations

The presentation uses standard HTML and CSS features.

Modern browsers support the animation and layout techniques used by this pattern.

Provide a readable static state if animation is unavailable.

The component does not require JavaScript for its visual presentation.

## Files

`README.md` contains this usage documentation.

`demo.html` provides a self-contained browser demonstration.

`style.css` contains the component presentation and responsive rules.

Keep the three files together when using the example as a documentation submission.

## Summary

The Parallax Spinner is a decorative loading component with layered visual depth.

Its usage pattern combines a clear status label with CSS-driven presentation.

The component is designed to remain usable across responsive layouts and reduced-motion settings.

The example provides a practical starting point for integrating the spinner into another interface.
