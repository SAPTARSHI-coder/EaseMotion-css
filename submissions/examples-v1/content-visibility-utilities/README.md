# Content Visibility Utilities

An overview and guide for using CSS `content-visibility` utility classes to optimize rendering lifecycle and page performance.

## Core Questions

### What does this do?

These utility classes map CSS `content-visibility` properties to control whether the browser renders an element's contents, allowing it to skip layout and painting for off-screen content.

### How is it used?

Apply the utility classes directly to wrapper containers of heavy content elements, alongside a placeholder height helper (`.cv-auto-size`) to prevent layout shifts:

```html
<section class="heavy-dashboard-widget cv-auto cv-auto-size">
  <!-- Large nested child DOM elements here -->
</section>
```

### Why is it useful?

It significantly improves initial page load times and rendering performance by preventing the browser from wasting processing cycles layout-calculating and painting elements that are not currently visible inside the viewport.

---

## Utility Classes

| Class           | CSS Declaration                  | Description                                                                                  |
| :-------------- | :------------------------------- | :------------------------------------------------------------------------------------------- |
| `.cv-visible`   | `content-visibility: visible;`   | Content is rendered normally on page load (Default).                                         |
| `.cv-auto`      | `content-visibility: auto;`      | Skips rendering content when off-screen. Automatically renders as it nears the viewport.     |
| `.cv-hidden`    | `content-visibility: hidden;`    | Completely skips rendering the content (similar to hiding it).                               |
| `.cv-auto-size` | `contain-intrinsic-size: 500px;` | Establishes a placeholder height of `500px` for off-screen items to prevent scrollbar jumps. |

---

## Explanation of `content-visibility` & Performance Benefits

The CSS `content-visibility` property is part of the CSS Containment spec. It acts as a hint to the browser to toggle rendering calculations dynamically.

- **Rendering Lifecycle Skipping**: Normally, even if an element is off-screen (e.g. scrolled out of view), the browser must still calculate style sheets, construct the box model tree (layout), and paint it in memory. With `content-visibility: auto`, these expensive operations are skipped entirely for off-screen elements.
- **Visual vs Screen Readers**: Elements styled with `content-visibility: auto` remain searchable and accessible to screen readers, unlike `display: none` which removes them from the accessibility tree.
- **Scrollbar Jumping Prevention (`contain-intrinsic-size`)**: Since an off-screen element with `content-visibility: auto` skips layout, its height defaults to `0`. As you scroll and it enters the viewport, it suddenly renders, layout-calculates, and takes up its actual height. This causes the page height to expand dynamically and the scrollbar thumb to jump erratically.
  - To prevent layout shifts, we use `contain-intrinsic-size` (e.g., `.cv-auto-size` setting `500px`) as a placeholder height so the browser reserves space beforehand.

---

## Usage Examples

### 1. Large Performance-Heavy Card Grid

Optimize grid galleries with complex vector graphics, cards, or nested reviews:

```html
<div class="card-grid">
  <!-- Card 1 -->
  <div class="card cv-auto cv-auto-size">
    <img src="heavy-graphic.svg" alt="Card Graphic" />
    <h3>Product Features</h3>
  </div>
</div>
```

### 2. Tab Panel Views (Hidden State Caching)

Hide tab content panels using `.cv-hidden`. This is faster than standard `display: none` because the browser keeps the element's parsed rendering state cached for near-instant rendering when switched back:

```html
<!-- Tab Panel 1 (Active) -->
<div class="tab-panel cv-visible">
  <p>Active content details...</p>
</div>

<!-- Tab Panel 2 (Inactive/Cached) -->
<div class="tab-panel cv-hidden">
  <p>Cached inactive details...</p>
</div>
```

---

## Common Use Cases

1. **Infinite Scroll Feeds**: Optimizing social feeds, blog lists, or comments lists containing hundreds of cards by skipping rendering of off-screen feed items.
2. **Dashboard Widgets**: Lazy-rendering complex analytics graphs or tables down the page until the user scrolls them into view.
3. **Multi-Step Forms / Tabs**: Toggling screen sections using `.cv-hidden` for faster transitions than traditional show/hide mechanisms.
4. **Heavy Footer Content**: Postponing footer mapping and styling until the user is approaching the bottom of the page.

---

## Browser Support Notes

CSS `content-visibility` is supported across modern chromium browsers and is increasingly adopted in others:

- Chrome 85+
- Edge 85+
- Opera 71+
- Safari 18+
- Android Browser 85+

_For browsers that do not yet support `content-visibility`, the elements automatically fall back to standard visible rendering (`content-visibility: visible`), making it a safe, progressive-enhancement performance feature._
