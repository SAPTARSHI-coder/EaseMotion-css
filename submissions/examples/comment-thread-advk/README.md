# Comment Thread

## What does this do?

A nested discussion thread with connector rails showing reply depth, and an
indent cap so deep threads remain readable.

## How is it used?

```html
<ol class="cmt" role="list">
  <li class="cmt-i"><article>…</article>
    <ol role="list">
      <li class="cmt-i"><article>…</article></li>
    </ol>
  </li>
</ol>
```

## Why is it useful?

Threaded comments are the classic case where indentation per level eventually
destroys the layout: by the sixth reply the content column is a few characters
wide on a phone, and the discussion becomes unreadable exactly where it is most
active.

Putting the indent and rail on the nested `<ol>` itself means depth composes
automatically with no level-specific classes — and it also makes the cap trivial.
`.cmt ol ol ol ol` stops the indent growing and switches the rail to dashed, so
deeper replies still read as nested without consuming horizontal space. A
narrow-viewport query tightens the step further.

Using real nested ordered lists rather than flat divs with margin classes means
the reply structure is in the document, so a screen reader announces list nesting
levels and users can navigate the thread hierarchically. A flat list with
indentation styling conveys none of that.

`<time>` marks the timestamps semantically, and each comment is an `<article>`,
which is the correct element for a self-contained contribution and gives assistive
technology a navigable landmark per comment.
