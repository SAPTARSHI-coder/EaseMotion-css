# Segmented Control

## What does this do?

A segmented picker where the selected pill slides between options and the label
text inverts as the pill passes beneath it.

## How is it used?

```html
<div class="sgc" style="--n: 3">
  <input class="sgc-in" type="radio" name="sgc" id="sg1" checked />
  <label class="sgc-seg" for="sg1">Day</label>
  <!-- more pairs -->
  <span class="sgc-pill" aria-hidden="true"></span>
</div>
```

Set `--n` to the segment count; the pill sizes itself from it.

## Why is it useful?

The hard part of this control is label contrast: the text must be dark on the
track and light on the pill. The usual solution renders every label twice — once
normally, once inside a clipped copy of the pill — which doubles the markup and
means the two copies can drift out of sync.

`mix-blend-mode: difference` does it with one copy. The label inverts
automatically wherever the white pill sits underneath, so contrast is correct in
both states with no duplication and no JavaScript measuring where the pill is.

Building on radio inputs means arrow-key navigation, single-selection semantics
and correct exposure to assistive technology all come from the platform. The
`forced-colors` block switches the blend off and reverts to explicit
`Highlight`/`HighlightText` colours, because blend modes are not applied in High
Contrast mode and the labels would otherwise disappear against the pill.
