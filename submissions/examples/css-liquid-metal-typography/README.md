\# CSS Liquid Metal Typography



\## What does this add?

Metallic, reflective text created with a sweeping multi-stop `linear-gradient` clipped to text (`-webkit-text-fill-color: transparent`) and a `contrast`/`brightness` filter for a polished chrome-like sheen. Pure CSS, no images or SVG required.



\## How does a developer use it?



```html

<h1 class="ease-text-liquid-metal">LIQUID METAL</h1>

```



Variants:

```html

<h1 class="ease-text-liquid-metal ease-text-liquid-metal-slow">Slower sweep</h1>

<h1 class="ease-text-liquid-metal ease-text-liquid-metal-gold">Gold tint</h1>

<h1 class="ease-text-liquid-metal ease-text-liquid-metal-rose">Rose tint</h1>

```



\## Why does it fit EaseMotion CSS?

It follows the animation-first, zero-dependency philosophy of EaseMotion CSS — built entirely with a CSS gradient sweep and `background-clip: text`, no external assets. It's fully responsive and respects `prefers-reduced-motion` by freezing the gradient sweep for users who prefer reduced motion.

