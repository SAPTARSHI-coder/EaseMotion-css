# Fix: Marquee Pauses on Focus-Within

## Problem
Marquee only pauses on hover, not when keyboard users focus inside it.

## Fix
Added `:focus-within` to the pause rule alongside `:hover`.