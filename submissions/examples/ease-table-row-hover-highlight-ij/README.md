# Table Row Hover Highlight

## What does this do?

It adds a subtle highlight effect to table rows on hover, combining a background-color transition with a left-border indicator that scales in vertically. Each row also shifts slightly to the right for added depth.

## How is it used?

Apply the `table-row-hover-highlight-ij` class to a `<table>` element:

```html
<table class="table-row-hover-highlight-ij">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aiko Tanaka</td>
      <td>Lead Designer</td>
    </tr>
  </tbody>
</table>
```

You can customize the appearance by overriding these CSS custom properties on the table:
- `--highlight-color`: Color of the left indicator border (defaults to `--ease-color-primary`).
- `--highlight-bg`: Background color on hover (defaults to a translucent primary).
- `--indicator-width`: Width of the left border indicator (defaults to `4px`).

## Why is this useful?

Data tables benefit from clear visual feedback during row selection. This micro-interaction uses CSS transitions on `background-color` and `transform` for a lightweight, performant hover state without any JavaScript. It degrades gracefully under `prefers-reduced-motion` and works across modern browsers.
