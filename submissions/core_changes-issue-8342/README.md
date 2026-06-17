# Core Changes — Issue #8342 : Light Mode Text Contrast Fix

## Overview

Several elements on the documentation demo page become difficult to read in light mode due to hardcoded light-colored text styles that do not adapt to theme changes.

## Problem

Some elements use fixed colors such as:

```css
color: rgba(255, 255, 255, 0.6);
```

These values work in dark mode but provide insufficient contrast in light mode, affecting readability across multiple sections.

Affected areas include:

* Hero section description
* Card titles
* Card subtitles
* Ghost button text
* GitHub button text
* Hover button text

## Fix

Replace hardcoded text colors with theme-aware variables so text automatically adapts to both light and dark themes.

Examples:

```css
.demo-hero p {
  color: var(--page-text-muted);
}

.ease-card-title {
  color: var(--page-text);
}
```

## Affected Files

* `docs/demo.html`

## Labels

* bug
* accessibility
* GSSoC-26
