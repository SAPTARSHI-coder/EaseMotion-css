# Progress Bar with Stripes

Animated progress bars with stripe movement, percentage labels, and variants for success, warning, error, and indeterminate loading states.

## Demo

Open `demo.html` in your browser to see:
- Default progress bar at 75%
- Color variants: success, warning, error
- Striped animated progress
- Indeterminate loading bar
- Size variants: thin, large

## Usage

```html
&lt;!-- Basic progress bar --&gt;
&lt;div class="progress-bar"&gt;
  &lt;div class="progress-fill" style="width: 75%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- With stripes and animation --&gt;
&lt;div class="progress-bar progress-striped"&gt;
  &lt;div class="progress-fill progress-animated" style="width: 60%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Color variants --&gt;
&lt;div class="progress-bar progress-success"&gt;
  &lt;div class="progress-fill" style="width: 100%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress-bar progress-warning"&gt;
  &lt;div class="progress-fill" style="width: 45%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress-bar progress-error"&gt;
  &lt;div class="progress-fill" style="width: 30%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Size variants --&gt;
&lt;div class="progress-bar progress-thin"&gt;
  &lt;div class="progress-fill" style="width: 85%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="progress-bar progress-large"&gt;
  &lt;div class="progress-fill" style="width: 50%;"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;!-- Indeterminate loading --&gt;
&lt;div class="progress-bar progress-indeterminate"&gt;
  &lt;div class="progress-fill"&gt;&lt;/div&gt;
&lt;/div&gt;