# Transform Origin Border Box Fix

Resolves **#87381**

## Overview
Manually offsets the transform-origin to align with the border-box center, fixing off-axis wobbling during 3D card flips with heavy padding.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
