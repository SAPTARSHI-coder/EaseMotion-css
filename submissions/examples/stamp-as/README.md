# Postage Stamp

### What does this do?

It shows a postage stamp with the classic perforated edge, a small illustrated scene inside its frame, a country name and denomination, and a tilted circular postmark. The perforations are punched entirely with a CSS mask, so the whole stamp is drawn with no images.

### How is it used?

```html
<div class="stamp">
  <div class="stamp-inner">
    <div class="scene">...</div>
    <div class="stamp-meta"><span class="country">HELVETIA</span><span class="value">85</span></div>
  </div>
</div>
```

The `stamp` uses a tiled `radial-gradient` mask to cut a grid of holes; the inset `stamp-inner` panel covers the interior holes so only the perforated border remains. Inside, CSS shapes build the scene and a `postmark` circle sits on top.

### Why is it useful?

Philately apps, travel themes, and playful UIs use a stamp motif. This delivers a full stamp with a real perforated edge and postmark using only CSS masks and shapes, no images.
