# Text Scramble Reveal

## What does this do?

Resolves a word out of scrambled glyphs, one character column at a time, using
only CSS.

## How is it used?

```html
<span class="tsc-word">
  <span class="tsc-ch" style="--i:0" data-n="E">E</span>
  <span class="tsc-ch" style="--i:1" data-n="A">A</span>
</span>
```

`data-n` carries the resolved glyph; `--i` sets its position in the decode order.

## Why is it useful?

The JavaScript version of this effect rewrites `textContent` many times per
second per character. That thrashes the DOM, and — more importantly — it means
assistive technology and search crawlers may read whatever garbage happens to be
in the node at the moment they look. The heading is literally not the heading for
the duration of the animation.

Here the decoys live in a pseudo-element, which is decorative and not part of the
accessibility tree, while the real character stays in the element's own text
content the entire time. A screen reader reads "EASEMOTION" from the first frame.

The mechanism is a clipped column: `content` builds a stack of junk glyphs
separated by `\A` newlines with the real glyph last, and `steps(6, end)` walks the
column up so each frame lands on exactly one glyph rather than sliding between
two. Per-character `animation-delay` derived from `--i` produces the left-to-right
decode without any per-character rules.
