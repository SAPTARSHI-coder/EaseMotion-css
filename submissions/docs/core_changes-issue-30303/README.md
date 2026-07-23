# Timeline Component — Issue #30303

A CSS-only vertical timeline component with multiple display variants. Pure CSS — no JavaScript required.

## Variants

| Class | Description |
|-------|-------------|
| `.ease-timeline` | Base vertical timeline with dot markers |
| `.ease-timeline-cards` | Content appears in card containers with hover shadow |
| `.ease-timeline-icons` | SVG icon dots instead of plain circles |
| `.ease-timeline-compact` | Reduced spacing and font sizes |
| `.ease-timeline-alternating` | Left/right alternating layout (desktop 768px+) |

## CSS Variables

- `--ease-timeline-line-color`, `--ease-timeline-line-width`
- `--ease-timeline-dot-size`, `--ease-timeline-dot-color`, `--ease-timeline-dot-active-color`
- `--ease-timeline-spacing`, `--ease-timeline-content-spacing`

## Accessibility

- Uses `<ul>` with semantic `<li>` items
- Respects `prefers-reduced-motion`
- Active state via `.is-active` class
