# Paint Order Non-Scaling SVG Fix

Resolves **#83313**

## Overview
Uses duplicate SVG use tags to force stroke-behind-fill rendering on iOS Safari, bypassing the broken paint-order directive.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
