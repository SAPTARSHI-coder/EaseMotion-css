# Edge-Aware Anchored Flyout

## Overview

A set of contextual flyouts anchored to trigger buttons using native
CSS Anchor Positioning, automatically flipping position when close to
a viewport edge. Flyouts near screen edges commonly clip or overflow
without manual repositioning logic; native anchor positioning solves
this declaratively. Implemented entirely with HTML and CSS.

## Features

- Eight trigger buttons placed around every edge and corner
- Native CSS anchor positioning via `anchor-name` / `position-anchor`
- Automatic fallback flipping with `position-try-fallbacks`
- Smooth opacity, scale, and translate entrance animation
- Arrow indicator pointing to each trigger
- Popover-based show/hide with no JavaScript
- Fully responsive layout

## File Structure

- `demo.html`
- `style.css`
- `README.md`

## How It Works

Each trigger button declares an `anchor-name`, and its corresponding
flyout references that name via `position-anchor`, tying its position
directly to the trigger regardless of where it sits on the page. The
`position-try-fallbacks` property lets the browser automatically flip
the flyout's placement (block, inline, or both) when the default
position would overflow the viewport near an edge or corner.

Flyouts use the native `popover` attribute, toggled by
`popovertarget` on each button, so opening and closing requires no
JavaScript. Entrance animation is handled with `@starting-style` and
`transition-behavior: allow-discrete`, animating opacity and transform
from a scaled-down state into place the moment the popover opens.

## Example Use Cases

- Context menus
- Popovers and tooltips
- Profile menus
- Dashboard quick actions
- Settings panels

## Why This Example?

Flyouts positioned near screen edges traditionally require JavaScript
to measure available space and reposition manually. Native anchor
positioning removes that need entirely, letting the browser handle
edge-awareness declaratively while CSS transitions reinforce the
spatial link between trigger and flyout. This fits EaseMotion CSS's
CSS-first philosophy directly, and it's production-inspired because
edge-safe contextual menus are a near-universal UI requirement.
