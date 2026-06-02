\## ease-wiggle



\*\*What does this do?\*\*

A fast, playful one-shot wiggle animation that fires once and stops —

designed to grab attention without feeling like an error or alert.



\*\*How is it used?\*\*

Add the class `ease-wiggle` to any element:



```html

<div class="ease-wiggle">🔔</div>

<button class="ease-wiggle">Try for Free</button>

```



To replay on demand (e.g. on click), remove and re-add the class:



```js

function wiggle(el) {

&#x20; el.classList.remove('ease-wiggle');

&#x20; void el.offsetWidth; // force reflow

&#x20; el.classList.add('ease-wiggle');

}

```



\*\*Why is it useful?\*\*

Unlike `ease-shake` which signals errors, `ease-wiggle` conveys

delight and playfulness. Perfect for:

\- 🔔 Notification bells with unread badges

\- ✨ Call-to-action buttons on landing pages

\- 📭 Empty state illustrations to prompt user action



The animation uses `transform-origin: top center` so it swings

naturally like a hanging object — more realistic than a flat shake.

