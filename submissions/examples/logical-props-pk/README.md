# EaseMotion — Logical Properties for RTL Support

Replace physical directional properties with logical equivalents for automatic RTL/LTR adaptation.

## The Problem

Physical properties like `left`, `right`, `margin-left`, `border-right` are direction-specific. In RTL languages (Arabic, Hebrew, Urdu), `left` should become `right`, but the browser doesn't auto-flip physical properties.

## The Solution

Logical properties like `inset-inline-start`, `margin-inline-end`, `border-inline-start` automatically adapt to the writing direction (`dir="ltr"` or `dir="rtl"`).

## Demo

Toggles `dir="rtl"` on the page to show how physical properties break and logical properties adapt.

- **Physical sidebar**: `float: left`, `border-right` — stays on left even in RTL
- **Logical sidebar**: `float: inline-start`, `border-inline-end` — flips to right in RTL

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side physical vs logical with RTL toggle |
| `style.css` | Both component variants, mapping table, code samples |

## Physical → Logical Mapping

| Physical | Logical |
|----------|---------|
| `left` | `inset-inline-start` |
| `right` | `inset-inline-end` |
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `padding-left` | `padding-inline-start` |
| `padding-right` | `padding-inline-end` |
| `border-left` | `border-inline-start` |
| `border-right` | `border-inline-end` |
| `text-align: left` | `text-align: start` |
| `float: left` | `float: inline-start` |

## Affected Components

| Component | Physical Properties | Convert To |
|-----------|-------------------|------------|
| Sidebar | `left`, `right`, `transform: translateX` | `inset-inline-start/end`, `translate()` |
| Navbar | `margin-right: auto` (brand push) | `margin-inline-end: auto` |
| Tooltip | `left: 100%`, `margin-left` | `inset-inline-start: 100%`, `margin-inline-start` |
| Modal | `left: 50%`, `transform: translateX(-50%)` | `inset-inline-start: 50%`, `translate(-50%, 0)` |
| Toast | `right: 20px` | `inset-inline-end: 20px` |
| Breadcrumb | `margin: 0 4px` | `margin-inline: 4px` |
| Pagination | `margin-left` | `margin-inline-start` |
| Tabs | `border-bottom`, `margin-right` | `border-block-end`, `margin-inline-end` |
