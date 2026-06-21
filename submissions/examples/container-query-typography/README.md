# Container Query Typography

Demonstrates responsive typography using CSS `@container` queries versus traditional `@media` queries. Cards adjust font-size, line-height, and padding based on their container's inline size.

## How it works

- Each `.cq-card` has `container-type: inline-size` to establish a containment context.
- Three `@container (min-width: ...)` breakpoints at 380px, 520px, and 700px adjust custom properties (`--cq-font-size`, `--cq-line-height`, `--cq-padding`, `--cq-title-size`).
- The `.cq-card--wide` variant spans two grid columns, triggering larger container query breakpoints independently of its neighbors.
- The comparison section uses identical cards but with `@media` queries — all cards respond uniformly to viewport width.
- Resize the browser to observe the difference: CQ cards scale individually; MQ cards scale as a group.

## Key features

- Cards use `container-type: inline-size` for container query context.
- Three container query breakpoints for fine-grained typography control.
- Side-by-side comparison with traditional media query approach.
- `cq-card--wide` spans two columns to demonstrate independent container sizing.
- Dark theme with `#0a0f1e` background, `#e2e8f0` text.
- `prefers-reduced-motion` disables hover transitions.
