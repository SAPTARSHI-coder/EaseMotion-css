# CSS-Only Modal/Dialog Component

A fully functional modal component using only CSS and the `:target` pseudo-class. No JavaScript required.

## Demo

Open `index.html` in any modern browser. Click any button to open the corresponding modal.

## Features

- ✅ **Pure CSS** — zero JavaScript
- ✅ **:target powered** — URL hash controls visibility
- ✅ **Backdrop blur** — frosted glass overlay effect
- ✅ **3 animation variants**: fade, slide, scale
- ✅ **Multiple close methods**: overlay click, close button, browser back
- ✅ **Accessible** — respects `prefers-reduced-motion`
- ✅ **Responsive** — works on all screen sizes

## Usage

### Basic Structure

```html
&lt;!-- Trigger --&gt; &lt;a href="#my-modal"&gt;Open Modal&lt;/a&gt; &lt;!--
Modal --&gt; &lt;div id="my-modal" class="modal"&gt; &lt;a href="#"
class="modal__overlay"&gt;&lt;/a&gt; &lt;div class="modal__content"&gt; &lt;a
href="#" class="modal__close"&gt;&times;&lt;/a&gt; &lt;h2&gt;Modal
Title&lt;/h2&gt; &lt;p&gt;Your content here...&lt;/p&gt; &lt;/div&gt;
&lt;/div&gt;
```
