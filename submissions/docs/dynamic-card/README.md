# Dynamic Card Documentation

An in-depth guide for integrating and customizing the **Dynamic Card** component in EaseMotion CSS.

---

## Overview

The Dynamic Card component provides an elevated surface with subtle ambient border glows, responsive padding, and hardware-accelerated hover lifts (`translateY(-6px)`). Perfect for feature grids, blog posts, and dashboard cards.

---

## Key Features

- **Hardware Acceleration**: Smooth 60fps elevation via GPU compositor passes (`transform`, `box-shadow`).
- **Focus Management**: Interactive via keyboard (`tabindex="0"`) with dedicated `:focus-visible` outlines.
- **Flexible Slot Layout**: Easily holds badges, titles, descriptions, and action link buttons.
- **Reduced Motion Support**: Bypasses elevation transforms when reduced motion mode is preferred.

---

## File Structure

```text
submissions/docs/dynamic-card/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification