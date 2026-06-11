# Sandbox Component Showcase: Pure-CSS Interactive Workspace Grid Customizer

## Overview
A high-performance, script-free dashboard layout grid customizer and column track re-allocation module isolated within an examples subdirectory. It manages variable card sizes and container visibility switches natively using form selection registers, bypassing runtime script engines entirely.

## 📁 Sandbox Configuration Files
* `demo.html` — Interactive user cockpit hosting control bars and variable metric display tracks to evaluate layout fluidity.
* `style.css` — Scoped layout sheet establishing responsive grid tracking properties linked back to global core variables.

## 🚀 Key Layout Mechanics
1. **Radio Component Variable Overrides:** Avoids executing global DOM tree query scripts by containing property mutations inside an isolated grid block layout layer (`--alm-main-card-span`). 
2. **Dynamic Sub-Grid Track Re-allocation:** Driving width updates over structural spans (`grid-column: var(--property);`) prompts the browser layout engine to re-map cell coordinates smoothly on the GPU plane, cutting out frame snaps during track reorganizations.
3. **Sandbox Compliance Safeguard:** Fully satisfies repository security policies by placing every asset line strictly inside `submissions/examples/grid-layout-customizer/`.
