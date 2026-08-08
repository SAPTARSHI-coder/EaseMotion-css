# Prefers Reduced Motion Support (Atul's Contribution)

## Overview

This feature improves accessibility in EaseMotion by supporting users who prefer reduced motion.

## What I implemented

- Detects reduced motion preference via CSS media query
- Disables animation effects when enabled
- Ensures content is still visible without animation
- Keeps normal behavior for other users

## Why this matters

Some users experience discomfort with animations. This ensures the UI remains accessible and comfortable.

## How to test

1. Open `demo.html`
2. Enable "Reduce Motion" in system settings
3. Reload page
4. Observe animations are disabled

## Files

- demo.html
- style.css