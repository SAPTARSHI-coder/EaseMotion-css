# Morphing Loader

Documentation and a standalone demonstration for the Morphing Loader component requested in issue #78653.

## Overview

The Morphing Loader uses layered shapes and smooth CSS animation to communicate an active loading state. It is useful for content that is being fetched or processed.

## Demo

Open `demo.html` to preview the loader with a descriptive status message and a presentation that remains centered across viewport sizes.

## Usage

Place the loader beside a short status message and hide it when the related operation finishes. The demo keeps the loader markup independent from application logic so it can be reused.

## Accessibility

The status region uses an accessible label so the loading state can be announced. Motion is reduced automatically when `prefers-reduced-motion` is enabled.

## Customization

Change the loader dimensions, border radius, animation duration, and surrounding spacing in `style.css`.

## Files

- `demo.html` — complete loading example.
- `style.css` — animation and layout styles.
- `README.md` — usage and accessibility documentation.