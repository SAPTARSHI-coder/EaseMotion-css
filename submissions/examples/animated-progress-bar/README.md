\# Animated Progress Bar with Percentage Counter



\## What does this add?

A pure CSS animated progress bar that fills smoothly and displays a live-counting percentage number, without any JavaScript.



\## How does a developer use it?

```html

<div class="ease-progress ease-progress-counter">

&#x20; <div class="ease-progress-bar" style="--ease-progress-value:75; width:75%;">

&#x20;   <span class="ease-progress-label ease-progress-value"></span>

&#x20; </div>

</div>

```



Add `ease-progress-lg` for a larger bar, or `ease-progress-success` / `ease-progress-danger` for color variants.



\## Why does it fit EaseMotion CSS?

It follows the animation-first, zero-dependency philosophy of EaseMotion CSS — using only CSS `@keyframes` and the CSS `@property` + `counter()` trick to animate both the fill width and the percentage number, with no JavaScript required.

