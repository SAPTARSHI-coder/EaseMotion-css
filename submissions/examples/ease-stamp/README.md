\## ease-stamp



\*\*What does this do?\*\*

A one-shot rubber stamp slam animation that makes elements appear as if physically pressed onto the page complete with an ink bleed ring that radiates outward on impact.



\*\*How is it used?\*\*

Add the class `stamp` to any element:



```html

<div class="stamp">APPROVED</div>

<img class="stamp" src="badge.png" />

<span class="stamp">NEW</span>

```



Customize with CSS variables:



```css

.my-element {

&#x20; --stamp-color: #16a34a;      /\* ink color \*/

&#x20; --stamp-duration: 0.5s;      /\* animation speed \*/

&#x20; --stamp-rotation: -8deg;     /\* starting tilt \*/

}

```



Use built-in color variants:



```html

<div class="stamp stamp-green">APPROVED</div>

<div class="stamp stamp-blue">VERIFIED</div>

<div class="stamp stamp-purple">NEW</div>

<div class="stamp stamp-gold">FEATURED</div>

```



To replay on demand:



```js

function replayStamp(el) {

&#x20; el.classList.remove('stamp');

&#x20; void el.offsetWidth;

&#x20; el.classList.add('stamp');

}

```



\*\*Why is it useful?\*\*

Unlike fade-in or slide-in, `ease-stamp` conveys physical impact and authority. The `::after` pseudo-element creates a realistic ink bleed 

ring that radiates and fades on impact a detail no other animation in EaseMotion CSS currently has. Supports `prefers-reduced-motion` for accessibility.



Perfect for:

\- ✅ Approval / rejection labels on documents

\- 🏆 Achievement and certification badges

\- 🔖 Product tags like "NEW", "SALE", "FEATURED"

\- 🎮 Game status effects and score popups

