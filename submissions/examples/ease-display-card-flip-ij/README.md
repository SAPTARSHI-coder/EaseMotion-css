# Display Card Flip

3D card flip animation with front and back faces using CSS `perspective` and `backface-visibility`.

## CSS Custom Properties

| Variable        | Default                           | Description               |
|-----------------|-----------------------------------|---------------------------|
| `--card-width`  | `240px`                           | Width of the card         |
| `--card-height` | `340px`                           | Height of the card        |
| `--front-bg`    | `linear-gradient(135deg, #6366f1, #8b5cf6)` | Front face background |
| `--back-bg`     | `linear-gradient(135deg, #1e1b4b, #0f0f1a)` | Back face background  |
| `--flip-duration`| `0.8s`                           | Duration of the flip      |

## Usage

```html
<link rel="stylesheet" href="style.css">
<div class="flip-container" id="card">
  <div class="flip-inner">
    <div class="flip-front">Front Content</div>
    <div class="flip-back">Back Content</div>
  </div>
</div>
<script>
  document.getElementById('card').addEventListener('click', function () {
    this.classList.toggle('flipped');
  });
</script>
```

Toggle the `.flipped` class on `.flip-container` to trigger the 3D rotation.
