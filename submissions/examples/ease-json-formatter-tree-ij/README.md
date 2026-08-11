# JSON Formatter Tree — EaseMotion CSS Component

**Issue:** [#36765](https://github.com/anomalyco/EaseMotion-css/issues/36765)

A dark-themed interactive JSON tree viewer with expandable/collapsible nodes. Click the ▾/▸ toggle on any object or array to show or hide its children. Includes "Expand All" and "Collapse All" controls.

## CSS Custom Properties

| Variable           | Default   | Description                      |
|--------------------|-----------|----------------------------------|
| `--tree-bg`        | `#1e1e2e` | Tree container background        |
| `--key-color`      | `#7dd3fc` | Colour of JSON keys              |
| `--value-color`    | `#a5d6a7` | Colour of JSON values (default)  |
| `--expand-duration` | `0.3s`   | Duration of expand/collapse      |

## Usage

```html
<div class="tree-card">
  <div class="json-tree" id="jsonTree"></div>
</div>
```

Include `style.css` and the JavaScript from `demo.html` which renders a sample JSON object. Pass any JSON object to the internal `render()` function.
