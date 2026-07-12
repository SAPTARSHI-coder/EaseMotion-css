# Ease: Accordion Horizontal

A horizontal accordion component where panels expand and collapse sideways. Clicking a panel expands it while others shrink. Features a rotating icon indicator and content that fades in on expand.

## Features

- Horizontal panel layout with flexbox
- Smooth width transition via `flex` property
- Rotating icon toggle (+ → ×)
- Opacity + translateY content entrance
- Custom properties for full theme control

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ah-duration` | `0.4s` | Expand/collapse transition duration |
| `--ah-panel-bg` | `#f5f5f5` | Panel background color |
| `--ah-active-color` | `#4f46e5` | Active/expanded panel background |
| `--ah-text-color` | `#1e1e2e` | Text color |
| `--ah-radius` | `12px` | Panel border radius |

## Usage

```html
<div class="accordion">
  <div class="accordion-panel">
    <div class="panel-header">
      <span class="panel-icon">+</span>
      <span class="panel-title">Title</span>
    </div>
    <div class="panel-content">
      <p>Content here</p>
    </div>
  </div>
</div>
```

JavaScript toggles the `.active` class on click. Import `style.css` and ensure Inter font is available.