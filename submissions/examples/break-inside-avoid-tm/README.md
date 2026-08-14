# Sandbox Optimization: CSS Break Inside Avoid for Multi-Column Layouts

## Overview
A structural layout patch using the CSS `break-inside: avoid` property to prevent content cards from being split across column or page breaks in multi-column layouts, CSS Grid rows, and print stylesheets.

## Sandbox Configuration Files
* `demo.html` — Testing canvas with multi-column and flex-row layouts demonstrating how cards stay intact across column breaks.
* `style.css` — Localized layout modifier block applying break-inside and column-break rules linked back to framework core tokens.

## The Bug Resolved
In a multi-column CSS layout, long cards or rich content blocks can be split across two columns — the top half in one column and the bottom in the next. This breaks visual context, separates related content, and makes layouts feel broken. The same issue occurs in paginated print layouts and PDF exports.

## The Solution
Setting `break-inside: avoid` on each content card instructs the browser to keep the entire element on one column or page. The browser moves the whole card to the next column rather than splitting it. Supporting properties `-webkit-column-break-inside: avoid` and `page-break-inside: avoid` provide cross-browser and print media coverage.
