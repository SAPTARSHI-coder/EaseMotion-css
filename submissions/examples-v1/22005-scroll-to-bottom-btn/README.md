# Animated Scroll-to-Bottom Button

> **Issue:** [#22005](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22005)

## Overview

A fixed-position scroll-to-bottom button component that animates in when the user is near the top of a long page, and hides itself when the user approaches the bottom. The button scrolls to the footer on click.

## EaseMotion CSS Classes Showcased

| Class         | Description                                               |
| ------------- | --------------------------------------------------------- |
| `ease-bounce` | Applied to the scroll-down hint arrow in the hero section |

## Component Classes

The following classes are proposed for integration into EaseMotion CSS:

| Class                            | Description                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `.scroll-to-bottom-btn`          | Base styles — fixed position, hidden by default (opacity: 0, transform: scale(0.9) translateY(12px)) |
| `.scroll-to-bottom-btn--visible` | Visible state — opacity: 1, transform: none                                                          |

## Animation Properties

- **Enter:** `opacity: 0 → 1`, `translateY(12px) scale(0.9) → translateY(0) scale(1)`
- **Duration:** `0.3s ease`
- **Hover:** `translateY(2px) scale(1.05)` with glow shadow
- **Active:** `scale(0.95)` — tactile press feedback

## How to Test

1. Open `demo.html` directly in a browser (no build step required).
2. The scroll-to-bottom button should NOT be visible on page load.
3. Scroll down past 20% of the page — the button should smoothly animate in.
4. Scroll past 85% of the page — the button should smoothly animate out.
5. While visible, click the button — it should scroll smoothly to the bottom of the page.
6. Verify hover and active states render correctly.
