# ease-table-pr

Styled data table with hover rows, zebra striping, sort indicators, and user cells.

## Features

- Clean bordered table with rounded wrapper
- Hover highlight on rows
- Optional zebra striping
- Sort indicators in header (asc/desc)
- User cell with avatar and email
- Status badge with dot indicator
- Compact variant for dense data
- Responsive horizontal scroll
- Footer row for pagination info

## Files

- `style.css` — the table styles
- `demo.html` — working demo with default and striped tables
- `README.md` — usage documentation

## Usage

```html
&lt;div class="table-pr-wrapper"&gt;
  &lt;table class="table-pr"&gt;
    &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Role&lt;/th&gt;
      &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
      &lt;tr&gt;
        &lt;td&gt;John Doe&lt;/td&gt;
        &lt;td&gt;Admin&lt;/td&gt;
      &lt;/tr&gt;
    &lt;/tbody&gt;
  &lt;/table&gt;
&lt;/div&gt;