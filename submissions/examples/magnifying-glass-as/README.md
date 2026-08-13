# Magnifying Glass

### What does this do?

It shows a magnifying glass hovering over a paragraph, its round lens enlarging the words beneath it while a highlighted keyword stands out. The lens has a glass shine and a wooden handle, and it drifts slowly over the text. Under reduced motion it stays put.

### How is it used?

```html
<div class="reader">
  <p class="doc">... the small <span class="target">clues</span> ...</p>
  <div class="magnifier">
    <div class="lens"><span class="zoom">the small <b>clues</b>, and the</span><span class="shine"></span></div>
    <span class="handle"></span>
  </div>
</div>
```

The lens is a round, clipped circle showing the same phrase at a larger size, giving the magnified look, with a radial `shine` for glass and a rotated `handle`. A slow `mg-hover` animation drifts the whole magnifier.

### Why is it useful?

Search, detail, and inspection features use a magnifier. This builds a magnifying glass over text with pure CSS, no images, with a reduced motion fallback.
