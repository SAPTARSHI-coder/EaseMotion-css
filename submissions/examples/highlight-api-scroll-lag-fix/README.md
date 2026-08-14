# Sandbox Layout Fix: CSS Custom Highlight API (`::highlight()`) Scroll Lag & Flashing Resolution

## Overview
A high-performance CSS GPU layer synchronization patch for the CSS Custom Highlight API (`CSS.highlights.set()` and `::highlight()`). It completely eliminates scroll lag, stops highlight box flickering, and locks search highlights to text characters during rapid document scrolling in Chromium viewports.

## 📁 Sandbox Configuration Files
* `demo.html` — Self-contained user cockpit hosting a scrolling document viewport, sample `::highlight()` range targets, and an API initialization script.
* `style.css` — Scoped layout modifier asset layer specifying `contain: paint` boundaries and `will-change: contents` layer promotions.

## 🐛 The Bug Resolved
Previously, using the CSS Custom Highlight API to highlight search terms dynamically inside a long text document caused highlights to lag behind text, flash, or disappear temporarily during scrolling in Google Chrome and Microsoft Edge. Chromium paints `::highlight()` pseudo-elements on an independent document highlight layer. During rapid scrolling, the compositor thread moves the main text layer before the main thread can invalidate and repaint the custom highlight range boxes.

## 🛠️ The Solution
The text block painting boundaries and GPU compositing layers are optimized. By applying `contain: paint;` directly onto the paragraph text blocks containing active highlight ranges and setting `will-change: contents;` on the wrapper, Blink is forced to group the text layer and `::highlight()` pseudo-element ranges onto the same GPU compositing layer. Highlights move smoothly in lockstep with text during scrolling with zero main-thread latency.
