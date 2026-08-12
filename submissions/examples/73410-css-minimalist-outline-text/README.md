# CSS Minimalist Outline Text

## Overview

A pure CSS text animation built around a restrained outlined type treatment. A soft highlight travels through the text without JavaScript.

## Features

- Minimal outline typography
- Smooth gradient movement
- Responsive display sizing
- Dark-mode-friendly surface
- Reduced-motion support
- No external dependencies

## Implementation

The text uses a transparent fill with a visible stroke. A clipped gradient moves across the glyphs to provide the animated highlight while the outline preserves the shape of the letters.

## Accessibility

The heading remains real text in the document and is not replaced by an image or canvas. When reduced motion is requested, the animation stops and the text keeps a static highlighted appearance.

## Files

- `demo.html` — semantic example content
- `style.css` — outline treatment and animation
- `README.md` — documentation

## Usage

Open `demo.html` directly in a modern browser.

## Issue

EaseMotion CSS issue #73410.
