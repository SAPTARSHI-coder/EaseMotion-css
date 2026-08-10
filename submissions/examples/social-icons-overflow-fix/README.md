# Fix: Social Icons Overflow on Small Screens

## Issue

Fixes #55313 - Social media icons inside the Team Member Card were overflowing outside the container on screens narrower than 320px.

## Root Cause

The `.social-links` container lacked `flex-wrap`, forcing all icons onto a single line that exceeded the card's width.

## Fix

- Added `display: flex; flex-wrap: wrap; justify-content: center; gap: 8px;` to `.social-links`
- Added `max-width: 100%; overflow: hidden;` to `.team-card`
- Added a media query for extra-small screens (≤320px)

## Testing

Verified in Chrome DevTools responsive mode at 320px, 280px, and 240px widths.
