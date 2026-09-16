# Sortable Table Header Indicators

This feature provides a clean, reusable visual pattern for sortable table headers showing sort direction with animated indicators, as specified in Issue #11162.

## What does this do?

It adds CSS classes and structure for table header buttons that display animated indicators for table sorting states:

- **Inactive state**: Arrow indicator is semi-transparent, showing the header is sortable.
- **Ascending state (`.is-ascending`)**: Arrow indicator is fully opaque pointing upwards.
- **Descending state (`.is-descending`)**: Arrow indicator is fully opaque pointing downwards (rotating 180 degrees smoothly).

## How is it used?

Structure of a sortable table header:

```html
<button class="sort-header is-ascending">
  Name <span class="sort-icon"></span>
</button>
```

Toggle the classes `.is-ascending` or `.is-descending` on the button to transition states.

## Why is it useful for EaseMotion CSS?

Data tables are essential components of dense web dashboards. Displaying sorting states clearly with smooth transitions enhances usability, keeps the interface modern, and helps users understand table organization at a glance.
