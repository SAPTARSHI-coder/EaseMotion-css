# Markdown Table Styles Fix (Base Styles)

This submission provides base styling for standard HTML tables (`<table>`, `<th>`, `<td>`).

## Description

When markdown parsers compile markdown tables, they generate raw `<table>` elements without specific classes. Because `core/base.css` resets basic styling but does not supply base styles for tables, markdown tables visually render as plain, unformatted text without padding or borders.

This proposal introduces base table styles that can be integrated into `core/base.css` to fix the display of raw markdown tables across documentation pages.

## Features

- Standard `border-collapse: collapse;`
- Full-width table layout
- Bottom borders for rows and headers using `--ease-color-neutral-200`
- Padding using EaseMotion CSS spacing variables (`--ease-space-3` and `--ease-space-4`)
