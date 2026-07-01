# Comprehensive Dark Mode Tokens

A robust extension to the default dark mode variables in EaseMotion CSS.

## The Problem
Currently, the core `variables.css` redefines base layout tokens in dark mode (`--ease-color-bg`, `--ease-color-surface`, `--ease-color-text`, etc.), but leaves the neutral scale (`--ease-color-neutral-50` through `900`) and semantic colors (`primary`, `success`, `danger`) completely static.

This means if a developer builds a component using `var(--ease-color-neutral-100)` for a background, it remains light gray in both modes.

## The Solution
This submission provides a `style.css` snippet that fully inverts the neutral scale and lightens semantic colors inside both `@media (prefers-color-scheme: dark)` and `[data-theme="dark"]`.

This enables **seamless theme switching**: elements using `neutral-*` variables automatically adjust their contrast appropriately without needing verbose utility classes.

### How to use
Import `style.css` into your project after `easemotion.min.css`.
