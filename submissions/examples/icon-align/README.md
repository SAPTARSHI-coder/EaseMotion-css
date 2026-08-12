# Bug 6 Fix: Announcement Icon Vertical Alignment

## Overview
This fix corrects the vertical misalignment of the megaphone icon within the maintainer announcement card header.

## Implementation Details
* Applied `display: flex;` and `align-items: center;` to the `.announcement-header` container.
* Stripped the default `margin` from the inner `<h3>` element, which was previously pushing the text out of alignment with the icon.
* Standardized spacing using `gap: 12px;` and set `line-height: 1;` on the icon to ensure precise flexbox centering.