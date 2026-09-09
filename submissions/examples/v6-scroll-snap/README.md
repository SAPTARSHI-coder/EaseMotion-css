# Scroll Snap Momentum Lock Fix

Resolves **#87379**

## Overview
Replaces overscroll-behavior with touch-action: pan-y to prevent native scroll snapping from locking up trackpad momentum calculations.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
