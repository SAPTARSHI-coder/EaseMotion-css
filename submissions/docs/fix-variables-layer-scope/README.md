# Fix: `:root` Tokens Inside `@layer` Breaks Cascade Contract

## Issue

The entire `:root` block in `core/variables.css` (line 7–148) is wrapped inside `@layer easemotion-base`. CSS custom properties defined inside a cascade layer have lower specificity priority than un-layered `:root` rules from user stylesheets. This means any consumer declaring `--ease-color-primary` outside a layer will silently override the framework default even without `!important`.

Meanwhile, `easemotion.css` comments say (line 23): _"variables.css is left unlayered so custom properties are globally defined"_ — the intent and implementation are contradictory.

## Root Cause

The `@layer easemotion-base` wrapper was likely added for consistency with other core files but violates the documented design of keeping variables un-layered.

## Fix

Remove the `@layer easemotion-base` wrapper from `variables.css` so that design tokens are truly unlayered and globally authoritative, matching the documented intent in `easemotion.css`.

## Files Changed

- `core/variables.css` — Remove `@layer easemotion-base` wrapper around `:root`

## Demo

Open `demo.html` to see that design tokens work correctly when un-layered and consumer overrides require explicit intent.
