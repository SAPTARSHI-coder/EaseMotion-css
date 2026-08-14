# Ease Orchid Bloom

A graceful flower bloom animation inspired by an orchid opening its petals in sequence.

## Files

```text
demo.html
style.css
README.md
```

## Features

- Sequential petal bloom
- Soft scaling animation
- Delayed blossom effect
- Interactive click trigger
- Elegant floral motion
- Pure HTML, CSS, and JavaScript

## How It Works

The orchid consists of:

- Stem
- Five petals
- Flower center

Each petal animates with a slight delay:

```css
animation:bloomPetal .8s ease forwards;
```

Creating a natural blooming sequence.

## Animation Flow

1. Top petal blooms
2. Side petals unfold
3. Lower petals open
4. Flower center appears

## Trigger

```javascript
orchid.classList.add("bloom");
```

The animation can be restarted at any time.

## Keyframes

### Petal Bloom

```css
@keyframes bloomPetal
```

Provides:

- Scale growth
- Fade in
- Gentle overshoot

### Center Bloom

```css
@keyframes centerBloom
```

Creates the final blossom reveal.

## Use Cases

- Nature-themed websites
- Hero animations
- Decorative UI effects
- Interactive storytelling
- Portfolio showcases

## Browser Support

- Chrome
- Firefox
- Safari
- Edge

## Run

Open:

```text
demo.html
```

Click the orchid or the BLOOM button to watch the flower bloom.