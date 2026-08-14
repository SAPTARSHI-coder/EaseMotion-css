# Skew-Active Modal

## Overview

This showcase implements issue #62222 for EaseMotion CSS.

It demonstrates a product catalog modal with a directional skew entrance.

The interaction is written entirely with HTML and CSS.

No JavaScript is required.

No framework is required.

The modal uses the product card as its positioning context.

The active state is revealed through hover.

The same state is available through keyboard focus.

## Files

`demo.html` contains the semantic showcase markup.

`style.css` contains the complete visual system.

`README.md` documents the implementation and reuse strategy.

## Motion model

The resting modal is transparent.

The resting modal is hidden from visual presentation.

The resting modal is slightly translated downward.

The resting modal is skewed on the horizontal axis.

The resting modal has a small blur.

The active modal restores opacity.

The active modal restores visibility.

The active modal removes the blur.

The active modal removes the skew.

The active modal returns to its natural position.

This sequence creates a directional entrance.

The skew communicates movement rather than simply appearing.

The effect is deliberately short.

The effect is intended to support product discovery.

## Accessibility

The page uses semantic header, main, section, article, and footer elements.

Navigation receives an accessible label.

Decorative product art is not required for understanding the product copy.

Interactive product links remain standard anchor elements.

Focus-visible outlines are clearly rendered.

The modal is activated through `:focus-within`.

This allows keyboard users to access the same state as mouse users.

The design includes a reduced-motion media query.

Reduced-motion users do not receive the strong transform animation.

The content remains readable without motion.

## Responsive behavior

Desktop uses three product columns.

Tablet uses two product columns.

Mobile uses one product column.

The hero switches from two columns to one.

The explanatory sections also collapse on smaller screens.

Navigation becomes compact on narrow screens.

Footer metadata stacks vertically on mobile.

The modal remains contained inside each card.

## CSS tokens

`--bg` controls the background.

`--panel` controls the glass surface.

`--panel-strong` controls the modal surface.

`--line` controls borders.

`--text` controls primary text.

`--muted` controls secondary text.

`--accent` stores the accent value.

`--accent-soft` creates a soft accent surface.

`--radius` controls shared corner rounding.

## Customization

Change `--accent` to match a brand.

Change `--panel` to increase or decrease glass density.

Change the modal skew amount for a stronger directional feel.

Change the translate distance for a larger entrance.

Change the blur value for a softer reveal.

Change the transition timing for a faster response.

The product content can be replaced without changing the motion.

Additional cards can reuse the same structure.

## Performance

The interaction is CSS-only.

There is no layout calculation loop.

There is no JavaScript event listener.

There is no continuous animation on inactive cards.

The keyframe animation is limited to the hero support card.

The product modal uses a transition triggered by state.

This keeps the page idle when the user is not interacting.

## Usage

Open `demo.html` in a modern browser.

No build step is necessary.

No dependencies are necessary.

The stylesheet is referenced with a relative path.

The example can be copied into another page.

Keep the class relationships intact when extracting the component.

## Design intent

The modal should feel active rather than abrupt.

The skew provides directional energy.

The elevation establishes a new layer.

The blur separates the modal from the card.

The opacity transition prevents a hard appearance.

The combination is subtle enough for product catalogs.

The same pattern can work for dashboards.

It can also work for service cards.

It can also work for portfolio tiles.

## Issue checklist

- [x] Pure HTML.
- [x] Pure CSS.
- [x] `demo.html` included.
- [x] `style.css` included.
- [x] `README.md` included.
- [x] CSS transitions used.
- [x] Keyframe animation used.
- [x] Responsive desktop layout.
- [x] Responsive tablet layout.
- [x] Responsive mobile layout.
- [x] Keyboard focus support.
- [x] Reduced-motion support.
- [x] Issue number included in folder name.
- [x] Feature-specific folder used.

## EaseMotion fit

This component treats motion as part of the information hierarchy.

The active product state receives the strongest visual emphasis.

The animation is short and purposeful.

The implementation stays within platform CSS.

That makes it portable and easy to study.

## Implementation notes

The card establishes the positioning context for the modal.

The modal is layered above the product content.

The glass background preserves the relationship with the card.

The border separates the active layer from the background.

The shadow reinforces depth.

The blur transition makes the layer feel closer to the viewer.

The skew is removed during the active state.

The translate value is also removed during the active state.

Opacity and visibility change together.

This avoids an invisible element intercepting interaction.

The transition uses transform instead of layout properties.

This keeps the motion efficient.

The keyframe animation is limited to the supporting hero panel.

The catalog itself remains still until interaction.

The product information is concise by design.

The action link remains reachable when the modal is active.

The same structure can support different products.

The component does not require unique IDs for its motion.

The CSS selectors are local to the feature.

The feature folder is intentionally self-contained.

## Testing guidance

Resize the browser to desktop width.

Confirm all three cards fit comfortably.

Resize to tablet width.

Confirm the grid becomes two columns.

Resize to phone width.

Confirm the grid becomes one column.

Use Tab to move through navigation links.

Confirm focus outlines are visible.

Tab into a product card action.

Confirm the modal opens through focus-within.

Enable reduced-motion in the operating system.

Confirm strong motion is removed.

Confirm product content remains readable.

## Reuse checklist

Copy the product card markup.

Keep the `.card` positioning context.

Keep the `.modal` inside the card.

Replace product artwork with a project-specific visual.

Replace product copy with meaningful supporting content.

Keep the focusable action inside the card.

Retheme the CSS variables when needed.

Preserve the reduced-motion rule.

Preserve focus-visible outlines.

Avoid adding JavaScript solely to reproduce the motion.
