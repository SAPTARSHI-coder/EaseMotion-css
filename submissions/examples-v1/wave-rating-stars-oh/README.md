# Component: Wave Rating Stars

This submission implements the Wave Rating Stars for GSSoC issue **#41999**.

## Description

Animated rating stars with wave effects and neumorphism design.

## Features

- **Wave Animation**: Staggered wave motion on stars
- **Neumorphism Design**: Soft shadows and inset effects
- **Interactive Rating**: Click to rate with feedback
- **Multiple Variants**: Mini cards, pulse, and wave effects
- **Rating Display**: Show numeric rating and review count
- **Accessible**: Keyboard navigable star buttons

## Usage

```html
<div class="rating-card neumorphic">
  <div class="stars-container wave-stars">
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star">★</span>
    <span class="star">★</span>
  </div>
  <span class="rating-value">4.5</span>
</div>
```

## Interactive Rating

```html
<div class="stars-container interactive-stars">
  <button class="star-btn" data-value="1" onclick="setRating(1)">★</button>
  <button class="star-btn" data-value="2" onclick="setRating(2)">★</button>
  <button class="star-btn" data-value="3" onclick="setRating(3)">★</button>
  <button class="star-btn" data-value="4" onclick="setRating(4)">★</button>
  <button class="star-btn" data-value="5" onclick="setRating(5)">★</button>
</div>
```

## Animations

| Animation | Element | Effect |
|-----------|---------|--------|
| `waveStar` | Wave stars | Bounce up/down in sequence |
| `starGlow` | Filled stars | Scale in on load |
| `pulseStar` | Pulse variant | Continuous pulse |

## Wave Animation Keyframes

```css
@keyframes waveStar {
  0%, 100% {
    transform: translateY(0) scale(1);
    color: var(--color-warning);
  }
  50% {
    transform: translateY(-8px) scale(1.1);
    color: #ffd700;
  }
}
```

## Neumorphism Shadows

```css
/* Raised */
box-shadow: 
  20px 20px 60px var(--shadow-dark),
  -20px -20px 60px var(--shadow-light);

/* Inset */
box-shadow: 
  inset 4px 4px 8px var(--shadow-dark),
  inset -4px -4px 8px var(--shadow-light);
```

## JavaScript

```javascript
function setRating(value) {
  stars.forEach((star, index) => {
    if (index < value) {
      star.classList.add('active');
      star.style.animation = `waveStar 0.4s ease ${index * 0.1}s forwards`;
    }
  });
}
```

## Acceptance Criteria

- ✅ Wave animation on stars
- ✅ Neumorphism design
- ✅ Interactive rating
- ✅ Multiple variants
- ✅ Rating display with count
- ✅ README.md included
