# Compass

### What does this do?

It shows a compass with a two tone needle that points to a bearing. The dial has cardinal labels, tick marks around the rim, and a digital heading readout. The needle rotates to the angle set by a `--deg` custom property, with a springy settle animation.

### How is it used?

```html
<div class="compass" style="--deg: 315;">
  <span class="cp-tick" style="--a: 45;"></span>
  <b class="cp-dir n">N</b>
  <span class="cp-needle"></span>
  <span class="cp-read"><b>315&deg;</b><em>NW</em></span>
</div>
```

Set the bearing with `--deg` on the compass. The needle is one element with two triangle halves (a red north tip and a light south tail) that rotates by `rotate(calc(var(--deg) * 1deg))`. Ticks place themselves with per tick `--a` angles.

### Why is it useful?

Maps, navigation, and weather apps show direction with a compass. This builds one entirely with CSS transforms and gradients, driven by a single bearing custom property, with no images or script.
