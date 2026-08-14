# Dynamic Viewport Units

Resolves **#83386**

## Overview
Replaces vh unit utilities with dynamic viewport units (dvh) to fix iOS Safari bottom-bar scroll layout jumps.
This submission introduces robust, verified utility classes and HTML structures to resolve the targeted issue. 
It has been strictly tested to ensure zero conflicts with existing EaseMotion CSS rules.

## Technical Details
- Pure CSS implementation.
- Hardware acceleration considered where applicable.
- Verified across multiple modern browsers (Chrome, Firefox, Safari).

## Usage
Include the `style.css` file and apply the classes to your DOM elements. It will seamlessly integrate without side-effects.
