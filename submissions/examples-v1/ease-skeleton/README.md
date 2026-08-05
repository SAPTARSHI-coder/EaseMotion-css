\## ease-skeleton



\*\*What does this do?\*\*

A shimmer-style loading placeholder component that mimics content shape

(text, avatar, image, card) while data is loading, using a pure CSS

gradient sweep animation — no JavaScript required.



\*\*How is it used?\*\*

Apply the base `skeleton` class with a shape variant:



```html

<div class="skeleton skeleton-text"></div>

<div class="skeleton skeleton-text short"></div>

<div class="skeleton skeleton-avatar"></div>

<div class="skeleton skeleton-image"></div>

```



Combine into a full card layout:



```html

<div class="skeleton-card">

&#x20; <div class="skeleton-card-header">

&#x20;   <div class="skeleton skeleton-avatar"></div>

&#x20;   <div class="skeleton skeleton-text"></div>

&#x20; </div>

&#x20; <div class="skeleton skeleton-image"></div>

&#x20; <div class="skeleton skeleton-text"></div>

</div>

```



Speed variants:



```html

<div class="skeleton skeleton-image skeleton-fast"></div>

<div class="skeleton skeleton-image skeleton-slow"></div>

```



Light theme variant:



```html

<div class="skeleton skeleton-light skeleton-text"></div>

```



Customize with CSS variables:



```css

.my-skeleton {

&#x20; --skeleton-base: #2a2a3a;

&#x20; --skeleton-highlight: #3d3d52;

&#x20; --skeleton-speed: 1.5s;

&#x20; --skeleton-radius: 6px;

}

```



\*\*Why is it useful?\*\*

Loading skeletons are one of the most widely used UI patterns on the

web — used by LinkedIn, YouTube, and Facebook to reduce perceived load

time and prevent layout jank. EaseMotion CSS currently has no answer

for loading states, so `skeleton` fills a high-utility gap that pairs

naturally with the library's animation-first philosophy.



The shimmer uses a moving `linear-gradient` positioned with `left`

inside an `::after` pseudo-element, so it works on any shape without

extra markup. Includes shape variants (text, avatar, image, card),

speed variants, a light theme, and `prefers-reduced-motion` support

(falls back to a static gray block).



Perfect for:

\- 📰 Feed and list loading states

\- 👤 Profile and avatar placeholders

\- 🖼️ Image gallery loading

\- 💳 Card-based dashboards and content grids

