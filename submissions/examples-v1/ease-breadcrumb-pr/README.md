# ease-breadcrumb-pr

Breadcrumb navigation showing current page path with clickable parent links.

## Features

- Horizontal layout with separator between items
- Current page is non-clickable and bold
- Parent links are clickable with hover underline
- Separator can be text (`/`) or icon (chevron)
- 3 size variants: small, default, large
- Accessible with `aria-label` and `aria-current`

## Files

- `style.css` — the breadcrumb styles
- `demo.html` — working demo with 3 size variants
- `README.md` — usage documentation

## Usage

```html
&lt;&lt;nav aria-label="Breadcrumb"&gt; &lt;ol class="breadcrumb-pr"&gt; &lt;li
class="breadcrumb-pr-item"&gt; &lt;a href="#"
class="breadcrumb-pr-link"&gt;Home&lt;/a&gt; &lt;span
class="breadcrumb-pr-separator"&gt;/&lt;/span&gt; &lt;/li&gt; &lt;li
class="breadcrumb-pr-item"&gt; &lt;a href="#"
class="breadcrumb-pr-link"&gt;Products&lt;/a&gt; &lt;span
class="breadcrumb-pr-separator"&gt;/&lt;/span&gt; &lt;/li&gt; &lt;li
class="breadcrumb-pr-item"&gt; &lt;span class="breadcrumb-pr-current"
aria-current="page"&gt;Laptops&lt;/span&gt; &lt;/li&gt; &lt;/ol&gt; &lt;/nav&gt;
```
