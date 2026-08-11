# CSS 3D preserve-3d Parallax

Idle ambient parallax using `transform-style: preserve-3d` and `perspective`. No JS, no scroll, no mouse events required.

## Classes

| Class | Role |
|---|---|
| `ease-parallax-viewport` | Sets `perspective: 700px` |
| `ease-parallax-scene` | `transform-style: preserve-3d`, animated with `idle-rock` tilt |
| `ease-parallax-layer` | Each layer at a different `translateZ()` depth |
| `layer-bg` | Far layer: `translateZ(-80px) scale(1.18)` |
| `layer-mid` | Content at `translateZ(0)` |
| `layer-fg` | Near layer: `translateZ(50px) scale(0.9)` |

## Usage

```html
<div class="ease-parallax-viewport">
  <div class="ease-parallax-scene">
    <div class="ease-parallax-layer layer-bg"></div>
    <div class="ease-parallax-layer layer-mid"><h2>Content</h2></div>
    <div class="ease-parallax-layer layer-fg"></div>
  </div>
</div>
```

## How it works

Tilting the parent scene container with `rotateX/rotateY` creates depth-differential movement between layers — far layers appear to move less than near layers due to perspective foreshortening. The `scale()` compensation on the bg layer (`scale(1.18)`) prevents gaps at the edges during tilt.

Closes #9610
