# Subscription Seat Table

A dark-themed, hand-crafted CSS table for displaying team-level seat utilization across a subscription plan. No JavaScript required.

## Features

- **Semantic HTML** — uses `<table>`, `<thead>`, `<tbody>`, `<tfoot>` with proper scope and structure
- **Custom reset** — targeted `table`/`th`/`td` reset instead of universal `*`
- **Chip row** — summary pills using `display: inline-flex` with 100px border-radius
- **Inline-grid meter** — utilization bars built with `display: inline-grid` and `grid-template-columns` (not flexbox)
- **Squared status tags** — `border-radius: 6px` for a distinctive look vs rounded chips
- **Sequential row animation** — `fadeSlideIn` keyframe with staggered delays, respects `prefers-reduced-motion`
- **Responsive** — horizontal scroll at 720px breakpoint via `overflow-x: auto`
- **Accent palette** — emerald (`#10b981`), sky (`#0ea5e9`), amber (`#d97706`), rose (`#f43f5e`)

## Seat States

| State       | Description                                          |
|-------------|------------------------------------------------------|
| Assigned    | Seat is allocated to an active team member           |
| Available   | Seat is purchased but not yet assigned               |
| Pending     | Seat is awaiting confirmation or invitation          |
| Over-limit  | Usage exceeds the total allocated seats for a team   |

## Example Usage

```html
<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Team</th>
        <th>Total Seats</th>
        <th>Used</th>
        <th>Utilization</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><!-- team info --></td>
        <td>25</td>
        <td>20</td>
        <td>
          <div class="utilization">
            <div class="meter" style="--fill-fr: 20fr;">
              <span class="fill"></span>
              <span class="track"></span>
            </div>
            <div class="frac"><span class="stat">20/25</span></div>
          </div>
        </td>
        <td><span class="status-tag assigned">Assigned</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

## Accessibility

- Status tags use color-plus-text (not color alone) to convey state
- Animation is disabled automatically for users who prefer reduced motion
- Table structure uses semantic elements for screen reader navigation

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Acceptance Criteria

- [x] Semantic table with thead, tbody, tfoot
- [x] 5 team rows with correct utilization data
- [x] Summary chips row reflecting aggregate numbers
- [x] Horizontal scroll at 720px breakpoint
- [x] Sequential row animation respecting reduced-motion
- [x] Inline-grid meter bars (no flexbox)
- [x] Squared status tags vs pill chips for visual contrast
- [x] Zero JavaScript

Fixes #19154
