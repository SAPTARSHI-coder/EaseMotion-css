# CSS Ruby Annotation

## Overview
This example demonstrates CSS Ruby Annotation properties — uby-align and uby-position — used for rendering small explanatory text (ruby) alongside CJK characters, commonly seen in Japanese and Chinese typography.

## Features
- **uby-position: over** — places ruby annotation above the base text (horizontal writing)
- **uby-position: under** — places ruby annotation below the base text
- **uby-position: inter-character** — places ruby annotation between characters (vertical writing)
- **uby-align: start** — aligns ruby text to the start of each base character
- **uby-align: center** — centers ruby text over each base character
- **uby-align: space-between** — distributes ruby text evenly across the base

## How to Use
1. Wrap base text in <rb> and ruby text in <rt> inside a <ruby> element
2. Use uby-position to control annotation placement
3. Use uby-align to fine-tune annotation alignment

## Browser Support
- Chrome 133+
- Edge 133+
- Firefox 135+
- Safari 18.4+
