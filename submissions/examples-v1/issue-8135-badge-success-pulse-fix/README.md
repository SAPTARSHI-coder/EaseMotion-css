# Issue #8135: Success Badge Pulse Color Fix

This submission overrides the core `components/badges.css` component to resolve a visual bug reported in Issue #8135.

## What it does

The core `.ease-badge-pulse` animation works by animating a `box-shadow` on a pseudo-element. By default, this glow uses the primary purple color. The core library provided a specific override for `.ease-badge-danger` to use a red glow, but it entirely forgot to provide an override for `.ease-badge-success`. 

This submission adds the missing CSS override so that `.ease-badge-success` correctly pulses with a green glow `rgba(34, 197, 94, 0.7)`, matching its background color.

## How to use it

Include the `style.css` provided in this directory *after* you include the main `easemotion.css` framework:

```html
<link rel="stylesheet" href="path/to/easemotion.css">
<link rel="stylesheet" href="path/to/issue-8135-badge-success-pulse-fix/style.css">
```
