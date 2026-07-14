# Compact List View

**Issue:** #36565

Compact list view with collapse/expand using native `<details>` elements and animated transitions.

## CSS Custom Properties

| Variable            | Default    | Description                        |
|---------------------|------------|------------------------------------|
| `--list-item-bg`    | `#1e1e2e`  | Background for individual items    |
| `--expand-duration` | `0.25s`    | Duration of collapse/expand anim   |
| `--item-hover`      | `#313244`  | Hover background for items/headers |
| `--compact-spacing` | `4px`      | Spacing between list elements      |

## Usage

Use nested `<details class="list-group">` / `<summary>` elements. Each list item is a `.list-item` div within `.list-group-body`.
