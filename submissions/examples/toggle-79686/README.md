# Responsive Retro Toggle

Issue #79686 demonstrates a responsive toggle component with a bold retro visual style while keeping the native checkbox as the source of truth.

## Overview

This example turns a standard checkbox into a tactile toggle control using only HTML and CSS. The visual track and thumb communicate the checked state, while the real checkbox remains available for keyboard and assistive-technology interaction.

The layout is designed to work comfortably across desktop and mobile widths, with deliberate spacing, readable labels, visible focus treatment, and support for users who prefer reduced motion.

## Features

- Native checkbox semantics
- Retro-inspired visual treatment
- Clear checked and unchecked states
- Visible keyboard focus with `:focus-visible`
- Responsive spacing and layout
- Touch-friendly control dimensions
- Reduced-motion support
- No JavaScript dependency
- Pure HTML and vanilla CSS

## Structure

The component is intentionally small and reusable:

- `demo.html` contains the complete interactive example and supporting implementation notes.
- `style.css` contains the toggle visuals, spacing, responsive rules, focus treatment, and reduced-motion behavior.
- `README.md` documents the component, accessibility considerations, and customization options.

## How It Works

The checkbox remains the functional control. CSS uses the checked state to move the visual thumb and change the appearance of the track. This keeps the interaction predictable while avoiding JavaScript for a simple binary state.

The focus-visible rule adds a clear outline when the control receives keyboard focus. The reduced-motion media query removes the thumb transition for users who have requested less animation at the operating-system level.

## Usage

1. Copy the toggle markup from `demo.html` into your page.
2. Link `style.css` from the same directory or copy the relevant rules into your stylesheet.
3. Replace the sample label and description with the setting controlled by your application.
4. Keep the native checkbox in the markup so keyboard and form behavior remain available.
5. Use the `checked` attribute when the setting should initially be enabled.

## Accessibility

The example uses a real checkbox wrapped by a label, so the entire control can be activated through normal label interaction. Keyboard users can reach the checkbox directly, and `:focus-visible` provides a distinct focus indicator.

The visual switch is decorative and does not replace the native control. This prevents the presentation layer from becoming the only way to understand or operate the setting.

## Responsive Behavior

On smaller screens, the component reduces page padding while preserving the toggle's comfortable dimensions. The control remains readable and usable without requiring horizontal scrolling.

## Motion Behavior

The thumb movement uses a short CSS transition for normal users. Under `prefers-reduced-motion: reduce`, the transition is disabled so the state change occurs without decorative animation.

## Customization

You can customize the component by changing the colors, border radius, spacing, and transition values in `style.css`. Keep the focus outline visually distinct from the surrounding surface, and maintain sufficient contrast between checked and unchecked states.

## Files

- `demo.html` — expanded responsive toggle demonstration
- `style.css` — component styling and responsive behavior
- `README.md` — implementation and usage documentation

## Issue

EaseMotion CSS issue #79686.
