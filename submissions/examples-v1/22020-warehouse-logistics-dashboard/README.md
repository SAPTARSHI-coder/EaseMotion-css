# Animated Warehouse Logistics Dashboard

> **Issue:** [#22020](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22020)

## Overview

A self-contained animated warehouse logistics and shipment tracking dashboard. Demonstrates EaseMotion CSS entrance animations across stat cards, shipment rows, capacity bars, delivery timeline, activity log, and notification panels.

## EaseMotion CSS Classes Showcased

| Class                | Applied To                                                      |
| -------------------- | --------------------------------------------------------------- |
| `ease-fade-in-left`  | Sidebar navigation, delivery timeline items, notification cards |
| `ease-fade-in-down`  | Topbar                                                          |
| `ease-zoom-in`       | Overview stat cards (staggered), quick action buttons           |
| `ease-fade-in-up`    | Widget panels (staggered delays)                                |
| `ease-fade-in-right` | Shipment progress rows, activity log entries                    |
| `ease-fade-in`       | Warehouse capacity fill bars                                    |

## Sections

- **Overview Cards:** Shipments, Inventory, Dispatches, Revenue
- **Shipment Progress Widget:** Live shipment list with status badges (In Transit, Delivered, Pending, Processing)
- **Warehouse Capacity Widget:** Zone-by-zone capacity bars with safe/warning/critical color coding
- **Delivery Timeline Widget:** Visual step timeline for the current day's logistics flow
- **Logistics Activity:** Timestamped activity log with category badges
- **Notifications Panel:** 3 priority notifications with severity accents
- **Quick Actions:** Dispatch Shipment, Add Inventory, Export Report

## How to Test

1. Open `demo.html` directly in a browser (no build step required).
2. Observe staggered entrance animations on load for all cards, widgets, and log rows.
3. Hover over stat cards — verify the lift and glow effect.
4. Check the sidebar, topbar, and responsive layout at ≤ 900px viewport.
5. Verify the capacity bars render with the correct color coding (green/amber/red).
