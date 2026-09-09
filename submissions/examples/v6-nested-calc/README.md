# Nested Calc Sub-Pixel Blur Fix

Resolves **#87377**

## Overview
Wraps complex layout calculations in CSS round() functions to snap bounding boxes to integer pixels, eliminating anti-aliased border blurring.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
