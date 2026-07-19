# Vertical Volume Slider

### What does this do?

It shows a panel of vertical sliders for a mixer or volume board. Each is a native range input turned upright with a custom track, an accent fill up to the value, and a round thumb, plus a label and value below.

### How is it used?

```html
<div class="vslider">
  <input class="vs-input" type="range" min="0" max="100" value="72" style="--val: 72" aria-label="Bass level" />
  <span class="vs-label">Bass</span>
  <span class="vs-value">72</span>
</div>
```

The input uses `writing-mode: vertical-lr` to stand upright. Set `--val` to the same number as `value` so the fill portion of the track matches the thumb position.

### Why is it useful?

Audio mixers and equalizers use upright sliders. This styles a native range input into a vertical slider with a custom track and thumb, using only CSS, so it stays draggable and keyboard operable. The thumb shows a focus ring when tabbed to.
