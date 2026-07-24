# Fix: EaseMotion Class Composition Conflict

## Description
This submission fixes issue #44668, where applying multiple `ease-` animation utility classes to a single element caused only the last declared animation to execute. 

The original codebase used the `animation` shorthand property inside each class, causing the CSS cascade to completely overwrite previous animation definitions.

## The Solution
Instead of splitting properties (which still suffers from cascade overwrites) or using structural wrapper nesting, this fix introduces **CSS Custom Properties (Variables)**. 

A base attribute selector prepares the element to listen for multiple independent animation layers. The individual utility classes then safely activate their specific animation variables without wiping out others.

## How to Test
1. Open `demo.html` in any modern browser.
2. Observe the composite element: it will smoothly fade in **and** slide up simultaneously.