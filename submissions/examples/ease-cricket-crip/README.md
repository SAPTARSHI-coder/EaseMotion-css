# Ease Cricket Chirp

A fun nature-inspired animation where a cricket chirps by rapidly moving its wings and emitting expanding sound waves.

## Files

```text
demo.html
style.css
README.md
```

## Features

- Interactive chirp animation
- Wing vibration effect
- Expanding sound-wave rings
- Click-to-trigger interaction
- Lightweight implementation
- Pure HTML, CSS, and JavaScript

## How It Works

The cricket consists of:

- Body
- Wings
- Antennae
- Legs
- Sound-wave circles

When activated:

1. Wings vibrate rapidly.
2. Sound waves expand outward.
3. The effect fades naturally.

## Trigger

```javascript
cricket.classList.add("chirping");
```

## Animations

### Wing Motion

```css
@keyframes wingMove
```

Simulates rapid chirping wing movement.

### Sound Waves

```css
@keyframes chirpWave
```

Creates expanding circular waves representing sound.

## Customization

### Wave Color

```css
border:3px solid #38bdf8;
```

### Wave Size

```css
scale(7);
```

Increase for larger chirp radius.

### Chirp Speed

```css
animation:.15s linear 6;
```

Adjust for faster or slower chirping.

## Use Cases

- Nature-themed websites
- Educational apps
- Game environments
- Interactive mascots
- Animation showcases

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

Click the cricket or press the CHIRP button to trigger the animation.