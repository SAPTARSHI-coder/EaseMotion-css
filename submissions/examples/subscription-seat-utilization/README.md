# Subscription Seat Utilization Table

Closes #20759 — Interactive subscription seat utilization dashboard table
showing seat usage, utilization bars, trends, and status across all plans.

## Features

| Feature | Detail |
|---------|--------|
| Summary cards | Total orgs, seats, used seats, critical count |
| Utilization bar | Colour-coded fill: green / amber / red |
| Plan badges | Enterprise / Business / Starter / Free |
| Status badges | Active / Warning / Critical / Inactive |
| 30d Trend | Up / Down / Flat with colour coding |
| Search | Filter by org name or plan |
| Plan filter | Dropdown to filter by plan tier |
| Status filter | Dropdown to filter by status |
| Sortable columns | Click any column header to sort asc/desc |
| Pagination | 8 rows per page with prev/next controls |

## Files
- demo.html - fully interactive table demo
- style.css  - all table, badge, bar and card styles
- README.md  - this file

## Colour Logic
- Green  — utilization below 70%
- Amber  — utilization 70-89%
- Red    — utilization 90%+ (Critical)