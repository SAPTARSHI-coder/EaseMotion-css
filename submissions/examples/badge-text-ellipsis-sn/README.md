# Fix: Badge Text Overflow

## Problem
Long text breaks the badge pill shape.

## Fix
Added `max-width: 12rem`, `overflow: hidden`, and `text-overflow: ellipsis` to contain badge text gracefully.