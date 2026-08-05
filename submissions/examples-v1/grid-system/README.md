# Grid Layout System

A lightweight CSS grid utility class system with 12 columns, responsive breakpoints, auto-columns, and gap utilities.

## Demo

Open `demo.html` in any modern browser.

## Features

- ✅ **Pure CSS** — zero JavaScript
- ✅ **12-column grid** — `.col-1` through `.col-12`
- ✅ **Responsive breakpoints** — `sm`, `md`, `lg`, `xl`
- ✅ **Auto columns** — `.col` for equal width
- ✅ **Offset classes** — `.offset-*` for spacing
- ✅ **Gap utilities** — `0`, `sm`, `default`, `lg`
- ✅ **Alignment** — center, right, between, around, middle, bottom
- ✅ **Nested grids** — rows inside columns
- ✅ **Mobile-first** — breakpoints use `min-width`

## Usage

### Basic Grid

```html
&lt;div class="row"&gt;
  &lt;div class="col-6"&gt;Half width&lt;/div&gt;
  &lt;div class="col-6"&gt;Half width&lt;/div&gt;
&lt;/div&gt;