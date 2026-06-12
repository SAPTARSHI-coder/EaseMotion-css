# ease-spinner-pr

CSS-only loading spinner with rotating animation, size and color variants.

## Features

- Pure CSS rotating border animation
- 4 size variants: small, medium, default, large
- 5 color variants: primary, success, warning, error, light
- Optional percentage label inside spinner
- Light variant for dark backgrounds
- Inline text pairing option

## Files

- `style.css` — the spinner styles
- `demo.html` — working demo with all variants
- `README.md` — usage documentation

## Usage

```html
&lt;!-- Basic spinner --&gt; &lt;span class="spinner-pr"&gt;&lt;/span&gt;
&lt;!-- Size --&gt; &lt;span class="spinner-pr spinner-pr-sm"&gt;&lt;/span&gt;
&lt;span class="spinner-pr spinner-pr-lg"&gt;&lt;/span&gt; &lt;!-- Color --&gt;
&lt;span class="spinner-pr spinner-pr-success"&gt;&lt;/span&gt; &lt;!-- With
label --&gt; &lt;div class="spinner-pr-wrapper"&gt; &lt;span class="spinner-pr
spinner-pr-lg"&gt;&lt;/span&gt; &lt;span
class="spinner-pr-label"&gt;75%&lt;/span&gt; &lt;/div&gt; &lt;!-- Inline with
text --&gt; &lt;div class="spinner-pr-inline"&gt; &lt;span class="spinner-pr
spinner-pr-sm"&gt;&lt;/span&gt; &lt;span
class="spinner-pr-inline-text"&gt;Loading...&lt;/span&gt; &lt;/div&gt;
```
