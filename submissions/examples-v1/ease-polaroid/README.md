\## ease-polaroid



\*\*What does this do?\*\*

A one-shot entrance animation that makes elements drop from above and settle 

with a natural tilt — mimicking a polaroid photo being tossed onto a table. 

Includes a realistic multi-step bounce on landing.



\*\*How is it used?\*\*

Add the class `polaroid` to any element:



```html

<div class="polaroid">🌊</div>

<div class="polaroid polaroid-left">Left tilt</div>

<div class="polaroid polaroid-right">Right tilt</div>

<div class="polaroid polaroid-straight">No tilt</div>

```



Stagger multiple elements with delay variants:



```html

<div class="polaroid polaroid-left polaroid-delay-1">First</div>

<div class="polaroid polaroid-left polaroid-delay-2">Second</div>

<div class="polaroid polaroid-left polaroid-delay-3">Third</div>

```



Customize with CSS variables:



```css

.my-element {

&#x20; --polaroid-angle: -8deg;       /\* tilt angle \*/

&#x20; --polaroid-duration: 0.9s;     /\* animation speed \*/

&#x20; --polaroid-shadow: rgba(0,0,0,0.5);  /\* shadow depth \*/

}

```



To replay on demand:



```js

function replay(el) {

&#x20; el.classList.remove('polaroid');

&#x20; void el.offsetWidth;

&#x20; el.classList.add('polaroid');

}

```



\*\*Why is it useful?\*\*

Unlike basic fade-in or slide-in, `ease-polaroid` feels physical and 

organic — the element drops, bounces, and settles with natural weight. 

Introduces a new category of entrance animations to EaseMotion CSS: 

physics-based, tactile motion. Supports `prefers-reduced-motion` for 

accessibility and includes 3 tilt variants plus stagger delays.



Perfect for:

\- 📸 Photo galleries and memory walls

\- 👤 Profile and team member cards

\- 🏆 Achievement and badge reveals

\- 🎨 Portfolio project showcases

\- 💌 Testimonial and review cards

