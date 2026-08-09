# CSS `scrollbar-gutter` Stability Utilities

Relates to feature request **#41213**.

## 1. What does this do?

Provides helper utilities based on the CSS `scrollbar-gutter` property to prevent layout shifts when scrollbars appear or disappear. Includes configurable gutter presets for fixed layouts, dashboards, documentation pages, and responsive applications.

## 2. Why is this useful for EaseMotion CSS?

When a scrollbar appears (because content has overflowed), it takes up physical space in the layout — typically 15–17px on Windows, and 0px on macOS (overlay scrollbars). This causes content to reflow and elements to jump sideways, which:

- Harms **Cumulative Layout Shift (CLS)**, a Core Web Vital metric
- Creates jarring visual instability, especially in dashboards
- Is a common bug that developers patch with `overflow-y: scroll` (always showing the scrollbar, even when empty)

`scrollbar-gutter: stable` is the modern, correct fix. It reserves space for the scrollbar **without** forcing it to always appear.

## 3. Utilities Provided

| Class | `scrollbar-gutter` Value | Use Case |
|---|---|---|
| `.ease-gutter-stable` | `stable` | Single-side gutter — most common case |
| `.ease-gutter-both` | `stable both-edges` | Centered layouts that need symmetry |
| `.ease-scroll-layout` | `stable` on main area | Full dashboard preset (sidebar + scrollable content) |

## 4. How is it used?

```css
/* 1. Basic Stable Gutter */
.ease-gutter-stable {
  overflow: auto;
  scrollbar-gutter: stable;
}

/* 2. Symmetric (Both Edges) Gutter */
.ease-gutter-both {
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}

/* 3. Dashboard Layout Preset (from the issue) */
.ease-scroll-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  height: 100vh;
  overflow: auto;
  scrollbar-gutter: stable both-edges;
}

.ease-scroll-layout main {
  padding: 2rem;
  overflow-y: auto;
  scrollbar-gutter: stable;
}
```

## 5. Demo Included

The demo features an **interactive side-by-side comparison**: click "Toggle Long Content" on both boxes to see the layout shift happen in the unstyled box vs. the perfectly stable `ease-gutter-stable` box. A full **dashboard layout preset** is also shown below.
