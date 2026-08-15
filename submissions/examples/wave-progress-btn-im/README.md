# Liquid Wave Progress Button

## What does this do?
A button component for showing a loading/processing state. The button fills from bottom to top with an undulating liquid wave as progress increases, controlled entirely by a single `--wave-progress` CSS variable (0%–100%). Two rotating oversized layers create the liquid wave illusion.

## How to use it
```html
<button class="ease-btn-wave-progress" style="--wave-progress: 45%;">
  <div class="ease-btn-wave-liquid"></div>
  <span class="ease-btn-wave-text">Uploading (45%)</span>
</button>

<!-- Color variants -->
<button class="ease-btn-wave-progress ease-btn-wave--green" style="--wave-progress: 60%;">
  <div class="ease-btn-wave-liquid"></div>
  <span class="ease-btn-wave-text">Downloading (60%)</span>
</button>

<!-- Complete state -->
<button class="ease-btn-wave-progress ease-btn-wave-progress--complete" style="--wave-progress: 100%;">
  <div class="ease-btn-wave-liquid"></div>
  <span class="ease-btn-wave-text">✓ Complete</span>
</button>
```

## Updating progress dynamically
```js
btn.style.setProperty('--wave-progress', `${percent}%`);
btn.querySelector('.ease-btn-wave-text').textContent = `Uploading (${percent}%)`;
```

## Variants
- `.ease-btn-wave-progress` — base, primary color
- `.ease-btn-wave--green/pink/amber` — color variants via `--wave-color`
- `.ease-btn-wave-progress--complete` — green border + faster wave on completion

## How it works
`.ease-btn-wave-liquid` is an oversized (220% width) shape positioned at the bottom of the button, with its `height` driven by `--wave-progress`. A continuous rotation animation on this oversized shape (plus a second counter-rotating layer via `::before`) produces the illusion of an undulating liquid surface, since `overflow: hidden` on the button clips the rotating edges into a wave-like curve. `mix-blend-mode: difference` keeps the text readable against the moving liquid.

## Why it fits EaseMotion CSS
Standard loading spinners are functional but boring. A fluid wave button provides a delightful micro-interaction that matches the premium, modern aesthetic of EaseMotion CSS. `prefers-reduced-motion` disables the rotation entirely, falling back to a static rectangular fill that still communicates progress.
