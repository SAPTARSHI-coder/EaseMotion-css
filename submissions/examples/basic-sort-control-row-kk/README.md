# Basic Sort Control Row

## What it does

This submission adds a simple CSS-only sort control row for table toolbars,
filter panels, dashboard lists, and admin interfaces.

It presents a sort option icon, label, helper text, direction label, and active
state in one compact reusable row.

## How to use it

Add the base row class with an icon, copy area, sort direction, and state pill:

```html
<article class="basic-sort-control-row is-active">
  <span class="sort-icon is-date" aria-hidden="true">DT</span>
  <div class="sort-copy">
    <strong>Date created</strong>
    <p>Show newest records first</p>
  </div>
  <span class="sort-direction">Desc</span>
  <span class="sort-state is-active">Active</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
table and dashboard interfaces. The row can be reused inside filter cards,
settings panels, admin tables, and list controls while staying lightweight and
CSS-only.

## Included features

- Date, name, and priority sort examples
- Active, available, and priority state pills
- Ascending and descending direction metadata
- Long text truncation for sort descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the sort control row
- `README.md` - usage and contribution context
