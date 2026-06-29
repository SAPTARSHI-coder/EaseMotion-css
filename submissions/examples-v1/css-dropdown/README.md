# CSS-Only Dropdown Menu Component

A fully functional dropdown menu using only CSS `:hover` and `:focus-within` pseudo-classes. No JavaScript required.

## Demo

Open `index.html` in any modern browser.

## Features

- ✅ **Pure CSS** — zero JavaScript
- ✅ **:hover support** — mouse interaction
- ✅ **:focus-within support** — keyboard/tab navigation
- ✅ **Nested submenus** — multi-level dropdowns
- ✅ **Arrow indicators** — rotate on open
- ✅ **3 animations**: slide, fade, scale
- ✅ **Mega menu** — multi-column layout
- ✅ **Dark theme** — included variant
- ✅ **Dividers & danger items** — styled separators
- ✅ **Responsive** — stacks on mobile
- ✅ **Accessible** — keyboard navigable, reduced-motion support

## Usage

### Basic Dropdown

```html
&lt;nav class="navbar"&gt;
  &lt;ul class="nav-menu"&gt;
    &lt;li class="nav-item nav-item--dropdown"&gt;
      &lt;a href="#" class="dropdown-trigger"&gt;
        Menu
        &lt;svg class="dropdown-arrow" ...&gt;...&lt;/svg&gt;
      &lt;/a&gt;
      &lt;ul class="dropdown dropdown--slide"&gt;
        &lt;li&gt;&lt;a href="#"&gt;Item 1&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Item 2&lt;/a&gt;&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;