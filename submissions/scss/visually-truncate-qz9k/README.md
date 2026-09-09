# visually-truncate-qz9k

A Sass mixin for single-line ellipsis truncation, with a documented
reminder that clipped text needs an accessible full-text affordance CSS
cannot provide on its own.

## Usage

```scss
@use 'visually-truncate' as *;

.file-name {
  @include visually-truncate(14rem);
}
```

```html
<span class="file-name" title="quarterly-report-final-v3.pdf">quarterly-report-final-v3.pdf</span>
```

| Param | Default | Description |
|---|---|---|
| `$max-width` | `100%` | Width at which the text truncates. |

## Why is it useful?

`overflow: hidden` + `text-overflow: ellipsis` + `white-space: nowrap` is
the standard truncation recipe, but on its own it only affects the visual
rendering — a screen reader typically still reads the full untruncated
text, while a sighted mouse user has no way to recover the clipped portion
at all unless the markup separately adds a `title` attribute or a
visually-hidden full-text element. This mixin doesn't (and can't) add that
affordance from CSS alone, but keeping it as an explicit, documented step
in the mixin's own comment is meant to stop "truncate the text" from being
treated as visually-complete without also asking "how does someone read
the rest of it."

Truncation mixins that skip this step are a common, easy-to-miss
accessibility gap: the failure is invisible in a quick visual review, since
the page looks correct — it only shows up when someone actually needs the
full value and has no way to get it.
