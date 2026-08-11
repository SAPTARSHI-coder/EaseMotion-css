# Atom

### What does this do?

It shows an atom with a glowing nucleus and three electrons that orbit along elliptical paths tilted at different angles. Each electron follows its own ellipse at its own speed and color, over faint orbit rings. Under reduced motion the electrons hold still.

### How is it used?

```html
<span class="ring o2"></span>
<span class="orbit o2"><span class="electron"></span></span>
<span class="nucleus"></span>
```

Each orbit ring is a rotated ellipse, and its electron follows the same ellipse using CSS motion paths: `offset-path` traces the ellipse and `offset-distance` animates from 0 to 100 percent. Rotating the orbit and ring together tilts each path.

### Why is it useful?

Science themes, loaders, and hero graphics use an orbiting atom. This builds one with CSS motion paths so electrons truly follow elliptical orbits, with no images or script and a reduced motion fallback.
