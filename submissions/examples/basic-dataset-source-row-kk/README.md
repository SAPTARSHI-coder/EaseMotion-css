# Basic Dataset Source Row

## What it does

This submission adds a simple CSS-only dataset source row for analytics pages,
data import settings, admin dashboards, and reporting tools.

It presents a source type icon, source name, helper text, sync metadata, and
source state in one compact reusable row.

## How to use it

Add the base row class with a source icon, copy area, sync label, and state
pill:

```html
<article class="basic-dataset-source-row">
  <span class="source-icon is-csv" aria-hidden="true">CSV</span>
  <div class="source-copy">
    <strong>Sales upload</strong>
    <p>Imported from a spreadsheet uploaded by the finance team.</p>
  </div>
  <span class="source-sync">12m ago</span>
  <span class="source-state is-ready">Ready</span>
</article>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is readable, composable, and useful in common
analytics and admin interfaces. The row can be reused inside import settings,
dataset cards, reporting panels, and data source dashboards while staying
lightweight and CSS-only.

## Included features

- CSV, API, and manual source examples
- Ready, live, and review state pills
- Last sync or source status metadata
- Long text truncation for source descriptions
- Subtle hover slide and side accent
- Responsive wrapping on smaller screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the dataset source row
- `README.md` - usage and contribution context
