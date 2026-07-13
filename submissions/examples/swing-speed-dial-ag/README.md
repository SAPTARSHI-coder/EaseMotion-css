# Swing Speed Dial (Social Media)

A clean, pure CSS Speed Dial (Floating Action Button) with a playful swing animation designed for social media sharing actions.

## Features
- purely CSS driven state using the hidden checkbox hack
- playful spring/swing entry animation via `@keyframes swingIn`
- dynamic staggered delays using CSS custom properties (`--i`)
- smooth icon rotation on toggle
- fully responsive & accessible (reduced-motion fallbacks)

## Usage

```html
<div class="swing-speed-dial">
  <input type="checkbox" id="dial-toggle" class="dial-toggle-input">
  
  <div class="dial-menu">
    <a href="#" class="dial-item ease-swing-in" style="--i: 1;">Fb</a>
  </div>
  
  <label for="dial-toggle" class="dial-fab">
    <span class="fab-icon ease-swing-icon">+</span>
  </label>
</div>
```
