# Table Skeleton Loading — Issue #14190

## What does this do?

A 5-row, 4-column table skeleton loading component with staggered shimmer animation and a toggle between loading and loaded states.

## How is it used?

```html
<div class="ease-skeleton-table">
  <div class="ease-skeleton-row">
    <div class="ease-skeleton-cell ease-skeleton-cell-header">Name</div>
    <div class="ease-skeleton-cell ease-skeleton-cell-wide ease-delay-2"></div>
    <div class="ease-skeleton-cell ease-delay-3"></div>
  </div>
</div>
```

Use `.ease-skeleton-table` as the container, `.ease-skeleton-row` for each row, and `.ease-skeleton-cell` for cells. Add `.ease-skeleton-cell-header` for header cells. Use `.ease-delay-1` through `.ease-delay-5` for staggered shimmer timing. Toggle `.loaded` class on the table to transition from skeleton to real data. Shimmer uses a `linear-gradient` pseudo-element with `background-position` animation.

## Why is it useful for EaseMotion CSS?

Table skeletons are a high-demand pattern for dashboards, data tables, and admin panels. This component provides a polished loading experience with staggered shimmer, smooth loaded transition, and `prefers-reduced-motion` support.
