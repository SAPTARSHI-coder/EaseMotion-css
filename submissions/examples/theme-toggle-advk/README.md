# Theme Toggle

## What does this do?

A dark-mode switch where a sun morphs into a crescent moon, with the rays fading
and rotating away as it happens.

## How is it used?

```html
<label class="tgl">
  <input class="tgl-in" type="checkbox" role="switch" />
  <span class="tgl-body">
    <span class="tgl-orb"><span class="tgl-carve"></span></span>
    <span class="tgl-rays" aria-hidden="true"></span>
  </span>
  <span class="tgl-text">Dark mode</span>
</label>
```

## Why is it useful?

Theme toggles are usually two icons crossfading, which reads as a swap rather
than a change — the user sees one thing disappear and another appear. Carving the
crescent with a moving occluder keeps a single object on screen the whole time,
so the sun visibly *becomes* the moon.

The technique is worth documenting because the crescent is genuinely hard to
animate otherwise: a moon glyph has no in-between state with a sun. An overlapping
circle that shares the background colour produces every intermediate shape for
free, and moving it is a single `left` transition.

The control is a real checkbox with `role="switch"`, so the on/off state is
exposed to assistive technology and the whole thing is keyboard-operable without
a key handler.

Under `forced-colors` the carve and rays are hidden entirely and the orb becomes
a solid `CanvasText` disc — the occluder trick depends on matching the background
exactly, which is impossible once the system substitutes its own colours, and a
half-carved shape would read as a rendering fault.
