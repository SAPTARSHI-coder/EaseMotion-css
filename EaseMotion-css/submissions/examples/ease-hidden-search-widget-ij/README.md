# Hidden Search Widget — #36727

A search input that stays collapsed as an icon and slides open on click.

## CSS Custom Properties

| Property         | Default    | Description                     |
|------------------|------------|---------------------------------|
| `--widget-bg`    | `#2a2a3d`  | Background of the search widget |
| `--icon-color`   | `#e0e0e0`  | Color of the search icon        |
| `--input-color`  | `#ffffff`  | Text color of the search input  |
| `--slide-duration` | `0.35s` | Duration of the slide animation |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="card">
  <div class="search-widget">
    <input type="text" class="search-input" placeholder="Search…">
    <button class="search-btn" aria-label="Toggle search">🔍</button>
  </div>
</div>

<script>
  document.querySelector('.search-btn')
    .addEventListener('click', () =>
      document.querySelector('.search-widget').classList.toggle('active'));
</script>
```

The `.active` class toggles the expanded state.
