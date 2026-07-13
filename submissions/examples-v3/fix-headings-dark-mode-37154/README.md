# Fix Headings Visibility in Dark Mode

This submission resolves issue #37154.

## The Bug
In the framework's core `base.css`, heading tags (`h1`-`h6`) and table headers (`th`) were hardcoded to use `color: var(--ease-color-neutral-900)`. Because this neutral token does not switch to a lighter shade in Dark Mode, the headings rendered as near-black text on a near-black background, making them invisible and inaccessible.

## The Fix
This submission provides a CSS override that resolves the issue without modifying the core files. By explicitly redefining the text color of headings and table headers to use `var(--ease-color-text)` (or `inherit` the body color), the headings automatically adapt to the active theme context, appearing legible in both Light and Dark modes.

## File Structure
- `demo.html`: Features headings and a table, along with a theme toggle button to demonstrate the visibility of the text in both themes.
- `style.css`: Contains the CSS override that fixes the heading colors locally.
