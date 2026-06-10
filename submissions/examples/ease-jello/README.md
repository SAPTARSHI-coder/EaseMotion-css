# Ease Jello

`ease-jello` creates a jelly-like wobble with alternating `skewX` and `skewY` values that diminish over time before snapping back to normal.

## Usage

```html
<button class="jello-button ease-jello">Jello wobble</button>
<button class="jello-button ease-jello-hover">Hover jello</button>
```

## Classes

| Class | Behavior |
|---|---|
| `.ease-jello` | Plays the wobble immediately when the class is added. |
| `.ease-jello-hover` | Plays the same wobble on hover or keyboard focus. |

The keyframes use skew transforms instead of horizontal translation, making this distinct from shake animations. It is suited for buttons, badges, chips, and small interactive elements.

