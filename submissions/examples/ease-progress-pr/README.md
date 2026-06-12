# ease-progress-pr

Animated progress bar with moving stripes and color/size variants.

## Features

- Animated fill width with smooth transition
- Moving stripe pattern using CSS gradient animation
- 4 color variants: primary, success, warning, danger
- 3 size variants: small, default, large
- Percentage label inside the bar

## Files

- `style.css` — the progress bar styles
- `demo.html` — working demo with all color and size variants
- `README.md` — usage documentation

## Usage

```html
&lt;!-- Basic progress bar --&gt; &lt;div class="progress-pr
progress-pr-primary"&gt; &lt;div class="progress-pr-bar" style="width: 75%;"&gt;
&lt;span class="progress-pr-label"&gt;75%&lt;/span&gt; &lt;/div&gt; &lt;/div&gt;
&lt;!-- Without label --&gt; &lt;div class="progress-pr progress-pr-success
progress-pr-sm"&gt; &lt;div class="progress-pr-bar" style="width:
60%;"&gt;&lt;/div&gt; &lt;/div&gt;
```
