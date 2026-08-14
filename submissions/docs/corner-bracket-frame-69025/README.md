# Corner Bracket Frame Reveal Card

## Issue

Closes #69025

## Description

This submission adds a pure-CSS hover interaction that reveals four animated corner brackets around a card.

When the card is hovered, the corner brackets fade in and move outward toward the card boundaries, creating a clean futuristic frame-reveal effect.

## Features

* Four animated corner brackets
* Fade and scale-out reveal effect
* Smooth hover transition
* Works with cards and other container elements
* No JavaScript required
* Includes reduced-motion handling

## Usage

Add the card structure to your HTML:

```html
<article class="corner-frame-card">
  <span class="corner corner-top-left"></span>
  <span class="corner corner-top-right"></span>
  <span class="corner corner-bottom-left"></span>
  <span class="corner corner-bottom-right"></span>

  <div class="card-content">
    <h2>Secure Server</h2>
    <p>Hover to reveal the target framing brackets.</p>
  </div>
</article>
```

Then include the accompanying `style.css`.

## Expected Behavior

* Before hover: the corner brackets remain hidden.
* On hover: all four brackets fade in and move into position.
* When the pointer leaves: the brackets return to their initial state.
* When reduced motion is preferred: animated transitions are disabled.

## Demo

Open `demo.html` directly in a browser to view the interaction.

## Why It Fits EaseMotion CSS

The effect is lightweight, reusable, and implemented entirely with CSS transitions and transforms. It provides a composable motion effect suitable for cards, buttons, dashboards, and other interactive UI elements.

## Scope

This contribution adds the example under `submissions/` only. It does not modify `core/` or `components/`.
