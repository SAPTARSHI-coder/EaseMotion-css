\# EaseMotion CSS — Zoom In Scrollbar Flicker Fix



A lightweight CSS solution for preventing temporary scrollbar flickering when a full-width hero section uses a zoom-in animation on page load.



\## Problem



When `.ease-zoom-in` is applied to a full-width hero section, the `scale()` transform can temporarily extend the visual bounds of the element during the animation.



In Chrome, this can cause a brief horizontal or vertical scrollbar to appear before the animation settles.



\## Solution



This example prevents the transformed hero from affecting the page's scrollable area by using a dedicated wrapper and CSS containment.



The implementation uses:



\* `overflow: hidden` on the hero wrapper

\* `overflow: clip` on the hero

\* `contain: layout paint`

\* `contain-intrinsic-size`

\* `will-change: transform`

\* A smooth CSS zoom-in animation

\* A fallback for browsers that do not support `overflow: clip`

\* `prefers-reduced-motion` support for accessibility



\## Files



```text

zoom-scrollbar-79354/

├── demo.html

├── style.css

└── README.md

```



\## Usage



Include the stylesheet:



```html

<link rel="stylesheet" href="style.css">

```



Wrap the animated hero in a container:



```html

<div class="hero-wrapper">

&#x20;   <section class="hero ease-zoom-in">

&#x20;       <div class="hero-content">

&#x20;           <h1>Zoom In Scrollbar Flicker</h1>

&#x20;           <p>Your hero content goes here.</p>

&#x20;       </div>

&#x20;   </section>

</div>

```



The wrapper contains the visual bounds created by the zoom animation and prevents the animation from producing unwanted page-level scrollbars.



\## Animation



The zoom-in animation starts at a slightly reduced scale and smoothly settles at its normal size:



```css

@keyframes ease-kf-zoom-in {

&#x20;   from {

&#x20;       transform: scale(0.85);

&#x20;       opacity: 0;

&#x20;   }



&#x20;   to {

&#x20;       transform: scale(1);

&#x20;       opacity: 1;

&#x20;   }

}

```



\## Accessibility



Users who prefer reduced motion are not shown the zoom animation.



The demo uses:



```css

@media (prefers-reduced-motion: reduce) {

&#x20;   .hero {

&#x20;       animation: none;

&#x20;       transform: none;

&#x20;   }

}

```



\## Browser Testing



The demo is self-contained and can be opened directly in a browser without JavaScript, a server, or external libraries.



To verify the fix:



1\. Open `demo.html` in Chrome.

2\. Reload the page several times.

3\. Observe the first moment of the zoom-in animation.

4\. Confirm that no temporary horizontal or unexpected vertical scrollbar appears because of the animation.

5\. Confirm that normal page scrolling still works.



\## Why It Fits EaseMotion CSS



This example follows the animation-first philosophy of EaseMotion CSS while addressing a practical issue that can occur when CSS transforms are used on full-width elements.



The solution remains lightweight, readable, reusable, and completely CSS-based. It also includes reduced-motion support and a browser fallback for better compatibility.



\## Issue



This submission addresses issue #79354:



\*\*Bug: ease-zoom-in on hero section causes brief scrollbar flicker in Chrome on page load\*\*



Closes #79354



