# ease-dropdown-pr

CSS-only dropdown menu using `:hover` on parent container. No JavaScript required.

## Features

- Hover on trigger reveals dropdown panel
- Smooth fade + slide-down animation with bounce
- Arrow indicator rotates 180° on open
- Dropdown items with hover highlight
- Section headers and dividers
- Right-aligned variant for edge cases

## Files

- `style.css` — the dropdown styles
- `demo.html` — working demo with standalone, navbar, and right-aligned
- `README.md` — usage documentation

## Usage

```html
&lt;div class="dropdown-pr"&gt; &lt;button class="dropdown-pr-trigger"
type="button"&gt; Options &lt;svg class="dropdown-pr-arrow"&gt;...&lt;/svg&gt;
&lt;/button&gt; &lt;ul class="dropdown-pr-menu"&gt; &lt;li
class="dropdown-pr-item"&gt; &lt;a href="#" class="dropdown-pr-link"&gt;Item
1&lt;/a&gt; &lt;/li&gt; &lt;li class="dropdown-pr-divider"&gt;&lt;/li&gt; &lt;li
class="dropdown-pr-item"&gt; &lt;a href="#" class="dropdown-pr-link"&gt;Item
2&lt;/a&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/div&gt;
```
