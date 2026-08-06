# Animated Gradient Text Mask

This submission resolves Feature Request #11233 by adding a shimmering gradient text mask utility perfectly suited for premium hero typography.

## What it does
The `.text-gradient-flow` class applies a linear gradient to the text fill, clipping it strictly to the characters using `background-clip: text`. It then continuously animates the background position to create a smooth, infinitely looping color flow.

## How to use it
In this demo, the effect is applied to an `<h1>` tag to showcase how it creates premium typography. Simply include `style.css` and apply the class to any text element. Note: because the text becomes transparent to show the background, this works best on large, bold text.

## Why it fits EaseMotion CSS
Standardizing complex visual effects into simple, composable utilities is exactly what EaseMotion does best. Creating a gradient text mask from scratch involves tricky vendor prefixes (`-webkit-background-clip` and `-webkit-text-fill-color`) that are tedious to write repeatedly. Giving developers a single-class solution for this aligns perfectly with the framework's goals.
