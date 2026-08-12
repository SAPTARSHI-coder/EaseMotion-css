\# CSS Skew-Active Badge



\## What does this add?

A lightweight, pure-CSS badge component with a subtle skew transform that scales and glows on hover, focus, or active state — ideal for SaaS showcase layouts (e.g. "New", "Beta", "Live" tags).



\## How does a developer use it?



```html

<div class="ease-skew-badge">

&#x20; <span>New</span>

</div>

```



Add a color variant:

```html

<div class="ease-skew-badge ease-skew-badge-success">

&#x20; <span>Active</span>

</div>

```



Add a pulsing animation:

```html

<div class="ease-skew-badge ease-skew-badge-pulse">

&#x20; <span>Live</span>

</div>

```



Available variants: `ease-skew-badge-success`, `ease-skew-badge-danger`, `ease-skew-badge-warning`, `ease-skew-badge-info`, `ease-skew-badge-pulse`.



\## Why does it fit EaseMotion CSS?

It follows the animation-first, zero-dependency philosophy of EaseMotion CSS — using only CSS `transform`, `transition`, and `@keyframes` for a smooth, modern interaction. It's fully responsive and respects `prefers-reduced-motion` for accessibility.

