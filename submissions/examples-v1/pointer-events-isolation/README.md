# Sandbox Layout Fix: Absolute Overlay Box Pointer-Events Collision Resolution

## Overview
A structural interaction fix for overlay panels and hidden drawers to completely stop click-blocking malfunctions, resolve hover layer collisions, and restore gesture penetration across Safari and Firefox viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive presentation workspace rendering stacked hit panels to evaluate hover penetration vectors.
* `style.css` — Scoped modifier layout layer setting explicit input tracking boundaries linked back to global tokens.

## 🐛 The Bug Resolved
Previously, nesting absolute overlay panels or drawer tracks (`transform: translateX(-100%); opacity: 0;`) inside an active layout canvas caused severe interface blocking faults on Safari and Firefox. Because visual hiding filters do not naturally pull element boundaries out from the browser's interaction tree, the invisible card box continues to sit directly above the viewport grid. This traps mouse hover inputs and prevents users from accessing any primary action buttons or links positioned underneath the hidden overlay wrapper.

## 🛠️ The Solution
The canvas input tracking registers are optimized. By injecting `pointer-events: none;` into the panel's default hidden profile, you instruct the browser's hit-testing layer to pass all gestures directly through its bounding box coordinates. Sibling selectors look up input hooks (`:checked`) to switch the parameter to `pointer-events: auto;` only when the drawer slides open, guaranteeing perfect interaction containment.
