# Flip Card 3D

**Category:** Animation · 3D Transform  
**Contributor submission for:** [EaseMotion CSS](https://github.com/Kalrix/EaseMotion) — GSSoC  

---

## Overview

A smooth, perspective-driven 3D flip card that rotates 180° on hover and reveals a back face with additional content. Built entirely in pure CSS — no JavaScript needed.

The effect uses CSS 3D transforms (`perspective`, `transform-style: preserve-3d`, `rotateY`) and is structured so any developer can drop it into a project, restyle it with CSS variables, and ship it immediately.

---

## Features

- ✅ Pure CSS — zero JavaScript
- ✅ Smooth 180° Y-axis flip with premium easing
- ✅ `backface-visibility: hidden` so faces never bleed through
- ✅ Keyboard accessible — flip triggers on `:focus` too
- ✅ Three accent color themes (teal, amber, indigo) via CSS variables
- ✅ Responsive — adapts card size on small screens
- ✅ Dark-theme showcase page included
- ✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)
- ✅ Lightweight — ~5 KB total (HTML + CSS), no external dependencies

---

## File Structure

```
submissions/examples/flip-card-3d/
├── demo.html   ← Showcase page with three live flip cards
├── style.css   ← All styles including the core flip mechanism
└── README.md   ← This file
```

---

## Usage

### 1. Copy the HTML structure

```html
<div class="flip-card" tabindex="0">
  <div class="flip-card__inner">

    <div class="flip-card__front">
      <!-- Front content -->
    </div>

    <div class="flip-card__back">
      <!-- Back content -->
    </div>

  </div>
</div>
```

### 2. Link the stylesheet

```html
<link rel="stylesheet" href="style.css" />
```

### 3. Done — hover the card to flip it.

---

## How It Works

The core mechanism relies on three CSS properties working together:

```css
/* 1. Perspective on the container creates the 3D depth field */
.flip-card {
  perspective: 1200px;
}

/* 2. The inner wrapper rotates in 3D space */
.flip-card__inner {
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
}

/* 3. Flip triggers on hover (and :focus for keyboard users) */
.flip-card:hover .flip-card__inner,
.flip-card:focus .flip-card__inner {
  transform: rotateY(180deg);
}

/* 4. Each face hides its reverse side */
.flip-card__front,
.flip-card__back {
  backface-visibility: hidden;
}

/* 5. Back face starts pre-rotated so it's hidden by default */
.flip-card__back {
  transform: rotateY(180deg);
}
```

---

## Customization

All key values are controlled via CSS custom properties at the top of `style.css`:

| Variable | Default | Purpose |
|---|---|---|
| `--card-w` | `300px` | Card width |
| `--card-h` | `380px` | Card height |
| `--card-radius` | `20px` | Corner rounding |
| `--flip-duration` | `0.65s` | Animation speed |
| `--flip-ease` | `cubic-bezier(0.4,0.2,0.2,1)` | Easing curve |
| `--teal` / `--amber` / `--indigo` | see file | Accent colors |

### Flip on click instead of hover

Wrap the flip trigger in a checked checkbox or a `:target` selector for a click-based flip:

```css
/* Click-to-flip using checkbox hack */
.flip-trigger:checked ~ .flip-card .flip-card__inner {
  transform: rotateY(180deg);
}
```

### Change flip axis (X instead of Y)

```css
.flip-card:hover .flip-card__inner {
  transform: rotateX(180deg);
}

.flip-card__back {
  transform: rotateX(180deg);
}
```

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome / Edge 79+ | ✅ Full |
| Firefox 72+ | ✅ Full |
| Safari 14+ | ✅ Full |
| iOS Safari 14+ | ✅ Full |
| Opera 66+ | ✅ Full |

> `perspective`, `transform-style: preserve-3d`, and `backface-visibility` have broad support in all modern browsers. No prefixes are required for current targets, though `-webkit-backface-visibility` is included for older Safari compatibility.

---

## Why This Effect Is Useful

Flip cards are a versatile UI pattern that appear across:

- **Portfolio sites** — show name/role on front, skills or contact on back
- **Product cards** — price or image on front, specs or CTA on back
- **Educational tools** — flashcard-style knowledge recall
- **Dashboard tiles** — summary stat on front, breakdown chart on back
- **Onboarding flows** — teaser on front, expanded detail on back

The 3D flip earns attention without being distracting. It rewards curiosity and communicates that there is *more* to discover — making it more engaging than a plain expand/collapse.

---

## Preview Description

The demo page renders three flip cards on a deep charcoal background:

1. **Profile card (teal)** — Shows a designer's avatar, name, and role on the front. Flips to reveal a short bio, three career stats, and a portfolio link button.
2. **Project card (amber)** — Front shows the EaseMotion project icon and tagline. Back reveals key library metrics (size, number of effects, zero-dependency status) and a GitHub link.
3. **Pricing card (indigo)** — Front displays a plan name and monthly price. Back lists four feature bullets and a "Get Started" CTA.

Each card uses a distinct accent color, matching top-strip gradient, and a themed back panel — demonstrating how the component adapts to different content types while staying cohesive.

---

## Contribution Notes

- Code is organized in clearly labeled sections with concise comments.
- CSS custom properties are declared at `:root` so the component is easy to theme.
- No utility classes from a framework are used — this submission is self-contained.
- The `tabindex="0"` and `:focus` selector ensure the effect works for keyboard-only users.

---

*Submitted as part of GSSoC contribution to EaseMotion CSS.*