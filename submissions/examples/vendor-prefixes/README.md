# Vendor Prefixes for Cross-Browser Compatibility

## What it does

Adds -webkit-, -moz-, and -o- vendor prefixes to animation, transform, and transition properties to ensure consistent rendering across all major browsers including older Safari and mobile browsers.

## How to use

Add after easemotion.css:
\\\html

<link rel="stylesheet" href="easemotion.css">
<link rel="stylesheet" href="submissions/vendor-prefixes/style.css">
\\\

## Why it fits EaseMotion CSS

Fixes issue #1117 - ensures EaseMotion animations work correctly on WebKit-based browsers, Safari, and legacy mobile browsers.
