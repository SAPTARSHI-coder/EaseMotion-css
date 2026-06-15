\## ease-pendulum



\*\*What does this do?\*\*

A continuous looping pendulum swing animation that makes elements sway 

left and right from their top anchor point — with natural deceleration 

at the extremes and acceleration through the center, mimicking real 

pendulum physics.



\*\*How is it used?\*\*

Add the class `pendulum` to any element:



```html

<div class="pendulum">⏰</div>

<div class="pendulum pendulum-slow">🔔</div>

<div class="pendulum pendulum-fast pendulum-narrow">⚡</div>

```



Use angle variants:



```html

<div class="pendulum pendulum-narrow">Subtle swing</div>

<div class="pendulum pendulum-wide">Wide swing</div>

```



Use speed variants:



```html

<div class="pendulum pendulum-fast">Fast swing</div>

<div class="pendulum pendulum-slow">Slow swing</div>

```



Add color glow:



```html

<div class="pendulum pendulum-purple">🔔</div>

<div class="pendulum pendulum-pink">🔔</div>

<div class="pendulum pendulum-green">🔔</div>

<div class="pendulum pendulum-gold">🔔</div>

```



Pause on hover:



```html

<div class="pendulum pendulum-pause">⏱️</div>

```



Customize with CSS variables:



```css

.my-element {

&#x20; --pendulum-angle: 30deg;

&#x20; --pendulum-duration: 3s;

&#x20; --pendulum-glow: rgba(236, 72, 153, 0.5);

}

```



\*\*Why is it useful?\*\*

Unlike one-shot animations, `ease-pendulum` loops infinitely with natural 

physics-based timing — decelerating at extremes and accelerating through 

center using `cubic-bezier(0.45, 0.05, 0.55, 0.95)`. The 

`transform-origin: top center` makes it feel physically anchored. Includes 

`drop-shadow` that shifts with the swing for depth. Supports 

`prefers-reduced-motion` for accessibility.



Perfect for:

\- ⏰ Clock and timer decorations

\- 🔔 Notification bell icons

\- ⏳ Loading and waiting states

\- 🎪 Decorative hanging elements

\- 🧸 Playful UI accents

