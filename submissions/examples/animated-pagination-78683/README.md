# Animated Pagination

Documentation showcase for EaseMotion CSS issue #78683.

## Overview

This example demonstrates a responsive pagination component with animated hover, focus, and current-page states. The implementation uses semantic navigation and native anchors so the interaction remains lightweight and progressively enhanced.

## Structure

```text
submissions/examples/animated-pagination-78683/
├── demo.html
├── style.css
└── README.md
```

## Features

- Semantic pagination navigation.
- Current-page indication with `aria-current`.
- Animated hover and focus states.
- Circular active-page treatment.
- Responsive sizing and wrapping.
- Visible keyboard focus state.
- Reduced-motion fallback.

## Usage

Open `demo.html` directly or copy the `<nav>` block into an existing application. Replace the example hash links with real routes or page URLs.

## Accessibility

The pagination is contained in a labelled navigation region. Previous and next controls have descriptive `aria-label` values, and the active page uses `aria-current="page"`. All controls remain native anchors for predictable keyboard behavior.

## Responsive Behavior

The pagination wraps when the available width becomes constrained and reduces the control size on smaller screens. The active state remains visually distinct after resizing.

## Motion

Hover and focus states use short transform and color transitions. The reduced-motion media query removes those transitions while preserving the visual active state.

## Customization

Adjust the accent, focus, panel, and text variables in `style.css`. Change the transition duration or active border radius to align the component with an existing design language.

## Files

- `demo.html` — complete semantic pagination showcase.
- `style.css` — animated states, responsive layout, focus styling, and motion preferences.
- `README.md` — implementation, accessibility, and integration notes.
