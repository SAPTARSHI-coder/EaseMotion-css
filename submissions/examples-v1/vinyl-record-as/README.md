# Vinyl Record

### What does this do?

It shows a turntable with a spinning vinyl record. The record has concentric grooves, a colored center label with the track name and speed, a metal spindle, and a light sheen. A tonearm rests over the platter from its pivot in the corner.

### How is it used?

```html
<div class="turntable">
  <div class="platter"><div class="record"><div class="label">...</div></div></div>
  <div class="tonearm"><span class="pivot"></span><span class="arm"></span></div>
</div>
```

The record grooves come from a `repeating-radial-gradient`, and the record spins with a `spin` keyframe. The tonearm is built from a pivot, a rotated arm, and a head, positioned over the record. Reduced motion stops the spin.

### Why is it useful?

Music players, DJ apps, and retro themes use a record player motif. This builds a spinning turntable with grooves and a tonearm using only CSS, no images, with a reduced motion fallback.
