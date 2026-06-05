# Ease Roll In

`ease-roll-in` brings an element in from the left while rotating into place. It is useful for badges, illustrations, avatars, notification chips, and playful feature cards. The submission also includes `ease-roll-in-right` and `ease-roll-out`.

## Usage

```html
<div class="rolling-card ease-roll-in">Rolls in from the left</div>
<div class="rolling-card ease-roll-in-right">Rolls in from the right</div>
<div class="rolling-card ease-roll-out">Rolls out to the right</div>
```

## Motion Details

| Class                 | Behavior                                                         |
| --------------------- | ---------------------------------------------------------------- |
| `.ease-roll-in`       | Starts at `translateX(-100%) rotate(-120deg)` and eases to rest. |
| `.ease-roll-in-right` | Starts at `translateX(100%) rotate(120deg)` and eases to rest.   |
| `.ease-roll-out`      | Exits toward `translateX(100%) rotate(120deg)` while fading out. |

The rotation is tuned to feel linked with the travel distance, and the easing uses a soft ease-out curve. Reduced-motion users get a near-instant fade.
