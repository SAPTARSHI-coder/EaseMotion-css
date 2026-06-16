# Animated Pagination Component

## What does it do?
A polished pagination navigation component for navigating large datasets across multiple pages. Features animated page link hover effects, a sliding active-page indicator, and smooth prev/next arrow animations.

## How is it used?
Wrap page items in the pagination container:

    <nav class="ease-pagination" aria-label="Pagination">
      <a href="#" class="ease-page-item ease-page-prev">
        <span class="ease-page-arrow">&lsaquo;</span>
      </a>
      <a href="#" class="ease-page-item ease-page-link">1</a>
      <a href="#" class="ease-page-item ease-page-link ease-page-active">2</a>
      <a href="#" class="ease-page-item ease-page-link">3</a>
      <span class="ease-page-ellipsis">&hellip;</span>
      <a href="#" class="ease-page-item ease-page-link">10</a>
      <a href="#" class="ease-page-item ease-page-next">
        <span class="ease-page-arrow">&rsaquo;</span>
      </a>
    </nav>

Use `.ease-pagination-sm` or `.ease-pagination-lg` for size variants.

## Why is it useful?
Pagination is a fundamental navigation pattern for any list, table, or search results interface. The animated hover states and active-page indicator make page switching feel responsive and polished, reducing friction for users browsing through content-heavy pages.

## Tech Stack
- HTML
- CSS (no frameworks, no JavaScript)

## Preview
Open demo.html directly in your browser to interact with the pagination component.

## Contribution Notes
- Active page uses a sliding underline animation via `transform: scaleX()`
- Hover effects include scale, shadow lift, and color shift
- Prev/next arrows animate on hover using `transform: translateX()`
- Disabled state on prev/next at boundaries
- Reduced-motion safe: all animations disabled when `prefers-reduced-motion: reduce`
