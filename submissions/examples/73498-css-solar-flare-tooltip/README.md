# CSS Solar Flare Tooltip

## Overview

Issue #73498 demonstrates an accessible tooltip with a warm solar-flare visual treatment. The example uses a native button as the trigger and keeps the tooltip content in the document so the interaction does not depend on JavaScript.

## Features

- Hover and keyboard focus states
- Solar gradient glow
- Tooltip semantics
- Responsive presentation
- Visible focus treatment
- Higher-contrast support
- Reduced-motion support
- Pure HTML and vanilla CSS

## Implementation

The trigger and tooltip use adjacent sibling selectors so the visible state can be controlled entirely by CSS. Opacity and transform are animated together, producing a small lift without changing the surrounding layout.

The stylesheet uses custom properties for the surface, text, accent, hot glow, and focus colors. This makes the visual treatment easier to maintain and keeps repeated values out of individual component rules.

## Responsive Behavior

The tooltip has a maximum width so longer content remains readable without overflowing narrow screens. On small screens the trigger expands to the available content width while the page retains comfortable horizontal padding.

## Accessibility

The trigger references the tooltip with `aria-describedby`, and the same interaction is available through keyboard focus. The focus ring remains visible independently of the glow effect. `prefers-contrast: more` increases border contrast, while `prefers-reduced-motion` removes decorative transitions.

## Usage

Open `demo.html` and hover or focus the button. The tooltip appears beside the trigger.

## Files

- `demo.html` — semantic tooltip markup
- `style.css` — visual treatment, responsive behavior, and accessibility states
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73498.
