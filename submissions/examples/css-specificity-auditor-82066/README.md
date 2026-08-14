# CSS Specificity Auditor

A responsive CSS-only dashboard for visualizing CSS selector specificity and identifying selectors that may contribute to stylesheet complexity and specificity bloat.

## Features

- Selector count overview
- Low, medium, and high specificity distribution
- Specificity budget indicator
- Selector audit examples
- Safe, watch, and high-risk status indicators
- Responsive layout
- Lightweight CSS
- Reduced-motion support
- No JavaScript or external dependencies

## Example Audit

| Selector | Specificity | Status |
|---|---|---|
| `.card .title` | 0-2-0 | Safe |
| `.nav .item.active` | 0-3-0 | Safe |
| `.page .content .card .title` | 0-4-0 | Watch |
| `#dashboard .panel .card .title` | 1-3-0 | High |

## Specificity Budget

The example recommends keeping class-based selector depth around:

```text
3 levels or fewer