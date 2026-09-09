# Parallax Button Usage Guide

## Overview

This submission documents a reusable Parallax Button component.

Issue #80010 requests documentation demonstrating how to use the component.

The documentation is placed under `submissions/docs/` as required.

The example is self-contained and can be opened directly in a browser.

The button uses layered visual movement to create a subtle depth effect.

## Reference

The issue title references PR #43294.

That merged PR demonstrates the repository's expected three-file submission pattern.

It includes `demo.html`, `style.css`, and `README.md` and keeps changes inside `submissions/`.

This documentation follows that same isolated three-file structure.

## Component Purpose

The Parallax Button is intended for prominent calls to action.

Its decorative layers can shift slightly when the pointer moves across the button.

The visual effect should support the button hierarchy rather than distract from its label.

The control remains a normal HTML button or link depending on the action.

## Basic Markup

Use a real button when the control performs an action on the current page.

```html
<button class="parallax-button" type="button">
  <span class="parallax-button__layer" aria-hidden="true"></span>
  <span class="parallax-button__label">Explore features</span>
</button>
```

Decorative layers should be hidden from assistive technology.

Keep the visible action label concise and meaningful.

## Class Structure

`parallax-button` is the component block.

`parallax-button__layer` represents the decorative depth layer.

`parallax-button__label` contains the user-facing action text.

Additional modifiers can be introduced for intentional size or theme variants.

Keep the naming consistent when adapting the component to another page.

## Interaction

The parallax treatment can respond to hover and focus states.

Do not make the effect the only indication that the control is interactive.

The button should remain visually recognizable when the pointer is not over it.

Keep the movement subtle enough that it does not interfere with reading the label.

## Accessibility

Use native `<button>` or `<a>` elements rather than generic clickable containers.

Preserve a visible focus indicator for keyboard users.

Do not remove focus outlines without providing an equally clear replacement.

Decorative layers should use `aria-hidden="true"`.

The accessible name should come from the visible button label whenever possible.

## Keyboard Usage

Native buttons are keyboard accessible by default.

Enter and Space should activate a button through normal browser behavior.

If the component is converted to a link, use an actual anchor element with a valid destination.

Do not add unnecessary ARIA roles to native interactive elements.

## Reduced Motion

Respect `prefers-reduced-motion` for decorative transitions.

A reduced-motion mode can disable parallax movement while preserving hover and focus styling.

The button must remain fully usable when animation is disabled.

Do not communicate action state through motion alone.

## Responsive Behavior

The button should fit comfortably within narrow containers.

Avoid fixed widths that cause horizontal scrolling on mobile screens.

Keep the label readable when the viewport is reduced.

Test the component inside cards, navigation areas, hero sections, and forms.

## Customization

CSS custom properties can control depth, radius, accent treatment, and transition timing.

Adjust the visual depth to match the surrounding design system.

Keep transitions short enough to feel responsive.

Use larger decorative offsets only when the surrounding layout has enough visual space.

## Integration

Load `style.css` alongside the component markup.

Copy the markup into the desired page section.

Replace the example label with an action that describes the destination or result.

Connect the native button to application behavior separately from the visual component.

## Testing Checklist

- Open `demo.html` directly in a browser.
- Activate the button with a mouse or pointer.
- Navigate to it using only the keyboard.
- Confirm a visible focus state appears.
- Test at narrow viewport widths.
- Test with reduced-motion preferences enabled.
- Confirm decorative elements are ignored by assistive technology.
- Verify the label remains readable in every state.

## Browser Considerations

The example relies on standard HTML and CSS behavior.

Modern browsers support the layout and transition features used by the component.

Native button semantics provide the most reliable interaction behavior.

Provide a static visual state when motion is unavailable.

## Files

`README.md` contains the usage and integration guidance.

`demo.html` provides a self-contained browser demonstration.

`style.css` contains the component presentation and responsive rules.

Keep these three files together for the documentation submission.

## Summary

The Parallax Button combines a familiar native control with restrained layered motion.

Its documentation emphasizes semantics, keyboard access, responsive behavior, and reduced motion.

The component can be reused as a focused visual enhancement without introducing framework dependencies.
