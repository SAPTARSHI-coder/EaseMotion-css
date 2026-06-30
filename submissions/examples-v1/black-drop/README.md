# Sandbox Layout Fix: Fixed Full-Screen Glass Drawer Overlay Backdrop-Filter Flashing Resolution

## Overview

A high-performance graphic layer rendering patch for full-screen overlay components to completely eliminate backdrop blur flashing artifacts, stop layer flattening defects, and protect sub-pixel color blending operations inside Apple Safari (WebKit) viewports.

## 📁 Sandbox Configuration Files

- `demo.html` — Self-contained user cockpit hosting an absolute mesh gradient scroll runway to stress-test composition layer cycles.
- `style.css` — Scoped layout modifier asset layer specifying native hardware composition locks and explicit layer blur hints linked back to shared tokens.

## 🐛 The Bug Resolved

Previously, deploying a fixed full-screen drawer navigation overlay pane styled with frosted glass transparency profiles (`backdrop-filter: blur();`) over heavy background mesh gradients triggered critical layout breakdown bugs inside Apple Safari. When a user scrolls the background elements underneath the open drawer, the browser's painting engine continuously recomputes background vector changes. To preserve device frame processing budgets during active scroll sweeps, the WebKit compositor thread drops the backdrop color-blending matrices entirely, causing the glass overlay to flash solid colors or render completely flat.

## 🛠️ The Solution

The canvas composition context and hardware layer channels are optimized. By forcing a permanent hardware composition layer promotion via an explicit 3D Z-axis coordinate push rule (`transform: translateZ(0);`) and combining it with strict pipeline processing declarations (`will-change: backdrop-filter;`) straight onto the overlay component wrapper, you forbid WebKit from dropping background rendering lookups. Blur filters composite seamlessly natively across all viewports without running event tracking scripts.
