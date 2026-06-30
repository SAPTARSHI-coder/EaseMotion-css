# ease-loader-pr

A minimal, CSS-only dot loader with three dots pulsing in sequence.

## Effect

- Three dots scale and fade in a staggered loop
- Sequential animation delays create a wave-like motion
- Fully scalable via CSS custom property `--loader-color`

## Files

- `style.css` — the loader animation styles
- `demo.html` — working demo showing standalone, button, and custom color variants

## Usage

```html
&lt;!-- Standalone loader --&gt; &lt;div class="loader-pr"&gt; &lt;div
class="dot"&gt;&lt;/div&gt; &lt;div class="dot"&gt;&lt;/div&gt; &lt;div
class="dot"&gt;&lt;/div&gt; &lt;/div&gt; &lt;!-- Custom color --&gt; &lt;div
class="loader-pr" style="--loader-color: #f97316;"&gt; &lt;div
class="dot"&gt;&lt;/div&gt; &lt;div class="dot"&gt;&lt;/div&gt; &lt;div
class="dot"&gt;&lt;/div&gt; &lt;/div&gt;
```
