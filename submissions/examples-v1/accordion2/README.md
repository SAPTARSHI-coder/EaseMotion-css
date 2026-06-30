# Accordion Component

CSS-only accordion using native `&lt;details&gt;` and `&lt;summary&gt;` elements. No JavaScript required.

## Demo

Open `demo.html` in any modern browser.

## Features

- ✅ **Pure CSS** — uses native `&lt;details&gt;`/`&lt;summary&gt;`, zero JavaScript
- ✅ **Smooth animation** — grid-based height transition
- ✅ **Arrow rotation** — chevron rotates 180° when open
- ✅ **Exclusive mode** — only one item open at a time using `name` attribute
- ✅ **Nested accordions** — accordions inside accordions
- ✅ **Dark theme** — included `.accordion--dark`
- ✅ **Icon support** — leading icons in headers
- ✅ **Accessible** — keyboard navigation, focus states
- ✅ **Responsive** — adapts to mobile screens

## Usage

### Basic Accordion

```html
&lt;div class="accordion"&gt;
  &lt;details class="accordion__item"&gt;
    &lt;summary class="accordion__header"&gt;
      &lt;span&gt;Question?&lt;/span&gt;
      &lt;svg class="accordion__icon"&gt;...&lt;/svg&gt;
    &lt;/summary&gt;
    &lt;div class="accordion__content"&gt;
      &lt;p&gt;Answer content goes here.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/details&gt;
&lt;/div&gt;