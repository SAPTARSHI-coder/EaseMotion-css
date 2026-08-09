# Sticky Header Data Table

### What does this do?

It shows a scrollable data table whose header row stays pinned while the body scrolls. Rows use zebra striping and a hover highlight, and the last column shows a colored status pill.

### How is it used?

```html
<div class="table-wrap" tabindex="0">
  <table class="data-table">
    <thead><tr><th>Name</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Ada</td><td><span class="pill is-active">Active</span></td></tr>
    </tbody>
  </table>
</div>
```

The scroll box has a fixed height, and `position: sticky` on the header cells keeps them in view. Pill tones are `is-active`, `is-pending`, and `is-off`.

### Why is it useful?

Data tables appear in dashboards and admin panels, and a pinned header keeps columns readable while scrolling. This styles a table with a sticky head, zebra rows, hover highlight, and status pills using only CSS. The scroll box is focusable so it can be scrolled with the keyboard.
