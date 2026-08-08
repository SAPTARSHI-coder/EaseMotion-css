# Tabs Component

CSS-only tab interface using radio buttons. No JavaScript required.

## Demo

Open `demo.html` in any modern browser.

## Features

- ✅ **Pure CSS** — uses radio buttons, zero JavaScript
- ✅ **4 styles** — underline, pill, card, vertical
- ✅ **Smooth transitions** — fade animation on panel switch
- ✅ **Icon support** — emoji or SVG icons in tabs
- ✅ **Dark theme** — included `.tabs--dark`
- ✅ **Accessible** — keyboard navigation, focus states
- ✅ **Responsive** — horizontal scroll on mobile

## Usage

### Basic Underline Tabs

```html
&lt;div class="tabs"&gt;
  &lt;div class="tabs__nav"&gt;
    &lt;label class="tabs__tab"&gt;
      &lt;input type="radio" name="tabs-1" checked&gt;
      &lt;span&gt;Tab 1&lt;/span&gt;
    &lt;/label&gt;
    &lt;label class="tabs__tab"&gt;
      &lt;input type="radio" name="tabs-1"&gt;
      &lt;span&gt;Tab 2&lt;/span&gt;
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="tabs__content"&gt;
    &lt;div class="tabs__panel"&gt;Content 1&lt;/div&gt;
    &lt;div class="tabs__panel"&gt;Content 2&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;