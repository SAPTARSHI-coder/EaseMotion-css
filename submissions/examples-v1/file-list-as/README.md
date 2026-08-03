# File Upload List

### What does this do?

It shows a list of uploaded files where each row has a type icon, a name and size, and a status. One row is mid upload with a progress bar, one is done with a green check, and one failed with a red error icon.

### How is it used?

```html
<ul class="file-list">
  <li class="file-row is-uploading" style="--p: 62%">
    <span class="fr-ic"><svg>...</svg></span>
    <div class="fr-body">
      <div class="fr-top"><span class="fr-name">hero.jpg</span><span class="fr-size">5.1 MB</span></div>
      <div class="fr-bar"></div>
    </div>
    <button class="fr-x" aria-label="Cancel upload"><svg>...</svg></button>
  </li>
</ul>
```

Set the progress with the `--p` custom property on an `is-uploading` row. Use `is-done` for a completed upload and `is-error` for a failure, which color the end icon and name.

### Why is it useful?

Upload forms show the files being sent with their progress. This lays out a file list with type icons, per file progress bars driven by a custom property, and done and error states, using only CSS and inline SVG.
