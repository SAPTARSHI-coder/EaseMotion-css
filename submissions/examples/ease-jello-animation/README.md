# ease-jello animation

An elastic squash-and-stretch wobble animation using scale-based keyframes for playful button and card micro-interactions.

## Class reference

| Class | Trigger | Duration | Use Case |
|-------|---------|----------|----------|
| `.ease-jello` | On class add / page load | 0.8s | One-shot entrance emphasis on buttons or cards |
| `.ease-jello-hover` | `:hover` | 0.8s | Interactive hover feedback on clickable elements |
| `.ease-jello-fast` | On class add / page load | 0.4s | Snappier one-shot wobble for compact UI |

## Transform origin

All three classes set `transform-origin: center bottom` automatically, so the wobble anchors from the bottom edge like a gelatin block settling into place.

## Usage

```html
<button type="submit" class="ease-jello">Send message</button>
<button type="button" class="ease-jello-hover">Hover me</button>
```

## Reduced motion

Inside `@media (prefers-reduced-motion: reduce)`, all jello animations are disabled and `transform` is reset. Users who enable Reduce Motion in their OS settings see static elements with no wobble.

## How jello differs from bounce and shake

| Animation | Mechanism | Motion |
|-----------|-----------|--------|
| `.ease-jello` | `scale3d` squash and stretch | Gelatin-like elastic wobble on both axes |
| `.ease-shake` | `translateX` | Horizontal back-and-forth |
| `.ease-bounce` | `translateY` | Vertical up-and-down |

Jello cannot be replicated by combining shake and bounce — it uses independent X/Y scaling for a distinct elastic feel.
