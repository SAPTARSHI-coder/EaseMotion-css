# Sandbox Layout Fix: CSS Grid Track Row Height Reflow Optimization

## Overview

A structural rendering fix for multi-tier grid dashboards to address grid row height miscalculations, block track caching loops, and remove dead visual whitespace artifacts on Mozilla Firefox.

## 📁 Sandbox Configuration Files

- `demo.html` — Interactive dashboard template tracking active collapse state shifts across stacked grid boxes.
- `style.css` — Scoped layout sheet implementing explicit grid track rules linked back to core framework assets.

## 🐛 The Bug Resolved

Previously, nesting collapsible user-interface containers inside a CSS Grid layout configured with dynamic track rows (`grid-template-rows: auto 1fr`) caused systemic rendering issues on Firefox. When a module inside the upper cell row collapsed to hide its contents, the Gecko engine failed to trigger a structural height recalculation loop for the tracking cell. This left a massive dead white gap at the center of the viewport dashboard.

## 🛠️ The Solution

The grid track mechanics are optimized. By replacing the loose `auto` parameters with an explicit `minmax(0, max-content)` matrix gate, the layout engine receives crystal-clear instructions to shrink row heights down to $0\text{px}$ when interior child elements minimize. Content toggling is handled over explicit custom `max-height` transition lanes to ensure smooth, cross-browser layout recalculations.
