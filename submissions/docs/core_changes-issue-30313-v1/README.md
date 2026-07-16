# Responsive Breakpoint Utilities — EaseMotion CSS

**Issue:** [#30313 — Add responsive breakpoint utility classes (ease-sm:, ease-md:, ease-lg:)](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/30313)

Mobile-first responsive utility classes with `ease-sm:`, `ease-md:`, `ease-lg:`, `ease-xl:` prefixes for display, flex, grid, gap, padding, width, text alignment, font size, and visibility.

## Breakpoints

| Prefix | Min-width | Media Query |
|--------|-----------|-------------|
| `ease-sm:` | 640px | `@media (min-width: 640px)` |
| `ease-md:` | 768px | `@media (min-width: 768px)` |
| `ease-lg:` | 1024px | `@media (min-width: 1024px)` |
| `ease-xl:` | 1280px | `@media (min-width: 1280px)` |

Overridable via `--ease-bp-sm`, `--ease-bp-md`, `--ease-bp-lg`, `--ease-bp-xl` CSS variables.

## Available Classes

- **Display:** `ease-hide`, `ease-show`, `ease-flex`, `ease-grid`, `ease-inline`, `ease-inline-block`, `ease-block`
- **Flex:** `ease-flex-row`, `ease-flex-col`, `ease-flex-wrap`, `ease-items-start/center/end`, `ease-justify-start/center/end/between`
- **Grid:** `ease-grid-cols-2/3/4/6`
- **Gap:** `ease-gap-0/1/2/4/6/8`
- **Padding:** `ease-p-0/1/2/4/6/8/12`
- **Width:** `ease-w-full/auto/1-2/1-3/2-3/1-4`
- **Text:** `ease-text-xs/sm/base/lg/xl/2xl/3xl/4xl/5xl`, `ease-text-left/center/right`
- **Order:** `ease-order-first/last/none`
