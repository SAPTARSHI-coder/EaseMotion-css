# Responsive Visibility / Display Utility Classes

## What does this submission do?

Adds responsive visibility utility classes for showing and hiding elements at specific breakpoints (sm &lt;640px, md 640–1024px, lg &gt;1024px). Includes 10 classes covering show-at-breakpoint, hide-at-breakpoint, from-breakpoint helpers, and always-hidden — essential for mobile-only navigation, desktop-only sidebars, and adaptive layouts.

## How was it implemented?

- **CSS** (`style.css`): Three media query breakpoints are defined:
  - `@media (max-width: 639px)` — small screens
  - `@media (min-width: 640px) and (max-width: 1024px)` — medium screens
  - `@media (min-width: 1025px)` — large screens
  - Each class uses `display: none !important` as the default (hidden state) and `display: revert !important` inside the relevant media query breakpoint.
  - `.show-sm` — default hidden, visible on ≤639px.
  - `.show-md` — default hidden, visible on 640–1024px.
  - `.show-lg` — default hidden, visible on ≥1025px.
  - `.hide-sm` — default visible, hidden on ≤639px.
  - `.hide-md` — default visible, hidden on 640–1024px.
  - `.hide-lg` — default visible, hidden on ≥1025px.
  - `.show-from-md` — hidden at ≤639px, visible at ≥640px.
  - `.hide-from-md` — visible at ≤639px, hidden at ≥640px.
  - `.show-only-sm` — visible only at ≤639px, hidden at ≥640px.
  - `.hidden` — `display: none !important` at all sizes.
- **HTML/JS** (`demo.html`): The demo includes:
  - A live viewport indicator bar that highlights the active breakpoint tag (SM/MD/LG) and displays the current viewport width in pixels as the user resizes.
  - A responsive dashboard layout with three panels: left sidebar (`.show-from-md`), main content (always visible with `.show-only-sm` and `.hide-sm` conditional text), and right panel (`.show-lg`). Plus a header bar (`.hide-sm`).
  - A live class test grid showing 6 boxes each demonstrating a different class — each labeled with the class name, and resizing the browser shows which boxes appear/disappear.
  - A class reference table documenting all 10 classes.

## Why these choices?

- **3 breakpoints** (sm/md/lg) match the most common responsive design patterns and keep the API small and memorable.
- **`!important` on display** ensures these utility classes always win regardless of specificity order, which is the expected behavior for visibility toggles.
- **`revert` instead of `block`/`inline`** preserves the element's natural display value (so a `<span>` doesn't become `block`).
- **Live viewport tracker** helps users understand which breakpoint is active without needing dev tools.
- **Dashboard layout demo** shows a realistic use case: sidebar hidden on mobile, right panel only on desktop, announcement bar hidden on mobile.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Live responsive demo with viewport tracker, dashboard layout, class test grid, and reference table |
| `style.css` | 10 utility classes across 3 media query breakpoints + demo styles |
| `README.md` | This documentation |
