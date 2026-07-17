# Component: Interactive Animation Playground

This submission implements the Interactive Animation Playground for issue **#47379**.

## Description

Interactive playground to test and showcase different CSS animations.

## Features

- **Interactive Controls**: Click buttons to trigger animations
- **6 Animation Types**: Bounce, pulse, shake, spin, flip, swing
- **Preset Animations**: Continuous animated preview cards
- **Reset Animation**: Returns to original state after animation
- **Reusable Keyframes**: Can be extracted for other use

## Usage

```html
<div class="animation-box" id="animBox">
  <span>A</span>
</div>
<button onclick="playAnim('bounce')">Bounce</button>
```

## JavaScript

```javascript
function playAnim(type) {
  animBox.className = 'animation-box ' + type;
  setTimeout(() => {
    animBox.className = 'animation-box';
  }, 1000);
}
```

## Animations

| Animation | Effect |
|-----------|--------|
| Bounce | Vertical bounce |
| Pulse | Scale up/down |
| Shake | Horizontal shake |
| Spin | 360 rotation |
| Flip | Y-axis flip |
| Swing | Pendulum swing |

## Keyframes

```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-50px); }
}
```

## Acceptance Criteria

- ✅ Interactive animation controls
- ✅ 6 animation types
- ✅ Continuous preset animations
- ✅ Reusable keyframes
- ✅ README.md included
