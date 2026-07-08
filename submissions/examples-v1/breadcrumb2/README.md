# Breadcrumb Navigation Component

A responsive, accessible breadcrumb navigation with multiple separator styles, hover effects, and a collapsed dropdown variant.

## Demo

Open `demo.html` in any modern browser.

## Features

- ✅ **Pure CSS** — zero JavaScript
- ✅ **Multiple separators** — chevron, slash, arrow
- ✅ **Hover effects** — color change and background highlight
- ✅ **Active state** — current page highlighting
- ✅ **Collapsed variant** — ellipsis dropdown for long paths
- ✅ **Dark theme** — included `.breadcrumb--dark`
- ✅ **Size variant** — `.breadcrumb--large`
- ✅ **Accessible** — proper ARIA labels, keyboard navigation
- ✅ **Responsive** — adapts to small screens

## Usage

### Basic Breadcrumb

```html
&lt;nav class="breadcrumb" aria-label="Breadcrumb"&gt;
  &lt;ol class="breadcrumb__list"&gt;
    &lt;li class="breadcrumb__item"&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb__separator"&gt;
      &lt;svg&gt;...&lt;/svg&gt;
    &lt;/li&gt;
    &lt;li class="breadcrumb__item"&gt;&lt;a href="#"&gt;Products&lt;/a&gt;&lt;/li&gt;
    &lt;li class="breadcrumb__separator"&gt;
      &lt;svg&gt;...&lt;/svg&gt;
    &lt;/li&gt;
    &lt;li class="breadcrumb__item breadcrumb__item--active" aria-current="page"&gt;Laptops&lt;/li&gt;
  &lt;/ol&gt;
&lt;/nav&gt;