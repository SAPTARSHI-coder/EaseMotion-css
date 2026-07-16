# Newsletter Subscription

A dark-themed newsletter sign-up card with glowing input focus, loading state, and an animated success checkmark.

## Description

Demonstrates EaseMotion's form interaction patterns. The email input pulses with a purple glow on focus, the submit button transitions through loading and success states, and the checkmark circle draws itself on completion.

## Usage

```html
<link rel="stylesheet" href="../../easemotion.css" />
<link rel="stylesheet" href="style.css" />

<div class="ease-newsletter-card" id="newsletterCard">
  <input type="email" class="ease-newsletter-input" />
  <button class="ease-newsletter-btn" type="submit">Subscribe</button>
  <div class="ease-success-state">
    <div class="ease-success-checkmark">…</div>
  </div>
</div>
```

## Customization

- Change `#7c5bfe` to adjust the focus glow and button color.
- Swap `#4ade80` for a different success accent.
- Adjust `1500ms` in the JavaScript to modify the simulated loading duration.

## Tech Stack

- EaseMotion CSS
- HTML5
- CSS3 (keyframe animations, transitions, box-shadow glow)
- Vanilla JavaScript (demo interactivity)
