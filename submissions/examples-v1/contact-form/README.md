# Contact Form

A dark-themed contact form with floating labels, real-time valid/invalid field indicators, loading animation on submit, and a success overlay with animated checkmark.

## Description

Illustrates EaseMotion's form validation and interaction animations. Each field shows a green or red dot indicator on blur. The submit button transitions through a spinner state, and a full-overlay success message appears with a stroke-dash checkmark animation.

## Usage

```html
<link rel="stylesheet" href="../../easemotion.css" />
<link rel="stylesheet" href="style.css" />

<div class="ease-contact-form">
  <div class="ease-field-group">
    <input id="name" class="ease-floating-input" required />
    <label for="name" class="ease-floating-label">Name</label>
    <span class="ease-field-indicator"></span>
  </div>
  <button type="submit" class="ease-submit-btn">Send Message</button>
</div>
```

## Customization

- Replace `#7c5bfe` to change the field focus and button color.
- Replace `#4ade80` / `#f87171` for valid/invalid indicator colors.
- Adjust `1600ms` in the JavaScript to change the simulated send duration.

## Tech Stack

- EaseMotion CSS
- HTML5
- CSS3 (transitions, keyframe animations, box-shadow glow)
- Vanilla JavaScript (validation toggling, demo interactivity)
