# Floating Feature Grid — Basic Usage

## Overview

This guide documents the basic usage of the Floating Feature Grid.

The component groups related features into a responsive card layout.

It is designed for copy-paste use in documentation.

The implementation uses semantic HTML and plain CSS.

No framework or JavaScript dependency is required for the presentation.

## Scope

This issue covers the basic usage of Floating Feature Grid.

The example focuses on the default component structure.

It explains the block, element, and modifier naming model.

The example keeps content readable at every viewport size.

## Markup

Wrap the cards in a `feature-grid` container.

Use `feature-grid__item` for each feature card.

Keep each card headed by a meaningful `h3` element.

Use native links for destinations.

Keep decorative icons hidden from assistive technology.

## Class Naming

`feature-grid` is the component block.

`feature-grid__list` contains the cards.

`feature-grid__item` represents one feature.

`feature-grid__icon` contains decorative visual content.

`feature-grid__content` groups the text and action.

Modifiers can be added when a visual variant is required.

## CSS Variables

Use custom properties for reusable visual values.

`--feature-accent` controls the primary accent.

`--feature-surface` controls card surfaces.

`--feature-radius` controls corner rounding.

`--feature-shadow` controls elevation.

Variables can be overridden from a parent component.

## Layout

CSS Grid provides the primary layout.

Flexible columns allow cards to share available space.

The layout collapses to one column on smaller screens.

Avoid fixed widths that cause horizontal scrolling.

Keep consistent gaps between cards.

## Interaction

Links remain native keyboard controls.

Hover styling is paired with focus-visible styling.

Focus indicators must remain visible.

Do not make the entire card clickable unless it is a real control.

Avoid using color as the only interaction signal.

## Accessibility

Use semantic sections and headings.

Provide meaningful link text.

Mark decorative icons as hidden.

Maintain readable contrast.

Respect browser zoom and large text settings.

Respect `prefers-reduced-motion` when transitions are used.

## Responsive Behavior

Test the grid at mobile widths.

Test intermediate tablet widths.

Test wide desktop layouts.

Check long titles and descriptions.

Ensure cards do not overflow their container.

## Customization

Override the custom properties to match a design system.

Use modifiers for intentional variants.

Keep content and presentation separate.

Adjust the grid columns only when the content requires it.

## Validation

Validate the HTML structure.

Test navigation using only the keyboard.

Check visible focus states.

Check contrast for text and controls.

Test reduced-motion preferences.

## Files

`README.md` documents the component.

`demo.html` contains the standalone example.

`style.css` contains the presentation layer.

The three files are intentionally self-contained.

## Summary

The basic Floating Feature Grid is lightweight and reusable.

Its naming system supports predictable maintenance.

Custom properties provide safe visual customization.

Responsive CSS keeps the component usable across devices.

Accessibility is included in the default example.
