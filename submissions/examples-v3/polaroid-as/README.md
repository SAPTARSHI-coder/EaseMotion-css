# Polaroid

### What does this do?

It shows a polaroid photo with the classic thick white border and wider bottom edge, a CSS painted seaside scene as the photo, a strip of tape at the top, and a handwritten caption. The whole print is tilted for a pinned up look.

### How is it used?

```html
<div class="polaroid">
  <span class="tape"></span>
  <div class="photo"><span class="sun"></span><span class="sail"></span></div>
  <p class="caption">Summer by the sea</p>
</div>
```

The frame is a white padded box with extra space below the `photo`. Inside the photo, CSS shapes build a sky, sea, sun, sail, and birds, while a translucent `tape` sits on top and a script `caption` sits below.

### Why is it useful?

Galleries, scrapbooks, and memory features use a polaroid look. This delivers a full polaroid with a painted scene, tape, and caption using only CSS, no images.
