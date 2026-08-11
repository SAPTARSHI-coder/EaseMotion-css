# visually-hidden-advk

Mixins for content that must be available to screen readers but not painted,
including the skip-link pattern.

## API

| Mixin | Purpose |
|---|---|
| `visually-hidden` | Hide visually, keep in the accessibility tree. |
| `visually-shown` | Reverse the above. |
| `visually-hidden-focusable` | Hidden until focused. |
| `skip-link($bg, $fg, $offset)` | A complete skip-to-content link. |
| `aria-hidden-visual` | Visible but not announced. |

## Usage

```scss
@use "visually-hidden-advk" as vh;

.sr-only { @include vh.visually-hidden; }
.skip { @include vh.skip-link; }

.field-label { @include vh.visually-hidden; }
```

```html
<a class="skip" href="#main">Skip to content</a>
```

## Why it fits EaseMotion CSS

Several submissions in this repository need a visually hidden label — form
controls whose visible label is a placeholder, live regions announcing state,
icon-only buttons. Each currently re-declares the same block, and small omissions
change the behaviour.

Getting it right is subtler than it looks, which is why it belongs in one place.
`display: none` and `visibility: hidden` remove the element from the accessibility
tree entirely, defeating the purpose. A `1px` box without `overflow: hidden` still
paints a sliver. And omitting `white-space: nowrap` lets the text wrap inside that
`1px` box, which in some screen readers causes each word to be announced as a
separate line — the text becomes unintelligible.

`clip-path: inset(50%)` replaces the deprecated `clip` property, which is still
what most copy-pasted snippets use.

`visually-hidden-focusable` matters because a skip link that is permanently
hidden is not a skip link — WCAG 2.4.1 requires it be reachable, so it must appear
on focus. `skip-link` packages the whole pattern including the focus styling,
since a skip link that appears with no visible styling is easy to miss.
