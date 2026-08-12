# Data Table Row Focus

## What does this do?

Data Table Row Focus is a self-contained HTML and CSS table pattern with animated row entry, visible keyboard focus states, status chips, score meters, and compact row actions.

## How is it used?

Create a `table-card` wrapper with a regular HTML table, then add row modifier classes such as `row-high`, `row-medium`, `row-good`, or `row-new` to control row accent color and score meter styling.

```html
<tr class="row-high" tabindex="0">
  <td>
    <strong>Northstar Labs</strong>
    <span>Enterprise renewal</span>
  </td>
  <td><span class="status-chip">At risk</span></td>
  <td>
    <div class="score-meter" aria-hidden="true">
      <span></span>
    </div>
  </td>
</tr>
```

Available row classes:

- `row-high`
- `row-medium`
- `row-good`
- `row-new`

## Why is it useful?

It fits EaseMotion's philosophy by using motion to improve scanning in dense interfaces: rows enter in sequence, score meters fill to communicate health, and hover plus focus states make the active row obvious. The demo is standalone and works by opening `demo.html` directly in a browser.
