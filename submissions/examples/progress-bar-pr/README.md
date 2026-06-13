# progress-bar-pr

Animated **progress bars** with fill, striped animation, multiple colors, sizes, and circular variants.

## Preview

Open `demo.html` in your browser. No build step required.

## Types

| Type | Class | Description |
|------|-------|-------------|
| Linear | `.progress-pr` | Standard horizontal bar |
| Striped | `.progress-striped-pr` | Diagonal stripes with slide animation |
| Circular | `.progress-circle-pr` | SVG-based ring progress |
| Segmented | `.progress-segmented-pr` | Step indicator dots |

## Usage

```html
&lt;!-- Basic progress --&gt;
&lt;div class="progress-item-pr"&gt;
  &lt;div class="progress-header-pr"&gt;
    &lt;span class="progress-title-pr"&gt;Uploading...&lt;/span&gt;
    &lt;span class="progress-value-pr"&gt;75%&lt;/span&gt;
  &lt;/div&gt;
  &lt;div class="progress-pr is-animated-pr"&gt;
    &lt;div class="progress-fill-pr" style="width: 75%;"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;!-- Striped animated --&gt;
&lt;div class="progress-pr progress-striped-pr is-animated-pr"&gt;
  &lt;div class="progress-fill-pr" style="width: 60%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Circular --&gt;
&lt;div class="progress-circle-pr is-animated-pr"&gt;
  &lt;svg viewBox="0 0 100 100"&gt;
    &lt;circle class="progress-circle-bg-pr" cx="50" cy="50" r="45"&gt;&lt;/circle&gt;
    &lt;circle class="progress-circle-fill-pr" cx="50" cy="50" r="45" style="--circle-offset: 70.75;"&gt;&lt;/circle&gt;
  &lt;/svg&gt;
  &lt;span class="progress-circle-text-pr"&gt;75%&lt;/span&gt;
&lt;/div&gt;