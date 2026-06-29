# Sandbox Optimization: CSS Hyphens Text Layout Control

## Overview
A layout correction patch for text-heavy columns using the CSS `hyphens` property to enable automatic and controlled hyphenation of long words, preventing ragged right edges and overflow in constrained column widths.

## Sandbox Configuration Files
* `demo.html` — Cross-breakpoint testing canvas demonstrating hyphenation behavior in narrow vs. wide columns.
* `style.css` — Localized text modifier block applying hyphens and hyphen-limit constraints linked back to framework core tokens.

## The Bug Resolved
Without hyphenation, introducing long unbreakable strings into a narrow column causes one of two problems: the column expands horizontally to fit the word (causing layout overflow), or the browser forces the word onto its own line with excessive white space. Both degrade readability and break the intended typographic rhythm.

## The Solution
By setting `hyphens: auto` on constrained text containers, the browser automatically inserts soft hyphens at detected syllable boundaries. Combined with `hyphen-limit-chars` and `hyphen-limit-zone`, hyphenation is constrained to produce clean, readable text without awkward breaks or column overflow.
