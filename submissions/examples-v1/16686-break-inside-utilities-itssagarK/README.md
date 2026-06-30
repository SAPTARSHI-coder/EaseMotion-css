# CSS Break-Inside Utilities (Issue #16686)

This submission introduces **break-inside** utility classes for the **EaseMotion CSS** framework. These utilities help control layout fragmentation within multi-column, print, and paginated flows.

## 📋 Features & Classes

| Utility Class                     | CSS Rule                                 | Description                                                                                                 |
| :-------------------------------- | :--------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| `.ease-break-inside-auto`         | `break-inside: auto !important;`         | Allows standard fragmentation behavior within the container.                                                |
| `.ease-break-inside-avoid`        | `break-inside: avoid !important;`        | Prevents the element from being split across columns or printed page boundaries. Includes legacy fallbacks. |
| `.ease-break-inside-avoid-page`   | `break-inside: avoid-page !important;`   | Specifically prevents splitting when printing or viewing paginated documents.                               |
| `.ease-break-inside-avoid-column` | `break-inside: avoid-column !important;` | Specifically prevents splitting when using CSS multi-column layouts.                                        |

## 🛠️ Usage Example

To keep a card intact in a multi-column masonry block, apply `.ease-break-inside-avoid`:

```html
<div class="masonry-layout">
  <div class="card ease-break-inside-avoid">
    <h3>Transaction Summary</h3>
    <p>
      This entire card will remain in a single column instead of fracturing.
    </p>
  </div>
</div>
```

## 🎨 Interactive Demo

The included [demo.html](demo.html) showcases:

1. A multi-column masonry block featuring various card types.
2. A **Visualizer Toggle** that highlights elements set to avoid breaking, demonstrating their structural boundaries.
3. A **Print Preview** option to test printed layout fragmentation behavior (`page-break-inside`).
