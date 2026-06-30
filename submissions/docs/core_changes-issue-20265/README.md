# Core Changes Proposal: Issue #20265

## Feature Overview

Issue #20265 requests a **Construction Project Intelligence Hub** showcase example demonstrating EaseMotion CSS for construction and civil engineering project management.

The showcase features a double-sidebar layout with 6 core sections:

| Section                   | Description                                                          |
| ------------------------- | -------------------------------------------------------------------- |
| **Project Progress**      | Milestone tracking, phase completion, Gantt-style timeline bars      |
| **Resource Allocation**   | Crew utilization, equipment allocation, material requisitions        |
| **Safety Monitoring**     | Incident tracking, safety score, inspection status, hazard alerts    |
| **Budget Analytics**      | Budget vs. actual, cost breakdown, burn rate, variance analysis      |
| **Material Management**   | Inventory levels, reorder points, supplier status, delivery tracking |
| **Timeline Intelligence** | Schedule adherence, delay analysis, critical path, weather impact    |

## Design Approach

- **Double-sidebar layout**: Left sidebar for project nav, right sidebar for alerts and KPIs
- **Construction theme** with orange/amber accent colors, concrete-inspired backgrounds
- **Staggered entrance animations** using `--i` custom property delays
- **Glassmorphism cards** with `backdrop-filter: blur()`
- **Animated progress bars** for completion tracking and budget spend
- `prefers-reduced-motion: reduce` respected
- Zero JavaScript, pure CSS

## Why this is submitted here

Per CONTRIBUTING.md policy and Core Framework Protection, this feature is proposed as a formal submission in `submissions/` rather than modifying `core/` or `components/` directly.

Fixes #20265
