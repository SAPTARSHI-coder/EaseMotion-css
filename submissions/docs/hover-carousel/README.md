# Hover Carousel Documentation

An in-depth guide for integrating and customizing the **Hover Carousel** component in EaseMotion CSS.

---

## Overview

The Hover Carousel component features horizontal CSS scroll snapping (`scroll-snap-type: x mandatory`) combined with individual card hover lifts (`translateY(-6px)`), delivering touch-friendly, interactive browsing without external carousel scripts.

---

## Key Features

- **Native Scroll Snap**: Built using CSS Scroll Snap Module Level 1 for 100% native touch momentum.
- **Card Focus Lifts**: Escalates box shadows and transforms when focused or hovered.
- **Mobile Responsive**: Adapts flex widths from `260px` fixed slides on desktop to `82%` viewport slides on mobile.
- **Custom Scrollbar Styling**: Sleek webkit scrollbar tracks included out of the box.

---

## File Structure

```text
submissions/docs/hover-carousel/
├── demo.html     # Live interactive showcase page
├── style.css     # Production CSS stylesheet
└── README.md     # Detailed usage guide & API specification