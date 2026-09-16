\## ease-jelly



\*\*What does this do?\*\*

A playful, wobbly jelly squish animation triggered on hover — the element squishes and stretches with elastic deformation, a subtle rotation, and a color glow that pulses on interaction.



\*\*How is it used?\*\*

Add the class `jelly` to any element:



```html

<button class="jelly">Click Me</button>

<div class="jelly">🔔</div>

<img class="jelly" src="avatar.png" />

```



Add a color variant for matching glow:



```html

<button class="jelly jelly-purple">✨ Get Started</button>

<button class="jelly jelly-pink">💖 Subscribe</button>

<button class="jelly jelly-green">🚀 Launch</button>

<button class="jelly jelly-orange">🔥 Try Free</button>

```



Control intensity:



```html

<button class="jelly jelly-soft">Soft Jelly</button>

<button class="jelly jelly-wild">Wild Jelly</button>

```



Customize with CSS variables:



```css

.my-element {

&#x20; --jelly-duration: 0.7s;

&#x20; --jelly-intensity: 1.2;

&#x20; --jelly-glow: rgba(124, 110, 247, 0.7);

&#x20; --jelly-shadow-color: rgba(124, 110, 247, 0.3);

}

```



\*\*Why is it useful?\*\*

Unlike a basic scale hover, `ease-jelly` uses alternating `scaleX` and `scaleY` with subtle rotation at each keyframe — simulating real elastic deformation with decreasing amplitude. The glow and brightness boost on hover makes elements feel alive and tactile. Introduces a brand new category to EaseMotion CSS — elastic hover interactions. Supports `prefers-reduced-motion` for accessibility.



Perfect for:

\- ✨ CTA buttons on landing pages

\- 🔔 Notification icons and badges

\- 👤 Profile cards and avatars

\- 🎯 Interactive UI elements that need personality

