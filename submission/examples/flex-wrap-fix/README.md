# Sandbox Layout Fix: Flexbox Wrapped Gap Collapse Resolution Patch

## Overview

A cross-browser layout patch for flex-wrap tracking layers to prevent vertical layout collapsing and item flush-stacking on legacy WebKit/Safari web engines.

## 📁 Sandbox Configuration Files

- `demo.html` — High-density keyword pill layout container to stress-test multi-row item wrapping behavior.
- `style.css` — Tokenized style manager applying atomic `@supports` fallback rules linked back to root tokens.

## 🐛 The Bug Resolved

Previously, populating responsive flex wrap containers (like keyword clouds, tags, or filter pills) inside legacy WebKit and Apple Safari engines caused complete vertical layout collapsing. While the browser correctly mapped column spacing horizontally, it dropped the vertical row-gap rule entirely during item wrap events. This forced elements to stack flush against each other vertically, breaking layout balance.

## 🛠️ The Solution

The item margins are stabilized. By adding an explicit `@supports not (row-gap: 1px)` conditional feature testing query block, the framework isolates unsupported layout engines. On these specific devices, it hooks a safe component margin offset combined with a negative structural bottom wrap margin, simulating proper gap layouts across all browsers without adding runtime JavaScript bloat.
