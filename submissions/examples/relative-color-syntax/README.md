## What

This example demonstrates CSS Relative Color Syntax, which allows deriving new colors from an existing color by manipulating individual channels using the `from` keyword. A base color picker lets you choose a source color, and four cards display the result of channel manipulation: a lighter variant (increased lightness), a darker variant (decreased lightness), a complementary color (hue shifted by 180°), and a semi-transparent version (alpha at 40%). A comparison row shows all five colors side by side.

## How

The base color is set as a CSS custom property (`--base-color`). Each derived color uses the `oklch(from ...)` function with channel arithmetic: `calc(l + 0.15)` for lighter, `calc(l - 0.15)` for darker, `calc(h + 180)` for the complementary, and an alpha override for transparency. A JavaScript helper converts the hex picker value to OKLCH using the CSS Color Level 4 algorithm, applies the channel deltas, and converts back to display the resulting hex values on each card.

## Why

Relative Color Syntax eliminates the need for preprocessor color functions (Sass darken/lighten, Less spin) by providing native CSS color manipulation. By working in OKLCH, the derived colors maintain perceptual consistency — unlike HSL-based manipulation, OKLCH lightness changes appear uniform to the human eye and hue shifts preserve saturation. This makes dynamic theming, accessible color contrast adjustments, and design token derivation possible entirely in CSS without build tools.
