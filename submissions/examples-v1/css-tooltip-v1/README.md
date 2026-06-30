# CSS-Only Tooltip with Arrow

A pure CSS tooltip that appears on hover using `::before` and `::after` pseudo-elements. No JavaScript required.

## Demo

Open `demo.html` in your browser to see:

- Top, bottom, left, right positions
- Button, text, and icon triggers
- Long content wrapping
- Dark theme variant

## Usage

```html
&lt;!-- Basic tooltip (top position, default) --&gt; &lt;button class="tooltip"
data-tooltip="Tooltip text here"&gt;Hover Me&lt;/button&gt; &lt;!-- Bottom
position --&gt; &lt;button class="tooltip tooltip-bottom" data-tooltip="Appears
below"&gt;Hover Me&lt;/button&gt; &lt;!-- Left position --&gt; &lt;span
class="tooltip tooltip-left" data-tooltip="Appears to left"&gt;Hover
Me&lt;/span&gt; &lt;!-- Right position --&gt; &lt;div class="tooltip
tooltip-right" data-tooltip="Appears to right"&gt;Hover Me&lt;/div&gt; &lt;!--
Color variants --&gt; &lt;button class="tooltip tooltip-dark" data-tooltip="Dark
theme"&gt;Dark&lt;/button&gt; &lt;button class="tooltip tooltip-light"
data-tooltip="Light theme"&gt;Light&lt;/button&gt; &lt;button class="tooltip
tooltip-error" data-tooltip="Error!"&gt;Error&lt;/button&gt; &lt;button
class="tooltip tooltip-success"
data-tooltip="Success!"&gt;Success&lt;/button&gt;
```
