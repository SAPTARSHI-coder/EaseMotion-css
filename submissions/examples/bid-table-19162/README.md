# Procurement Bid Table

A dark-themed, hand-crafted evaluation table for comparing vendor bids in procurement workflows.

## Features

- Staggered row reveal using `clip-path` keyframe animation
- Star-based rating display (★/☆) instead of bar/progress fills
- Status tags with transparent background + colored border (no filled pills)
- Squared vendor icon avatars with gradient backgrounds
- Responsive card layout at 768px
- Reduced-motion support via `prefers-reduced-motion`

## Bid States

| State       | Tag Color | Border    | Description               |
|-------------|-----------|-----------|---------------------------|
| Best Value  | Green     | `#059669` | Meets all criteria, best  |
| Review      | Yellow    | `#d97706` | Conditional / needs check |
| Disqualified| Red       | `#dc2626` | Fails mandatory criteria  |

## Criteria

- Price competitiveness (₹ quoted)
- Delivery timeline (weeks)
- Warranty coverage (years)
- Regulatory compliance (✓ / ⚠ / ✗)
- Overall rating (★☆☆☆☆ – ★★★★★)

## Example Usage

Drop `style.css` and `demo.html` into any project. The table expects a `.bid-wrap` container and the `.bid-table` class on `<table>`. Vendor icons use modifier classes `vendor-icon--tn`, `vendor-icon--gs`, `vendor-icon--qb`, `vendor-icon--ni` for distinct gradient colors.

## Accessibility

- Responsive layout uses `data-label` attributes on `<td>` for card-mode column headers
- Semantic `<table>` structure with `<thead>` and `<tbody>`
- Motion preference respected via `prefers-reduced-motion` media query
- Sufficient color contrast on dark background

## Browser Compatibility

- Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- `clip-path` animation supported in all modern browsers
- `prefers-reduced-motion` media query (CSS3)

## Acceptance Criteria

- [x] Staggered `revealRow` animation on table rows
- [x] Star characters (★/☆) used for ratings
- [x] Status tags use transparent background + `border: 1px solid`
- [x] Vendor icons are 28×28px with 6px border-radius (squared)
- [x] Table uses `border-collapse: separate` with `border-spacing: 0`
- [x] Responsive breakpoint at 768px switches to card layout
- [x] Reduced-motion disables animations
- [x] Colors: green `#059669`, yellow `#d97706`, red `#dc2626`

Fixes #19162
