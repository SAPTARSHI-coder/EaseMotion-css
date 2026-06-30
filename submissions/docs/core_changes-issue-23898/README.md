# ease-hide-scrollbar — Scrollbar Visibility & Styling Utility

## 1. What does this do?

Adds scrollbar visibility and styling utility classes. Hide scrollbars while retaining scroll functionality, use thin variants, or fully custom-styled scrollbars.

**Classes:**

- `.ease-hide-scrollbar` — Hides scrollbar, keeps scrolling
- `.ease-hide-scrollbar-x` — Hide horizontal scrollbar only
- `.ease-hide-scrollbar-y` — Hide vertical scrollbar only
- `.ease-scrollbar-auto` — Restore default browser scrollbar
- `.ease-scrollbar-none` — Disable scrolling (`overflow: hidden`)
- `.ease-scrollbar-thin` — 6px thin scrollbar with rounded thumb
- `.ease-scrollbar-custom` — Fully themed custom scrollbar via CSS custom properties
- `.ease-{sm|md|lg|xl}:hide-scrollbar` — Responsive variants
- `.ease-{sm|md|lg|xl}:scrollbar-auto` — Responsive reset
- `.ease-{sm|md|lg|xl}:scrollbar-none` — Responsive disable

## 2. How is it used?

```html
<!-- Hide scrollbar, keep scrolling -->
<div class="ease-hide-scrollbar">Scrollable content...</div>

<!-- Thin scrollbar -->
<div class="ease-scrollbar-thin">Content with thin scrollbar...</div>

<!-- Custom themed scrollbar -->
<div class="ease-scrollbar-custom">Custom styled scrollbar...</div>

<!-- Override -->
<div class="ease-hide-scrollbar ease-scrollbar-auto">
  Default scrollbar restored.
</div>
```

Custom scrollbar colors via CSS variables:

```css
--ease-scrollbar-track: #1e293b; /* track background */
--ease-scrollbar-thumb: #475569; /* thumb color */
--ease-scrollbar-thumb-hover: #64748b; /* thumb hover */
```

## 3. Why is this useful?

- **Functionality preserved** — Scrolling still works when scrollbar is hidden
- **Modern UX** — Clean interfaces without visible scrollbars
- **Custom styling** — Theme-able custom scrollbars
- **Responsive** — Breakpoint-prefixed variants
- **Accessible** — Keyboard and touch scrolling unaffected
- **Cross-browser** — Webkit, Firefox, and IE/Edge support
