# Justify Content Visualizer — EaseMotion CSS Component

**Issue:** [#36766](https://github.com/anomalyco/EaseMotion-css/issues/36766)

A dark-themed interactive flexbox visualizer. Select a `justify-content` value from the dropdown and watch the items smoothly rearrange. Adjust the item count (2–8) to see how different quantities behave.

## CSS Custom Properties

| Variable            | Default   | Description                         |
|---------------------|-----------|-------------------------------------|
| `--item-color`      | `#7c5cfc` | Primary item colour (item 1)        |
| `--item-size`       | `56px`    | Width and height of each flex item  |
| `--bg-color`        | `#1e1e2e` | Card background colour              |
| `--transition-speed` | `0.35s`  | Duration of layout transitions      |

## Usage

```html
<div class="vis-card">
  <div class="vis-demo" id="visDemo">
    <div class="vis-item">1</div>
    <div class="vis-item">2</div>
    <!-- ... -->
  </div>
</div>
```

Include `style.css` and the lightweight JavaScript from `demo.html` to power the dropdown, item count, and badge. Each item automatically receives a distinct colour when more than one child is present.
