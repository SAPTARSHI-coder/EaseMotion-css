# table-layout-fixed

## Overview

Compares `table-layout: fixed` versus `table-layout: auto` for HTML tables. Demonstrates how `fixed` distributes column widths evenly regardless of content, while `auto` lets content determine column sizes. Includes a custom-width fixed layout using `<colgroup>` and an overflow-handling example with `word-break`.

## Usage

Open `demo.html` in any browser. Four tables compare auto vs fixed layout, custom column proportions, and overflow behavior. Hover over rows to see the highlight effect. The fixed-width columns remain consistent while auto columns shift based on cell text length.

## Features

- Side-by-side comparison of fixed vs auto table layout
- Custom column width allocation via `<colgroup>` with percentage widths
- Overflow handling with `word-break` for long identifiers
- Hover highlight on table rows
- Responsive with horizontal scroll wrapper on small screens
- `prefers-reduced-motion` support
- Dark theme throughout
