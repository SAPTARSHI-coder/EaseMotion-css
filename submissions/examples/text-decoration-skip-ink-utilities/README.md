# ease-decoration-skip-ink — Text Decoration Skip Ink Utility Classes

Utility classes to control `text-decoration-skip-ink` — how underlines and overlines render around descenders (g, j, p, q, y). No such utilities currently exist in `core/base.css` or `components/*.css`.

## Classes

| Class | `text-decoration-skip-ink` |
|-------|------------------------------|
| `.ease-decoration-skip-ink-auto` | `auto` |
| `.ease-decoration-skip-ink-none` | `none` |
| `.ease-decoration-skip-ink-all` | `all` |

## Usage

```html
<!-- Default behavior, skips descenders -->
<a href="#" class="ease-decoration-skip-ink-auto">Typography jungle gym</a>

<!-- Strikethrough or brutalist full-line underline -->
<span class="ease-decoration-skip-ink-none">Deprecated price</span>

<!-- Decorative heading underline with max clearance -->
<h1 class="ease-decoration-skip-ink-all">Big Underlined Heading</h1>
```

## When to use each class

| Class | Best for |
|-------|----------|
| `.ease-decoration-skip-ink-auto` | Standard body links and inline text (browser default) |
| `.ease-decoration-skip-ink-none` | Strikethrough-style or deliberate full-line emphasis |
| `.ease-decoration-skip-ink-all` | Large decorative underlines needing extra glyph clearance |

## Notes

- No `text-decoration-skip-ink` declarations exist anywhere in `core/` or `components/` today
- Effect is most visible on bold/large underlined text containing descenders
- Supported in all modern browsers (Chrome, Firefox, Safari, Edge)

## Why it fits EaseMotion CSS

EaseMotion CSS has underline styling scattered across `core/base.css`, `buttons.css`, `breadcrumb.css`, and others, but no control over skip-ink behavior. These classes complete the text-decoration utility set.

Closes #11604
