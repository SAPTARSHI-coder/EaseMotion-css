# @media (dynamic-range) — HDR Display Styling

## Overview

Demonstrates CSS `@media (dynamic-range: standard/high)` media query for HDR-aware styling. Features brightness bars from 200-1600+ nits, contrast pair comparisons, 10-bit P3 gradient showcase, and a threshold visualization grid. A live HDR detector shows your display's dynamic range capability with an orange indicator dot.

## Usage

Open `demo.html` on both SDR and HDR displays. On an HDR display (MacBook Pro XDR, iPad Pro, HDR monitor), the header dot glows orange, and the ultra brightness bar, gradients, and threshold steps appear more vivid. The code block shows how to layer HDR enhancements as progressive enhancement over SDR-safe defaults.

## Browser Support

`@media (dynamic-range)` is supported in Safari 15.4+ and Chrome 98+ on HDR-capable displays. Firefox does not currently support this media query. Browsers without support default to standard dynamic range behavior, and all HDR enhancements are safely hidden behind the media query. Use `color(display-p3 …)` inside the query for wide-gamut HDR colors.
