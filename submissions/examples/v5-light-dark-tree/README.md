# Light Dark Color Sub-Tree Fix

Resolves **#83316**

## Overview
Isolates localized color-scheme overrides into custom properties to fix Firefox light-dark() evaluation failures on DOM sub-trees.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
