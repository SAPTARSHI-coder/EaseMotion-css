# Solar System

### What does this do?

It shows a solar system: a glowing sun at the center with four planets orbiting on their own rings at different speeds, the outer planet carrying a small moon. Under reduced motion the planets hold their positions.

### How is it used?

```html
<span class="orbit o2"><span class="planet p2"></span></span>
<span class="sun"></span>
```

Each `orbit` is a centered circle that spins with `orbit-spin`, and its `planet` sits on the ring at the left edge, so rotating the orbit carries the planet all the way around. Inner orbits use shorter durations, giving faster inner planets.

### Why is it useful?

Science themes, loaders, and hero graphics use an orbiting solar system. This builds one with pure CSS rotation, sized orbit rings, and gradient planets, no images or script, with a reduced motion fallback.
