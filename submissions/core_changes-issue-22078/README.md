# Accordion Component — Collapsible Content Sections

1. **What does this do?**  
   Adds a lightweight, CSS-only accordion component to EaseMotion CSS using native `<details>` / `<summary>` elements. No JavaScript required for basic toggling. Includes four variants: default, bordered, icons, and nested.

2. **How is it used?**  
   ```html
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/easemotion-css@latest/easemotion.min.css" />
   <link rel="stylesheet" href="path/to/accordion.css" />
   
   <div class="ease-accordion">
     <details open>
       <summary>Question?</summary>
       <div class="ease-accordion-content">Answer text here.</div>
     </details>
   </div>
   ```

3. **Why is it useful?**  
   Accordions are widely used in FAQs, documentation navigation, settings panels, and feature lists. This CSS-only approach works without JavaScript, respects `prefers-reduced-motion`, and follows the same patterns as existing EaseMotion components (chip.css, tabs.css, etc.).

## Variants

| Variant | Class | Description |
|---------|-------|-------------|
| Default | `ease-accordion` | Simple stacked accordion with plus/minus toggle |
| Bordered | `ease-accordion ease-accordion-bordered` | Outer border container with rounded corners |
| Icons | `ease-accordion ease-accordion-icons` | Leading icon via `data-icon` attribute on `<summary>` |
| Nested | `ease-accordion ease-accordion-nested` | Indented sub-accordions for multi-level hierarchies |

## File Placement

For integration into the EaseMotion CSS framework, the following changes are required:

| File | Action |
|------|--------|
| `components/accordion.css` | **Create** — the accordion component styles (included in this submission) |
| `easemotion.css` | **Edit** — add `@import "./components/accordion.css";` in the components section (alphabetical order, between `./components/announce-bar.css` and `./components/avatar.css`) |
| `components/accordion-demo.html` | **Create** — demo page showing all variants (included in this submission) |

## EaseMotion Classes & Variables Used

### CSS Variables
`--ease-color-neutral-200`, `--ease-color-neutral-700`, `--ease-color-neutral-800`, `--ease-color-neutral-100`, `--ease-color-text`, `--ease-color-muted`, `--ease-color-primary`, `--ease-color-bg`, `--ease-speed-fast`, `--ease-speed-medium`, `--ease-ease`

### EaseMotion Utility Classes (used in demo)
`ease-container`, `ease-mx-auto`, `ease-py-8`, `ease-px-4`, `ease-mb-3`, `ease-mb-4`, `ease-text-sm`, `ease-text-muted`, `ease-badge`, `ease-badge-sm`

### Custom Classes (in accordion.css)
`ease-accordion`, `ease-accordion-bordered`, `ease-accordion-icons`, `ease-accordion-nested`, `ease-accordion-open`, `ease-accordion-close`, `ease-accordion-content`

## Browser Support
- Chrome / Edge 12+
- Firefox 49+
- Safari 6+
- All modern browsers

Fixes #22078
