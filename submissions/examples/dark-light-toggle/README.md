# Dark/Light Mode Toggle Fix

**Fixes issue:** #1233

## What was broken
The theme toggle button had no JavaScript attached to it,
so clicking it did nothing. There were also no CSS variables
defined for light mode, so even if the toggle worked, nothing
would visually change.

## What this fixes
- Adds a click event listener to the toggle button
- Switches a `data-theme` attribute on the `<html>` tag
- Defines both dark and light mode CSS variable sets
- Saves the user's preference using local Storage so it persists on reload
- Smooth transition animation between themes

## How to use
Just add `data-theme="dark"` to your `<html>` tag and
include the script. Clicking the button toggles it to light mode and back.