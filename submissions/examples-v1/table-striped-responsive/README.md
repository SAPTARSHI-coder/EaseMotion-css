# table-striped-responsive

Responsive data table with `:nth-child` zebra striping, row hover highlight, sortable header indicators, and a mobile card layout.

## How It Works

Desktop renders as a standard `<table>` with alternating row colors (`:nth-child(even)`) and hover tint. Sortable headers show arrow indicators via `::after`. Below a breakpoint, table cells collapse into a card layout using `display: grid` on `<tr>` elements, with each cell labelled by its `data-label` attribute.

## Usage

Open `demo.html` and resize the browser to see the mobile layout. Resize columns, hover rows, and note the visual sort arrows. `prefers-reduced-motion` disables the hover lift transition.
