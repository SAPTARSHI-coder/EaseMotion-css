# Mask Image Contain Upside Down Fix

Resolves **#87375**

## Overview
Utilizes mask-size: 100% 100% instead of contain to prevent Blink's rendering engine from silently inverting the Y-axis matrix on SVG gradient masks.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
