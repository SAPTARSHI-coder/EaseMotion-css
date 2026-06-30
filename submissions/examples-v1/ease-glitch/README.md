\## ease-glitch

\*\*What does this do?\*\*

A digital glitch distortion effect that splits RGB color channels using

CSS pseudo-elements and `clip-path`, adds rapid position offset flicker,

and simulates hue rotation — mimicking a corrupted screen or VHS tape glitch.

\*\*How is it used?\*\*

Add the class `glitch` and a `data-text` attribute matching the text content:

```html
<h1 class="glitch" data-text="SYSTEM ERROR">SYSTEM ERROR</h1>

<div class="glitch" data-text="404">404</div>
```

Hover-only variant (glitches once on hover):

```html
<button class="glitch glitch-hover" data-text="EXECUTE">EXECUTE</button>
```

Intensity variants:

```html
<div class="glitch glitch-subtle" data-text="subtle">subtle</div>

<div class="glitch glitch-wild" data-text="WILD">WILD</div>
```

Color theme variants:

```html
<div class="glitch glitch-red" data-text="ERROR">ERROR</div>

<div class="glitch glitch-blue" data-text="SYSTEM">SYSTEM</div>

<div class="glitch glitch-green" data-text="HACK">HACK</div>
```

Customize with CSS variables:

```css

.my-element {

&#x20; --glitch-intensity: 8px;

&#x20; --glitch-duration: 0.4s;

&#x20; --glitch-color-1: #ff0055;

&#x20; --glitch-color-2: #00ffcc;

}

```

\*\*Why is it useful?\*\*

Unlike simple shake or flicker animations, `ease-glitch` uses CSS

`clip-path` to slice the element into horizontal bands and offset

each band independently — creating a authentic RGB channel split

effect. The `::before` and `::after` pseudo-elements use

`attr(data-text)` to duplicate the content without extra HTML.

Includes continuous loop and hover-only variants, 3 intensity levels,

3 color themes, and `prefers-reduced-motion` support.

Perfect for:

\- 💀 404 and error pages

\- 🖥️ Terminal and hacker themed UIs

\- 🎮 Game over and system failure screens

\- 🌐 Cyberpunk and sci-fi portfolios

\- ⚡ Attention-grabbing CTAs and headlines
