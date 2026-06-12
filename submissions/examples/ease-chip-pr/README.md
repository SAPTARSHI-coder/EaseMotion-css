# ease-chip-pr

Removable tag/chip component with hover scale effect and multiple variants.

## Features

- Rounded pill shape with background color
- Optional "×" remove button with hover state
- 3 main variants: filled, outlined, with icon
- 3 color variants: success, warning, error
- Hover scale effect with shadow

## Files

- `style.css` — the chip styles
- `demo.html` — working demo with all variants
- `README.md` — usage documentation

## Usage

```html
&lt;!-- Filled chip --&gt; &lt;span class="chip-pr chip-pr-filled"&gt; React
&lt;button class="chip-pr-remove" aria-label="Remove React"&gt;×&lt;/button&gt;
&lt;/span&gt; &lt;!-- Outlined chip --&gt; &lt;span class="chip-pr
chip-pr-outlined"&gt; Design &lt;button class="chip-pr-remove"
aria-label="Remove Design"&gt;×&lt;/button&gt; &lt;/span&gt; &lt;!-- With
leading icon --&gt; &lt;span class="chip-pr chip-pr-icon"&gt; &lt;svg
class="chip-pr-leading"&gt;...&lt;/svg&gt; John Doe &lt;button
class="chip-pr-remove" aria-label="Remove"&gt;×&lt;/button&gt; &lt;/span&gt;
```
