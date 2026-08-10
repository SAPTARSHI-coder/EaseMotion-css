# Notification Inbox

## What does this do?

An activity feed where unread items are marked by a dot, a heavier title and a
tinted row, with items settling in on a short stagger.

## How is it used?

```html
<ul class="nbx" role="list">
  <li class="nbx-i nbx-i--unread" style="--i:0">
    <span class="nbx-av">SR</span>
    <div><p class="nbx-t">Sara approved your PR</p><p class="nbx-m">Detail line</p></div>
    <time class="nbx-d">2m</time>
  </li>
</ul>
```

## Why is it useful?

Unread state in notification lists is nearly always a faint background tint. That
fails twice: the tint is often only a few percent different from the read rows, so
it is easy to miss even with full colour vision, and in High Contrast mode the
background is replaced outright and the distinction disappears entirely.

Layering three cues — a marker dot, `font-weight: 700` on the title, and the row
tint — means the state survives any one of them being lost. Weight in particular
is robust: it depends on neither colour nor a decorative element.

The stagger is capped at four rows' worth by design. Notification lists can run to
hundreds of items, and an uncapped `--i` cascade would leave later rows animating
long after the user has started reading. Applying it only to the initially visible
rows keeps the effect as polish rather than an obstacle.

`<time>` for the timestamp and `role="list"` on the container preserve the
semantics that `list-style: none` would otherwise strip in Safari.
