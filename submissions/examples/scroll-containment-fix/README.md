# Sandbox Layout Fix: Horizontal Scroll Elasticity Containment Patch

## Overview

A performance and layout stability fix for horizontal slider lists, carousels, and grid scrolls to block scroll momentum leaks and eliminate body viewport wobbling on iOS Safari.

## 📁 Sandbox Configuration Files

- `demo.html` — Mobile-ready carousel testing view equipped with strict viewport tags to evaluate gesture momentum bounds.
- `style.css` — Scoped layout sheet setting axis constraints and modern overscroll tracking rules linked back to variables.

## 🐛 The Bug Resolved

Previously, swiping through horizontal panels on mobile iOS Safari triggered a disruptive user experience glitch. Once a swipe gesture reached the end of the sliding track, the trailing touch force passed right up to the document root layer. Safari's native elastic bounce physics would then pull the entire website sideways, revealing empty backgrounds and breaking layout constraints.

## 🛠️ The Solution

The scroll boundary chains are stabilized. By applying `overscroll-behavior-x: contain;` to the scrolling component container, the browser stops the momentum path directly at the slider borders. This keeps your horizontal sliders fluid and responsive under gesture drag events while keeping the main page layout firmly anchored.
