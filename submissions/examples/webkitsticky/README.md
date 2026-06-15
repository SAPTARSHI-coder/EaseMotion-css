# Offline Banner Z-Index Fix

## Overview
A structural layout patch that resolves stacking context conflicts for fixed system alerts. This fix ensures that critical fixed elements (like "No Internet Connection" banners) establish a dominant z-index layer, preventing them from being obscured by sticky navigation bars or elevated cards during page scroll.

## Features
* **Dominant Stacking Context:** Safely overrides competing z-index layers from sibling layout elements.
* **Isolated Utility:** Uses a scoped `.ease-z-overlay` class to demonstrate the fix without mutating core framework variables.
* **Cross-Browser Safe:** Avoids nested stacking context traps that frequently occur on WebKit mobile browsers.

## Visual Indicators
* A fixed system alert remains permanently pinned to the absolute top of the viewport.
* As the user scrolls down the page, sticky navigation bars and elevated UI components cleanly slide *underneath* the alert banner.
* The alert banner remains fully visible with zero clipping or overlap.

## Why is it helpful?
When building Progressive Web Apps (PWAs) with offline capabilities, communicating network status is mission-critical. By default, sticky headers and floating action buttons often share similar z-index values with fixed banners. If a user scrolls and the navigation bar overlaps the "Offline" warning, the user might attempt to submit forms or refresh data and lose their work. This fix ensures system-level communication always remains the topmost visual priority.

## Implementation
To implement this proper stacking context in your layout:

1. Ensure the core EaseMotion variables and utilities are imported into your stylesheet.
2. Construct your fixed alert using the standard `.ease-alert-fixed` component class.
3. Append the custom `.ease-z-overlay` utility class to the alert container to lock its stacking hierarchy.
4. **Important:** Ensure the fixed alert element is placed as a direct child of the `<body>` tag. Placing it inside a parent container with `overflow: hidden` or its own `opacity` / `transform` values will create a new, lower-level stacking context and break the fix.
