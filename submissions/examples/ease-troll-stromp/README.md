# Ease Troll Stomp

A playful animation where a troll-like character jumps and slams the ground, creating a shockwave effect.

## Files

```text
demo.html
style.css
README.md
```

## Features

- Click-to-stomp interaction
- Ground impact effect
- Expanding shockwave animation
- Character squash-and-stretch
- Pure HTML, CSS, and JavaScript
- No dependencies

## How It Works

When the troll is clicked:

1. The character jumps upward.
2. It slams back down.
3. The body squashes on impact.
4. A circular shockwave expands outward.

## Trigger

```javascript
troll.classList.add("stomp");
```

## Main Animation

```css
@keyframes trollStomp
```

Creates:

- Jump
- Impact
- Bounce recovery

## Shockwave

```css
@keyframes shockwave
```

Creates a ripple expanding from the stomp point.

## Use Cases

- Game UIs
- Character animations
- Interactive landing pages
- Fun micro-interactions
- Mascot animations

## Run

Open:

```text
demo.html
```

and click the troll or the STOMP button.