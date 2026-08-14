# CSS Grid Level 2 Subgrid Layout Architecture Guide (GSSoC 2026)

## 1. What does this do?
The **CSS Grid Level 2 Subgrid Layout Architecture Guide** provides technical documentation and an interactive benchmark visualizer explaining `grid-template-rows: subgrid`. It demonstrates how nested child cards inherit parent row track definitions to maintain horizontal alignment across headers, variable body copy, and action footers.

## 2. How is it used?
Link the stylesheet in your HTML header:
```html
<link rel="stylesheet" href="style.css">
```
Set `grid-template-rows: auto 1fr auto` on parent grid containers and apply `grid-template-rows: subgrid` with `grid-row: span 3` on child card items:
```css
.subgrid-parent {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
.subgrid-card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}
```

## 3. Why is it useful?
- **Presents Perfect Alignment**: Solves uneven card footer gaps caused by dynamic text content lengths.
- **Zero JavaScript Calculation**: Replaces complex JS height-matching scripts with native browser grid track inheritance.
- **Modern Standards Compliance**: Demonstrates modern CSS Grid Level 2 specification best practices for scalable design systems.
