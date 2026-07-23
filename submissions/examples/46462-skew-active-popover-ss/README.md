# CSS Skew-Active Popover — Creative Portfolio Layouts

A pure CSS animated popover with smooth skew interaction, designed for creative portfolio interfaces.

## What does this do?

A reusable popover component that appears with a skew + scale transition when hovering or focusing the trigger element. The trigger itself skews slightly for interactive feedback. Styled for dark creative portfolio themes.

## How is it used?

```html
<span class="sap sap--top">
  <a href="#" class="sap-action sap__trigger" aria-describedby="pop-1">Hover me</a>
  <span class="sap__popover" role="tooltip" id="pop-1">
    <p class="sap__popover-title">Title</p>
    <p class="sap__popover-body">Content here</p>
  </span>
</span>
```

Position classes: `sap--top` (default), `sap--bottom`, `sap--left`, `sap--right`.

## Why is it useful?

Creative portfolios need polished interaction patterns that feel modern and distinctive. This popover provides a unique skew animation with zero JavaScript, fully configurable via CSS custom properties.

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sap-duration` | `0.4s` | Animation duration |
| `--sap-easing` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Timing function |
| `--sap-skew-from` | `-8deg` | Starting skew angle |
| `--sap-skew-to` | `0deg` | Ending skew angle |
| `--sap-scale-from` | `0.85` | Starting scale |
| `--sap-scale-to` | `1` | Ending scale |
| `--sap-bg` | `#16161e` | Popover background |
| `--sap-accent` | `#6c63ff` | Accent color |
| `--sap-radius` | `14px` | Border radius |
| `--sap-max-width` | `300px` | Max popover width |

## Features

- **Pure CSS** — no JavaScript; hover and focus-within driven
- **Skew animation** — popover un-skews from -8deg to 0deg on reveal
- **Trigger feedback** — trigger skews -3deg + brightness boost on hover
- **4 positions** — top, bottom, left, right with directional arrows
- **Keyboard accessible** — focus-visible ring, `role="tooltip"`, `aria-describedby`
- **Responsive** — adapts to mobile viewports
- **Reduced motion** — respects `prefers-reduced-motion`
- **Uses EaseMotion CSS** — variables for fonts, z-index, and spacing

## Files

- `demo.html` — creative portfolio demo with 3 cards
- `style.css` — popover component + demo styles
- `README.md` — this file
