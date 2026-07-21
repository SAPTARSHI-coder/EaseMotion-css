# Animated Invitation Card

A CSS-animated invitation card featuring a 3D flip entrance animation with confetti effects.

## Overview

The invitation card presents a front face with event details and an "Open Invitation" button. On click, the card performs a 3D `rotateY` flip to reveal the full invitation details on the back. Confetti particles burst out simultaneously for a celebratory feel.

## Features

| Feature | Description |
|---|---|
| 3D card flip | Smooth `rotateY` transition with perspective for a paper-like opening effect |
| Content fade-in | Back content fades and slides up after the card opens |
| Confetti burst | Colored particles animate on card open with staggered delays |
| Click to close | Click anywhere outside the button to flip the card closed |
| Custom properties | Fully customizable colors, timing, radius, and shadow |

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ica-duration` | `0.8s` | Duration of the card flip animation |
| `--ica-card-bg` | `linear-gradient(...)` | Card background gradient |
| `--ica-accent-color` | `#f59e0b` | Accent color for decorative elements |
| `--ica-text-color` | `#f8fafc` | Text color on the card |
| `--ica-radius` | `1.25rem` | Card border radius |
| `--ica-shadow` | `0 20px 60px ...` | Card box shadow |

## Usage

```html
<link rel="stylesheet" href="style.css">

<div class="invitation-card" id="invitationCard">
  <div class="card-inner" id="cardInner">
    <div class="card-front">
      <h1>You're Invited</h1>
      <button class="open-btn" id="openBtn">Open Invitation</button>
    </div>
    <div class="card-back">
      <p>Event details...</p>
    </div>
  </div>
</div>

<script>
  document.getElementById("openBtn").addEventListener("click", () => {
    document.getElementById("cardInner").classList.add("opened");
  });
</script>
```

Toggle the `.opened` class on `.card-inner` to trigger the flip animation. The back content fades in automatically after a delay.
