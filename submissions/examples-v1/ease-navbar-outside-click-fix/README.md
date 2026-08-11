# .ease-navbar — Outside Click Fix

Fixes #9878: the `.ease-navbar` mobile menu previously only closed when the hamburger icon was clicked again. This demo shows the corrected behavior.

## What changed
CSS alone (checkbox-hack toggle) cannot detect a click outside the element, so this adds one small, documented vanilla JS snippet (~15 lines, no dependencies) that:
- Closes the menu when the user clicks anywhere outside `.ease-navbar`
- Closes the menu on `Escape`
- Closes the menu when a nav link is clicked

This also resolves the WCAG 2.1 SC 1.4.13 concern noted in the issue — the revealed menu is now dismissible without forcing a second hamburger click.

## Usage
Open `demo.html` directly in a browser — no server needed. Resize to under 768px (or use DevTools device mode) to see the mobile menu.

## Why EaseMotion CSS?
Keeps the existing pure-CSS checkbox-hack toggle and slide-down animation intact; the JS only adds the dismissal behavior CSS can't provide on its own.