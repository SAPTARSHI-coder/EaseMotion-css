# Link Card Preview (#36776)

A link that reveals a card-style preview popup on hover with a scale animation.

## CSS Custom Properties

| Property          | Default   | Description              |
|-------------------|-----------|--------------------------|
| `--card-bg`       | `#1e1e1e` | Popup background         |
| `--card-border`   | `#3a3a3a` | Popup border color       |
| `--popup-scale`   | `1.05`    | Target scale on hover    |
| `--hover-duration`| `0.3s`    | Animation duration       |

## Usage

```html
<div class="ease-link-card-preview">
  <a href="..." class="preview-link">Link text</a>
  <div class="preview-popup">
    <strong>Title</strong>
    <span>Description</span>
  </div>
</div>
```

Place the popup after the link inside the wrapper. Hover the link to reveal.
