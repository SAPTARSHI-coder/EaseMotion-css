# ease-accordion-pr

CSS-only accordion using native `&lt;details&gt;`/`&lt;summary&gt;` elements with custom styling and smooth animations.

## Features

- Uses semantic `&lt;details&gt;` and `&lt;summary&gt;` HTML elements
- Custom styled summary with hover effect
- Animated arrow icon rotation on open/close
- Smooth content reveal with fade + slide animation
- Multiple items, each independently openable

## Files

- `style.css` — the accordion styles
- `demo.html` — working demo with 3 FAQ items
- `README.md` — usage documentation

## Usage

```html
&lt;div class="accordion-pr"&gt; &lt;details class="accordion-pr-item"&gt;
&lt;summary class="accordion-pr-summary"&gt; Question Text &lt;svg
class="accordion-pr-icon" fill="none" stroke="currentColor" viewBox="0 0 24
24"&gt; &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
d="M19 9l-7 7-7-7"&gt;&lt;/path&gt; &lt;/svg&gt; &lt;/summary&gt; &lt;div
class="accordion-pr-content"&gt; Answer content goes here... &lt;/div&gt;
&lt;/details&gt; &lt;/div&gt;
```
