@'

# Fix: Navbar text color unreadable under manual [data-theme=dark]

Fixes #48570

## Problem

The glass navbar component only responded to system-level dark mode via
@media (prefers-color-scheme: dark). When a site manually toggled dark
mode using [data-theme="dark"] on the root/body element, the navbar
text stayed dark and became unreadable against a dark background.

## Fix

Added a [data-theme="dark"] .ease-navbar-glass selector alongside the
existing media query, applying the same dark-mode colors so the navbar
adapts correctly to both system and manual theme toggles.

## How to test

1. Open demo.html in a browser
2. Click "Dark Mode ON" - navbar text should turn light and readable
3. Click "Dark Mode OFF" - navbar returns to light mode styling
   '@ | Out-File -FilePath submissions\docs\fix-navbar-datatheme-baishnvi\README.md -Encoding utf8
