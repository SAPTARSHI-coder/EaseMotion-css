# ease-skip-ink — Text Decoration Skip Ink Utility Classes

Utility classes to control `text-decoration-skip-ink` — whether underline, overline, and line-through decorations skip over the descenders of letters like g, j, p, q, y.

## Classes

| Class | `text-decoration-skip-ink` |
|-------|------------------------------|
| `.ease-skip-ink-auto` | `auto` |
| `.ease-skip-ink-none` | `none` |
| `.ease-skip-ink-all` | `all` |

## Usage

```html
<!-- Default body links -->
<p class="ease-skip-ink-auto">
  Read more about our <a href="#">pricing page</a>.
</p>

<!-- Decorative underline, descenders intentionally crossed -->
<span class="ease-skip-ink-none">Brand wordmark</span>

<!-- Force skip on every decoration line, including line-through -->
<p class="ease-skip-ink-all" style="text-decoration-line: line-through;">
  Discontinued product
</p>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-skip-ink-auto` | Body links and inline text, safest cross-browser default |
| `.ease-skip-ink-none` | Decorative underlines, buttons, brand marks |
| `.ease-skip-ink-all` | Long-form article links, line-through with heavy descenders |

## Notes

- No existing utility for this property in `core/base.css` or `components/*.css` — only `text-underline-offset` is used in a few places
- Supported in all modern browsers (Chrome, Firefox, Safari, Edge)
- Safari has historically skipped ink by default, so `.ease-skip-ink-none` shows the most visible cross-browser difference

## Why it fits EaseMotion CSS

EaseMotion CSS sets underline decorations in several components (`announce-bar.css`, `breadcrumb.css`, `buttons.css`) but never controls skip-ink behavior explicitly. These classes give consumers fine-grained control over decoration legibility without touching `core/` or `components/`.

Closes #11604
