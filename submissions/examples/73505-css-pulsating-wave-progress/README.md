# CSS Pulsating Wave Progress

## Overview

Issue #73505 demonstrates a progress bar with a calm animated wave and subtle pulsating fill. The motion is decorative and the percentage remains readable through the semantic progress value.

## Features

- Moving wave overlay
- Pulsating progress fill
- Accessible progressbar semantics
- Responsive sizing
- Visible focus treatment
- Higher-contrast support
- Reduced-motion support
- No JavaScript or external dependencies

## Implementation

The wave is created with a pseudo-element and a repeating linear gradient. Keeping the overlay separate from the progress fill lets the value remain stable while the decorative texture moves across it.

The fill uses a second animation for brightness rather than repeatedly changing its width. This keeps the progress value deterministic while still giving the component a living visual quality.

## Responsive Behavior

The progress track scales with the container and uses a compact mobile breakpoint for smaller screens. Supporting metadata switches to a vertical layout when horizontal space becomes limited.

## Accessibility

The progress element should expose the current percentage through the ARIA attributes in `demo.html`. The focus state provides a visible boundary when the component is placed inside an interactive context. `prefers-contrast: more` increases visual separation and `prefers-reduced-motion` disables both decorative animations.

## Usage

Open `demo.html`. Set the `--value` property on the progress fill to change the percentage, and keep the corresponding accessible value synchronized with the displayed state.

## Files

- `demo.html` — progress structure and accessible value
- `style.css` — wave, pulse, responsive, contrast, and motion styling
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73505.
