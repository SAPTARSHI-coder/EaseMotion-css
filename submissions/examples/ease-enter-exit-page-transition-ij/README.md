# Enter/Exit Page Transition

Slide-fade page transition component with configurable slide direction and fade opacity. Supports left, right, up, and down directions.

## Features

- Smooth slide-fade enter/exit transitions
- Configurable slide direction (left, right, up, down)
- Customizable fade opacity and duration
- 3 demo pages with different content
- Navigation prevents rapid re-clicks

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="ept-page" id="page1">
  <h1>Page Title</h1>
  <button onclick="navigate(2)">Next</button>
</div>

<div class="ept-page" id="page2" style="display:none;">
  <h1>Page 2</h1>
  <button onclick="navigate(1)">Back</button>
</div>

<script>
  // Initialize first page visible, others hidden
  document.querySelectorAll('.ept-page').forEach((p, i) => {
    if (i > 0) p.style.display = 'none';
  });
</script>
```

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--transition-bg` | `#2a2a3e` | Page background color |
| `--transition-duration` | `0.5s` | Transition animation duration |
| `--slide-direction` | `right` | Slide direction (left, right, up, down) |
| `--fade-opacity` | `0` | Opacity at exit/enter start |
