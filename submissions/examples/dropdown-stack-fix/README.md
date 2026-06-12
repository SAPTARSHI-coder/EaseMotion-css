# Sandbox Layout Fix: Chromium Dropdown Stacking Index Resolution

## Overview

A performance-focused structural stacking patch for expanding overlay components to resolve z-index layer bleed anomalies inside Chromium-based browser layout engines.

## 📁 Sandbox Configuration Files

- `demo.html` — Staged layout dashboard sandbox stacking overlay components above explicitly layered context panels.
- `style.css` — Scoped modifier block introducing localized encapsulation rules linked back to root tokens.

## 🐛 The Bug Resolved

Previously, triggering absolute-positioned dropdown menu options inside Chromium browser engines (such as Google Chrome and Microsoft Edge) caused the selection panel to bleed underneath adjacent layout cells or relative section rows. This behavior completely blocked click interaction hooks on menu paths and broke the presentation layout hierarchy of application modules.

## 🛠️ The Solution

The stacking context container layer is stabilized. Rather than writing arbitrary high global numbers across multiple global layout arrays, this patch introduces an explicit `isolation: isolate` rule onto the main dropdown parent node wrapper. This enforces an independent, flat stacking plane boundary that forces the browser rendering path to paint child popups cleanly above neighboring text elements.
