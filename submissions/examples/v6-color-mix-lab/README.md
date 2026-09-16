# Color Mix CurrentColor Parse Fix

Resolves **#87386**

## Overview
Resolves WebKit color-mix parse crashes by explicitly mapping text colors to custom variables rather than relying on currentcolor inside the Lab color space.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
