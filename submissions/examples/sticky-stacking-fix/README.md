# Sandbox Layout Fix: Sticky Position Timeline Multi-Row Waterfall Layer Stacking Resolution

## Overview
A structural rendering fix for consecutive sticky timeline segment headers to completely eliminate layout overlap errors, stop text line collapsar loops, and stabilize vertical stacking context alignments across Gecko (Firefox) viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Precision presentation stage hosting a multi-step vertical log block tracker to check alignment tolerances.
* `style.css` — Scoped layout modifier asset layer specifying explicit stack increments linked back to global tokens.

## 🐛 The Bug Resolved
Previously, appending multiple independent sticky layout header rows down a scroll channel (`position: sticky; top: var(--offset);`) triggered critical structural presentation flaws on Firefox when browser zoom settings were active. Because the layout engine encounters micro rounding vulnerabilities during fractional pixel recalculation passes under view magnification loops, it fails to separate element depth matrices natively. This causes trailing headers to slip over or behind preceding sticky nodes instead of cascading down cleanly, tearing reading orders apart.

## 🛠️ The Solution
The box model stacking priorities are optimized. By injecting explicit, ascending relative index parameters (`z-index: 10;`, `20;`, `30;`) across subsequent sticky blocks sequentially, you command the browser painter thread to isolate element boundaries cleanly. This forces the Gecko engine to handle layout transitions within rounded whole-pixel coordinates, locking elements to clean vertical waterfall rows across all breakpoints.
