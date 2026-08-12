# Loading Spinner Component

Animated loading spinners with multiple variants for loading states, async operations, and progress indication. Pure CSS — no JavaScript required.

## Demo

Open `demo.html` in your browser to see:
- Default rotating border spinner
- Dotted, dual ring, and pulse ring variants
- Bounce dots and wave bars
- Circle notch and orbit spinners
- Size variants: small, default, large
- Color variants: green, red, blue, orange, purple

## Usage

```html
&lt;!-- Default spinner --&gt;
&lt;div class="spinner"&gt;&lt;/div&gt;

&lt;!-- Variants --&gt;
&lt;div class="spinner spinner-dots"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-dual"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-pulse"&gt;&lt;/div&gt;

&lt;!-- Multi-element spinners --&gt;
&lt;div class="spinner spinner-bounce"&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="spinner spinner-wave"&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
  &lt;div&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="spinner spinner-notch"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-orbit"&gt;&lt;/div&gt;

&lt;!-- Sizes --&gt;
&lt;div class="spinner spinner-small"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-large"&gt;&lt;/div&gt;

&lt;!-- Colors --&gt;
&lt;div class="spinner spinner-green"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-red"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-blue"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-orange"&gt;&lt;/div&gt;
&lt;div class="spinner spinner-purple"&gt;&lt;/div&gt;