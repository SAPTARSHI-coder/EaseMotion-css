# Print Stylesheet Module (@media print)

## What does this submission do?

Adds a dedicated **print stylesheet module** that ensures pages using EaseMotion render properly when printed. Hides UI chrome (navbars, sidebars, footers, toasts, FABs, modals, ads, videos), ensures black-on-white readability, reveals link URLs, prevents page breaks inside cards/tables/images, controls orphans/widows, and provides 5 print utility classes.

## How was it implemented?

- **CSS** (`style.css`): All print rules are wrapped in `@media print`. Key rules:
  - **Hide non-essential**: `.navbar`, `.sidebar`, `.footer`, `.toast`, `.fab`, `.modal`, `.banner`, `.ad`, `.no-print`, `iframe`, `video`, `nav`, `aside` — all `display: none !important`.
  - **Readability**: `body { color: #000; background: #fff; font-size: 12pt }`, `* { box-shadow: none; text-shadow: none; background: transparent }`.
  - **Link URLs**: `a[href]::after { content: " (" attr(href) ")"; font-size: 0.8em }` — skips anchor links (`href="#"`) and javascript links.
  - **Page breaks**: `.card`, `table`, `tr`, `td`, `th`, `img`, `pre`, `blockquote`, `.print-break-inside` get `page-break-inside: avoid`.
  - **Orphans/widows**: `p, li { orphans: 3; widows: 3 }`.
  - **Page margins**: `@page { margin: 2cm }`.
  - **Print utility classes**: `.no-print` (hide on print), `.print-only` (show only on print), `.print-break-before`, `.print-break-after`, `.print-break-inside`.
  - **Table improvements**: collapse borders, 1px solid black borders, padding.
  - **Code wrapping**: `pre, code { white-space: pre-wrap; word-wrap: break-word }`.
  - **Headings**: `h1-h4 { page-break-after: avoid }`.
- **HTML/JS** (`demo.html`): A full page layout demonstrating screen vs print behavior: navbar, banner, sidebar, footer, FAB, and toast are marked `.no-print` (hidden when printed). Main content has cards, a table, and links — the table shows screen vs print feature comparison. A `.print-only` box (invisible on screen, blue-bordered on print) shows a timestamp. A "Print this page" button triggers `window.print()`. A utility class reference table documents all 5 classes.

## Why these choices?

- **`@media print`** is the standard CSS approach — no JS required, works with browser's native print dialog.
- **Hiding all UI chrome** by default ensures developers don't need to manually mark every element — just add `.no-print` to anything that should stay hidden.
- **Link URL disclosure** (`::after`) helps readers see where links go on a printed page where they can't click.
- **Page break avoidance** on cards and tables prevents awkward splits that waste paper and reduce readability.
- **Print utility classes** give developers fine-grained control (force breaks, show print-only content, protect specific elements).
- **12pt font size** is the standard print size for comfortable reading.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Full page layout demonstrating print vs screen: navbar, sidebar, cards, table, print-only content, FAB, toast |
| `style.css` | Complete @media print stylesheet + 5 utility classes + demo styles |
| `README.md` | This documentation |
