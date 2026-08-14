# Animated Breadcrumb

Documentation and a standalone demonstration for the Animated Breadcrumb component requested in issue #78660.

## Overview

The Animated Breadcrumb adds a short reveal and emphasis transition to a semantic breadcrumb trail. It provides visual feedback while keeping the navigation hierarchy easy to scan.

## Demo

Open `demo.html` to view the breadcrumb trail and its animated current-page treatment.

## Usage

Use a semantic navigation landmark with an ordered list. Mark the current location with `aria-current="page"` and use CSS classes only for presentation.

## Accessibility

The navigation remains usable without animation. Links are keyboard accessible, the current page is announced through `aria-current`, and reduced-motion preferences disable the transition.

## Customization

Change the animation duration, separator spacing, typography, and current-page emphasis in `style.css`.

## Files

- `demo.html` — semantic animated breadcrumb example.
- `style.css` — animation and responsive styling.
- `README.md` — usage and accessibility guide.