# Dark Mode Heading Fix

## Problem

Heading elements used a fixed color such as:

```css
color: var(--ease-color-neutral-900);
```

This caused poor visibility in dark mode.

## Solution

Use the semantic theme token instead:

```css
color: var(--ease-color-text);
```

The heading color automatically updates in both light and dark themes.

## Features

- Theme-aware heading colors
- Light/Dark mode toggle
- Fully self-contained demo
- No changes outside `submissions/`

## Files

```
dark-mode-heading-fix-ajit/
├── demo.html
├── style.css
└── README.md
```

Open `demo.html` directly in your browser to view the demo.