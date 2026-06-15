# Hardware Acceleration Support

## What it does
Forces GPU rendering on all EaseMotion animation classes to prevent layout thrashing and stuttering on lower-end devices.

## How to use
Add this stylesheet after easemotion.css:
\\\html
<link rel="stylesheet" href="style.css">
\\\

## Why it fits EaseMotion CSS
Fixes issue #1115 - complex animations caused CPU-based stuttering. This adds will-change, translateZ(0), and backface-visibility to promote GPU layers.
