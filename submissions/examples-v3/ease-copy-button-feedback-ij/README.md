# Copy Button Feedback

A copy-to-clipboard component with animated success feedback. Each code block includes a copy button that shows "Copied!" with a checkmark icon animation on click, then resets after a configurable duration.

## Usage

```html
<div class="code-block">
  <div class="code-header">
    <span class="lang-label">HTML</span>
    <button class="copy-btn" data-code="&lt;h1&gt;Hello&lt;/h1&gt;">
      <span class="btn-text">Copy</span>
      <span class="btn-icon">
        <svg><!-- checkmark --></svg>
      </span>
    </button>
  </div>
  <pre><code>&lt;h1&gt;Hello&lt;/h1&gt;</code></pre>
</div>
```

## CSS Custom Properties

| Property                 | Default    | Description                |
|--------------------------|------------|----------------------------|
| `--copy-fb-duration`     | `2000ms`   | Success feedback duration  |
| `--copy-fb-btn-bg`       | `#2a2a3d`  | Default button background  |
| `--copy-fb-btn-color`    | `#e0e0f0`  | Default button text color  |
| `--copy-fb-success-bg`   | `#1a6b3c`  | Success state background   |
| `--copy-fb-success-color`| `#b0f0c0`  | Success state text color   |
| `--copy-fb-icon-size`    | `16px`     | Checkmark icon dimensions  |

## JavaScript Behavior

- Reads `--copy-fb-duration` from `:root` for the reset timeout
- Uses the Clipboard API with a `textarea` fallback
- Toggles the `.success` class on the button to trigger CSS transitions

## Demo

Open `demo.html` in a browser and click any copy button to see the animated feedback.
