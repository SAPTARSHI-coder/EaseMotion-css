# CSS Scrollbar Color Theme Utilities

Relates to feature request **#41291**.

## 1. What does this do?

Creates a set of utilities for styling native browser scrollbars using standardized CSS properties (`scrollbar-color`, `scrollbar-width`) with consistent `::webkit-scrollbar` fallbacks for browsers that require vendor-prefixed implementations.

## 2. Why is this useful for EaseMotion CSS?

Scrollbar customization is often overlooked despite being an important part of application polish. Providing cross-browser utility classes helps developers create visually consistent interfaces while remaining lightweight and CSS-only.

## 3. Utilities Provided

| Class | Thumb | Track | Width | Use Case |
|---|---|---|---|---|
| `.ease-scroll-theme` | `#6c63ff` (purple) | `#ececec` (light) | `thin` | Default light UI |
| `.ease-scroll-dark` | `#64748b` (grey) | `#1e293b` (dark) | `thin` | Dark mode panels |
| `.ease-scroll-hidden` | Hidden | Hidden | `none` | Carousels, sliders |

## 4. How is it used?

**HTML** (matching the issue's snippet exactly)
```html
<div class="ease-scroll-theme">
  Long scrollable content...
</div>
```

**CSS** (matching the issue's snippet exactly)
```css
.ease-scroll-theme {
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: #6c63ff #ececec;
}

.ease-scroll-theme::-webkit-scrollbar {
  width: 8px;
}

.ease-scroll-theme::-webkit-scrollbar-thumb {
  background: #6c63ff;
  border-radius: 999px;
}
```

## 5. Browser Support

| Property | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| `scrollbar-color` | 121+ | 64+ | 17.4+ | 121+ |
| `scrollbar-width` | 121+ | 64+ | 17.4+ | 121+ |
| `::-webkit-scrollbar` | ✅ All | ❌ | ✅ All | ✅ All |

> **Tip**: Always include both `scrollbar-color` (standard) and `::-webkit-scrollbar` (vendor prefix) to cover all major browsers.
