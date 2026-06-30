# CSS Counter Styling – Section Numbering

## Overview

This example showcases CSS counters (`counter-reset`, `counter-increment`, `counter()`) for automatic document numbering. A multi-level chapter/subchapter/sub-subchapter hierarchy demonstrates academic-style section numbering (I, I.1, I.1.1), while nested ordered lists and custom counter styles (lower-roman, decimal-leading-zero) illustrate the breadth of the counter API.

## Features

- Three-level section numbering with chapter (upper-roman), subchapter, and sub-subchapter counters
- Deeply nested `<ol>` lists with fully qualified numbering (`1.2.3` style)
- Custom presentation via `::before` pseudo-elements with `counter()` and `counter(list, style)`
- Roman numeral and decimal-leading-zero list variants
- Dark theme (`#0a0f1e` background, `#e2e8f0` text) with orange accent (`#f97316`)

## Usage

Open `demo.html` to see counters auto-increment. Add or remove `<section>` or `<li>` elements to watch the numbering update automatically — no JavaScript or manual labels required. Inspect the CSS to see how `counter-reset` scoping creates the hierarchical numbering.
