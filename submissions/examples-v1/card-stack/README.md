# Card Stack Component

Stacked cards with hover-to-reveal effect. Cards fan out, slide apart, or spread in 3D perspective on hover.

## Demo

Open `demo.html` in any modern browser and hover over the card stacks.

## Features

- ✅ **Pure CSS** — zero JavaScript
- ✅ **Fan out** — cards rotate and spread on hover
- ✅ **Slide apart** — horizontal slide reveal
- ✅ **3D perspective** — rotateY and rotateX depth
- ✅ **Vertical stack** — cards stack and expand vertically
- ✅ **Staggered colors** — gradient color variants
- ✅ **Compact** — smaller card size
- ✅ **Accessible** — respects `prefers-reduced-motion`

## Usage

### Basic Card Stack

```html
&lt;div class="card-stack"&gt; &lt;div class="card-stack__card" style="--i:
0;"&gt; &lt;div class="card-stack__content"&gt; &lt;span
class="card-stack__icon"&gt;🚀&lt;/span&gt; &lt;h3&gt;Title&lt;/h3&gt;
&lt;p&gt;Description&lt;/p&gt; &lt;/div&gt; &lt;/div&gt; &lt;div
class="card-stack__card" style="--i: 1;"&gt; ... &lt;/div&gt; &lt;/div&gt;
```
