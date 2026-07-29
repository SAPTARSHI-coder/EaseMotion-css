# Fix: Mobile Sidebar Overlay Missing Backdrop Scrim

## Issue

On mobile (`max-width: 768px`), the sidebar in `components/sidebar.css` opens as a fixed overlay, but there is no backdrop scrim behind it. The main content shifts and scales, but users cannot visually distinguish the sidebar from the background. There is also no click-outside-to-close affordance — the modal pattern creates a backdrop, but the sidebar doesn't.

## Root Cause

The sidebar overlay implementation lacked a backdrop pseudo-element to darken the main content when active.

## Fix

Add a `::before` pseudo-element on `.ease-sidebar-layout.ease-sidebar-open` that creates a translucent backdrop scrim (`rgba(0,0,0,0.4)`) covering the viewport, matching the standard modal pattern and providing visual separation.

## Files Changed

- `components/sidebar.css` — Add backdrop pseudo-element for `.ease-sidebar-open` state.

## Demo

Open `demo.html` and resize the window to mobile width (<768px). Toggle the sidebar to see the new backdrop scrim effect.
