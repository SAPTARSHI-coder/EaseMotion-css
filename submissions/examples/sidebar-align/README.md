# Bug 3 Fix: Sidebar Badge Vertical Alignment

## Overview
This fix corrects the vertical misalignment of the "NEW" badge relative to the "MOTION ENGINE" text in the left sidebar navigation.

## Implementation Details
* Wrapped the category title and badge in a `.sidebar-category` flex container.
* Implemented `align-items: center;` to mathematically center the baseline of both child elements.
* Removed arbitrary or inherited margins from the `.badge-new` class that were causing it to sit artificially high.
* Used `gap: 8px;` for consistent spacing between the text and the badge.