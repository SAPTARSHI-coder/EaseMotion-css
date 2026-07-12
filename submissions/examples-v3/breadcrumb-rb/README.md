# Breadcrumb Navigation Component

Pure CSS breadcrumb trail with animated separators, hover effects, and responsive collapse. No JavaScript required.

## Files

- `demo.html` — Live preview with slash, chevron, arrow, bullet, pipe, glass, and dark mode variants
- `style.css` — All breadcrumb styles, animations, and layout helpers

## Structure

Use semantic `&lt;nav&gt;` + `&lt;ol&gt;` markup for accessibility:

```html
&lt;nav aria-label="Breadcrumb"&gt;
  &lt;ol class="breadcrumb"&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item"&gt;&lt;a href="#"&gt;Products&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb-item active" aria-current="page"&gt;Current&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;