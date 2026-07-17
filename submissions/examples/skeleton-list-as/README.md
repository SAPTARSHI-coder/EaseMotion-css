# Skeleton List Loader

### What does this do?

It shows a loading placeholder for a list of rows, each with a round avatar block and two text bars. A shimmer sweeps across the placeholders to signal that content is loading.

### How is it used?

```html
<ul class="skel-list" aria-hidden="true">
  <li class="skel-row">
    <span class="skel-avatar"></span>
    <span class="skel-lines">
      <span class="skel-bar"></span>
      <span class="skel-bar short"></span>
    </span>
  </li>
</ul>
```

Repeat the row for as many placeholders as you expect. Mark the list `aria-hidden` while it stands in for real content, then swap it for the loaded list. Add `short` to a bar for a partial width line.

### Why is it useful?

Lists of users, comments, or results show a skeleton while data loads. This builds a multi row skeleton with a shimmer sweep from a single moving gradient, using only CSS. The shimmer is disabled under reduced motion so the blocks rest static.
