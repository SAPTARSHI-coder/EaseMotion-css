# CSS Neumorphic Soft Shadow Text

## Overview

Issue #73398 demonstrates a tactile text treatment built with layered light and dark shadows using only HTML and vanilla CSS.

## Features

- Raised neumorphic text treatment
- Soft highlight and shadow pairing
- Multiple display scales
- Responsive card layout
- Reduced-motion support
- No JavaScript or external assets

## Implementation

The effect uses `text-shadow` to create opposing light and dark edges around semantic text. Supporting cards reuse the same depth language with regular and inset shadows.

## Accessibility

The words remain selectable HTML text. The animation is decorative and is disabled under `prefers-reduced-motion: reduce` so the content does not depend on movement for comprehension.

## Responsive behavior

The three-column study layout collapses to a single column on smaller screens, while the heading sizes use `clamp()` to maintain comfortable proportions.

## Usage

Open `demo.html` in a modern browser. Change the text content or shadow variables in `style.css` to adapt the component to another surface.

## Files

- `demo.html` — semantic examples and design notes
- `style.css` — neumorphic styling, animation, and responsive rules
- `README.md` — implementation documentation

## Issue

EaseMotion CSS issue #73398.
