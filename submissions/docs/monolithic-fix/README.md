# Monolithic Style/Script Extraction Fix

**Fixes:** #2767

## Problem
docs/index.html had massive inline style and script blocks making
it 900+ lines long and preventing browser caching.

## Fix
Extracted JavaScript into docs.js and confirmed CSS is already
in docs.css. index.html now references external files only.

## Result
- Cleaner HTML structure
- Browser can cache JS and CSS independently
- Easier to maintain