# 14 — grid-template-areas-layout

## Overview
Implements a complex page layout using `grid-template-areas` with five zones: header, sidebar nav, main content, aside, and footer. The layout shifts from a three-column desktop view to a two-column tablet view and finally to a single-column mobile view, all without altering the HTML structure.

## Files
- `demo.html` — semantic page with header, nav, main, aside, and footer zones
- `style.css` — dark-themed grid layout with three responsive breakpoints

## Usage
Open `demo.html` and resize the viewport. Each zone maintains its identity via named grid areas while the layout fluidly rearranges at 800px and 540px breakpoints.
