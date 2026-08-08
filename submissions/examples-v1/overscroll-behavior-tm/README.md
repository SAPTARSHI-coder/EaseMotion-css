# Sandbox Optimization: CSS Overscroll Behavior Control

## Overview
A structural patch using the CSS `overscroll-behavior` property to control scroll chaining behavior — preventing the parent page from scrolling when an inner scrollable element reaches its boundary in chat interfaces, drawers, modals, and nested list containers.

## Sandbox Configuration Files
* `demo.html` — Interactive testing canvas with outer page and inner scroll boxes to demonstrate chaining vs. containment.
* `style.css` — Localized scroll modifier block applying overscroll-behavior variants linked back to framework core tokens.

## The Bug Resolved
When an inner scrollable container reaches its scroll limit, the browser propagates the scroll gesture to the nearest scrollable ancestor — the page body. This creates an unintended "scroll chaining" effect. In chat windows, drawers, and nested panels, users expecting the inner area to stop scrolling instead unintentionally scroll the entire page.

## The Solution
Setting `overscroll-behavior: contain` on inner scroll containers intercepts the scroll chain at that element's boundary. The scroll gesture halts within the container. Combined with `overscroll-behavior: none` for full isolation (including disabling pull-to-refresh on mobile), the page-level scroll experience remains uninterrupted.
