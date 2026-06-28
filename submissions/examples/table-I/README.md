 
# Table Component

Styled data table component with striped rows, hover effects, and responsive wrapper.

## Files

- demo.html - Interactive demo
- style.css - Table styles
- README.md - Documentation

## Classes

| Class | Description |
|-------|-------------|
| `ease-table` | Base table styling |
| `ease-table-striped` | Alternating row colors |
| `ease-table-hover` | Row hover effect |
| `ease-table-compact` | Denser padding |
| `ease-table-bordered` | Full borders |
| `ease-table-responsive` | Horizontal scroll on mobile |

## Usage

```html
<div class="ease-table-responsive">
    <table class="ease-table ease-table-striped ease-table-hover">
        <thead>
            <tr><th>Name</th><th>Email</th></tr>
        </thead>
        <tbody>
            <tr><td>John</td><td>john@example.com</td></tr>
        </tbody>
    </table>
</div>