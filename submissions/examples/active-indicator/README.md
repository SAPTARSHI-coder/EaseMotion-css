# Bug 4 Fix: Active Nav Indicator Centering

## Overview
This patch centers the active state indicator (the purple bottom border) under the active navigation item in the top header.

## Implementation Details
* Used an `::after` pseudo-element on `.nav-link.active` to create the underline.
* Applied `position: relative;` to the parent `.nav-link`.
* Used `left: 50%;` combined with `transform: translateX(-50%);` on the pseudo-element to guarantee mathematically perfect centering, regardless of the text length.