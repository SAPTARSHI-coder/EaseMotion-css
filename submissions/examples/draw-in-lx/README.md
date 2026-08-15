# Magic Particle Button

A magical CSS-only button interaction where glowing particles are summoned around the button when clicked.

## Features

* ✨ Glowing particles expand outward from the button
* 🪄 Particles collapse back into the button when clicked again
* 💫 Subtle button pulse and glow effect
* 🎨 Fully customizable colors, particle positions, and timing
* 🚫 No JavaScript required

## How does a developer use it?

Include the HTML structure and link the provided `style.css` file in your project.

```html
<link rel="stylesheet" href="style.css">
```

Then add the magic button markup:

```html
<div class="magic-scene">
  <input type="checkbox" id="magic-toggle">

  <label for="magic-toggle" class="magic-button">
    <span>✨ Cast Spell</span>
  </label>

  <span class="particle particle-1">✦</span>
  <span class="particle particle-2">✧</span>
  <span class="particle particle-3">✦</span>
  <span class="particle particle-4">✧</span>
  <span class="particle particle-5">·</span>
  <span class="particle particle-6">✦</span>
  <span class="particle particle-7">✧</span>
  <span class="particle particle-8">·</span>
</div>
```

The interaction is controlled using a hidden checkbox, allowing the particles to expand and collapse without JavaScript.

## Customization

Developers can customize:

* Button colors and gradients
* Particle symbols and positions
* Animation duration and easing
* Glow intensity
* Button text
