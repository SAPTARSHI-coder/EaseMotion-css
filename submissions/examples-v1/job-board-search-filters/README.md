# Job Board — Search Bar & Filters

## What does this do?

A student job board with live search and multi-filter controls. Search by title/company, filter by branch, minimum CGPA, and skills — all updated in real-time with no page reload.

## How is it used?

Open `demo.html` to see 12 mock job listings. Use the controls to narrow results:

- **🔍 Search** — type to search by job title or company (200ms debounced)
- **Branch dropdown** — filter to CSE, ECE, IT, EEE, or ME
- **Min CGPA dropdown** — filter by minimum CGPA requirement
- **Skill chips** — click to toggle; jobs matching at least one selected skill are shown

The result count updates live as filters change.

## Key features

- **Debounced search** — 200ms debounce prevents excessive re-rendering
- **Multi-select skill chips** — toggleable with active state styling
- **Branch & CGPA dropdowns** — single-select filters
- **Live result count** — "Showing X of Y jobs" updates in real-time
- **Animated card entries** — fade-in animation on rendered cards
- **Empty state** — friendly message when no jobs match

## Filter logic

| Filter | Behavior |
|---|---|
| `search` (text) | Case-insensitive match against `title` or `company` |
| `branch` (select) | Exact match against job's branch field |
| `minCgpa` (select) | Jobs with CGPA ≥ selected value |
| `skills` (chips) | Jobs containing at least one selected skill |

## CSS concepts used

- Custom select dropdowns with SVG chevron via `background-image`
- Toggleable chip buttons with active state
- Color-coded branch badges (CSE=purple, ECE=green, IT=amber, etc.)
- Card hover border highlight
- `@keyframes` for card entry animation

## EaseMotion classes used

This demo imports `easemotion.css` for base styling and extends with custom job-board-specific styles.
