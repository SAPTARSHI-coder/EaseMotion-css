# ease-tabs-pr

CSS-only tab component using hidden radio buttons and `:checked` selector.

## Features

- Hidden native radio buttons for accessibility
- Visual tab labels with active underline indicator
- Smooth content panel fade + slide animation
- Only one panel visible at a time (enforced by radio group)
- No JavaScript required

## Files

- `style.css` — the tab styles
- `demo.html` — working demo with 3 tabs: Description, Features, Reviews
- `README.md` — usage documentation

## Usage

```html
&lt;div class="tabs-pr"&gt; &lt;!-- Tab 1 --&gt; &lt;input type="radio"
name="tabs-pr" id="tab-1" class="tabs-pr-input" checked&gt; &lt;label
for="tab-1" class="tabs-pr-label"&gt;Tab 1&lt;/label&gt; &lt;!-- Tab 2 --&gt;
&lt;input type="radio" name="tabs-pr" id="tab-2" class="tabs-pr-input"&gt;
&lt;label for="tab-2" class="tabs-pr-label"&gt;Tab 2&lt;/label&gt; &lt;!--
Panels --&gt; &lt;div class="tabs-pr-content"&gt; &lt;div id="panel-1"
class="tabs-pr-panel"&gt;Content 1&lt;/div&gt; &lt;div id="panel-2"
class="tabs-pr-panel"&gt;Content 2&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
```
