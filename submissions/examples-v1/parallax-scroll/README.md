# Parallax Scroll Effect

Depth illusion created by moving background elements at different speeds on scroll. Uses CSS scroll-driven animations with fallbacks.

## Demo

Open `demo.html` in any modern browser and scroll down.

## Features

- ✅ **Pure CSS** — scroll-driven animations, no JavaScript
- ✅ **Layered parallax** — multiple layers at different speeds
- ✅ **Text parallax** — individual text elements with speed
- ✅ **Fixed background** — `background-attachment: fixed` variant
- ✅ **Responsive** — adapts to mobile screens
- ✅ **Accessible** — respects `prefers-reduced-motion`

## Usage

### Basic Parallax Section

```html
&lt;section class="parallax-section"&gt;
  &lt;div class="parallax parallax--bg" data-speed="0.3"&gt;
    &lt;div class="parallax__layer"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="parallax parallax--content" data-speed="0.8"&gt;
    &lt;h1&gt;Title&lt;/h1&gt;
    &lt;p&gt;Content&lt;/p&gt;
  &lt;/div&gt;
&lt;/section&gt;