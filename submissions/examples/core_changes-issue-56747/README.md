# Fix: Sidebar Menu Items Overflow on Narrow Screens

Fixes **#56747** — long sidebar navigation labels overflowed their
container, overlapped adjacent elements, or forced horizontal
scrolling on narrow viewports.

## Root cause

The sidebar links had no defined text-wrapping behavior, and the
sidebar container itself had no `min-width: 0`. By default, a
flex item won't shrink below the natural width of its content's
longest unbreakable run of text — so a label like "Analytics and
Performance Reports" forced the whole sidebar wider than intended,
overflowing its container.

## The fix

Three small, targeted CSS changes — no markup changes, no JavaScript:

**1. `min-width: 0` on the sidebar.**
```css
.sidebar {
  min-width: 0;
}
```
This is the fix that matters most. Without it, a flexbox child
refuses to shrink past its content's intrinsic width, no matter what
`width` you set — which is the actual mechanism behind this bug.

**2. Word wrapping on the links.**
```css
.sidebar a {
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}
```
Long labels now wrap onto a second line inside the sidebar instead of
pushing it wider.

**3. A narrow-viewport layout adjustment.**
```css
@media (max-width: 480px) {
  .demo-shell { flex-direction: column; }
  .sidebar { width: 100%; }
}
```
Below 480px, the sidebar stacks above the content and takes the full
width, rather than staying pinned to a fixed width that no longer
fits a phone-sized screen.

## Why this approach

This addresses the exact root cause (a flexbox min-width default)
rather than papering over the symptom with `overflow: hidden` or
`text-overflow: ellipsis`, which would hide part of every long label
permanently instead of letting users read the full text on wrap.

## How to verify

Open `demo.html` and narrow the browser window (or view on a mobile
device). The "Analytics and Performance Reports" and "User Management
Settings" labels wrap onto a second line within the sidebar instead of
overflowing it or triggering horizontal scroll. Below 480px, the
sidebar stacks above the main content.

## Files

- `demo.html` — the exact sidebar markup from the issue report, in a
  two-column demo layout.
- `style.css` — the three-part fix, plus supporting demo layout
  styling.
- `README.md` — this file.
