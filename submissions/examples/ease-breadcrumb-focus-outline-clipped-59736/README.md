# Ease Breadcrumb Focus Outline Fix

This submission provides a fix for the focus outline clipping issue in the `ease-breadcrumb` component (#59736).

## What it does

When the breadcrumb links are placed inside a container with `overflow: hidden` or `overflow: auto`, the standard focus outline can be clipped because it extends outside the bounding box.

This fix uses `outline-offset: -2px` to pull the focus ring inward, ensuring it remains fully visible regardless of the parent container's overflow settings.

## How to use it

1. Include the styles for `.ease-breadcrumb-link:focus-visible` in your CSS.
2. The focus outline will automatically be rendered correctly inside the element's bounding box without being clipped.

## Why it fits EaseMotion CSS

EaseMotion CSS focuses on polished, highly accessible components. An obscured focus ring negatively impacts the accessibility experience for keyboard users. By applying this simple adjustment, we maintain a beautiful default focus state while enhancing accessibility and resilience to different layouts.
