# Animated Cloud Infrastructure Dashboard

> **Issue:** [#22018](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/22018)

## Overview

A self-contained animated cloud monitoring dashboard for servers and infrastructure health. Demonstrates EaseMotion CSS entrance animations applied to dashboard cards, widgets, sidebar, and log entries.

## EaseMotion CSS Classes Showcased

| Class                | Applied To                             |
| -------------------- | -------------------------------------- |
| `ease-fade-in-left`  | Sidebar navigation                     |
| `ease-fade-in-down`  | Top navigation bar                     |
| `ease-zoom-in`       | Overview stat cards (staggered delays) |
| `ease-fade-in-up`    | Widget panels (staggered delays)       |
| `ease-fade-in-right` | System log entries (staggered delays)  |
| `ease-fade-in`       | Progress fill bars                     |
| `ease-pulse`         | Live status dot                        |
| `ease-grow-up`       | Network throughput chart bars          |

## Sections

- **Overview Cards:** Active Servers, CPU Usage, Storage Used, Uptime
- **Resource Usage Widget:** CPU, Memory, Disk I/O, GPU progress bars
- **Server Status Widget:** Live server table with status badges
- **Network Performance Widget:** Animated throughput bar chart
- **System Logs:** Real-time log entries with type badges
- **Notifications Panel:** Alert notifications with descriptions
- **Quick Actions:** Restart Server, Deploy Service, Export Logs buttons

## How to Test

1. Open `demo.html` directly in a browser (no build step required).
2. Observe staggered entrance animations for all cards and widgets on load.
3. Hover over stat cards to see the lift and shadow effect.
4. Verify the sidebar navigation, topbar, and responsive layout at ≤ 900px viewport width.
5. Check that the pulsing status dot and animated progress bars render correctly.
