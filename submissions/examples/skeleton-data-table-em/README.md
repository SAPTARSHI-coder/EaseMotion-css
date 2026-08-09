# CSS Skeleton Data Table Loading Shimmer

> A pure CSS structural placeholder for data tables featuring continuous sweeping background-position wave shimmers to indicate loading states.

## Features

- **Pure CSS Shimmer Wave** — Utilizes a `linear-gradient` background scaled to 200% width and sweeping via an infinite `@keyframes` animation to simulate network loading.
- **Semantic Table Layout** — Uses actual `<table>`, `<thead>`, `<tbody>`, and `<tfoot>` elements so the skeleton matches the exact DOM flow of the incoming real data.
- **Modular Bone Classes** — Includes reusable utility placeholder blocks (`.sk-text`, `.sk-avatar`, `.sk-pill`, `.sk-box`) that can be used outside of just tables.
- **Horizontal Scrolling Support** — The table wrapper (`.table-container`) gracefully handles overflow on mobile screens without breaking the table layout.
- **Motion Safe** — Honors the OS-level `prefers-reduced-motion` setting by fully disabling the sweeping animation and falling back to a static flat placeholder color.

## Files

```
submissions/examples/skeleton-data-table-em/
├── demo.html    — The HTML layout demonstrating 5 skeleton rows alongside a header and pagination footer
├── style.css    — Defines the `@keyframes shimmer-wave`, shape utilities, and responsive container bounds
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--sk-base` | `#e2e8f0` | Base color for the bone shapes |
| `--sk-highlight` | `#f1f5f9` | The bright sweeping wave color inside the linear gradient |
| `--border-color` | `#e2e8f0` | Structural table borders |

## Usage

Simply build your skeleton using the utility classes:

```html
<!-- Example of a single skeleton row -->
<tr>
  <td><div class="sk-avatar"></div></td>
  <td>
    <div class="sk-text w-60"></div>
    <div class="sk-text sk-text--sm w-40"></div>
  </td>
  <td><div class="sk-pill"></div></td>
</tr>
```

Available width utilities: `.w-20`, `.w-30`, `.w-40`, `.w-50`, `.w-60`, `.w-70`, `.w-80`.

## Acceptance Criteria ✅

- [x] Pure CSS implementation with zero JavaScript.
- [x] Shimmer gradient wave sweeps continuously from left to right across all skeleton rows (`background-position: 200% 0`).
- [x] Layout perfectly mirrors a real data table structure with headers, checkboxes, avatar cells, text lines, and action buttons.
- [x] Respects `prefers-reduced-motion` media query by turning off moving gradients dynamically.
- [x] Conforms to the repository submission standards (`demo.html`, `style.css`).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
