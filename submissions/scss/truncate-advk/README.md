# truncate-advk

Text truncation mixins, including the `min-width` fix that makes truncation work
inside flex and grid.

## API

| Mixin | Purpose |
|---|---|
| `truncate` | Single line with an ellipsis. |
| `line-clamp($lines)` | Clamp to N lines. |
| `fade-clamp($height, $fade, $bg)` | Fade the last line instead of an ellipsis. |
| `truncate-start` | Ellipsis at the start, for file paths. |

## Usage

```scss
@use "truncate-advk" as t;

.card__title { @include t.truncate; }
.card__excerpt { @include t.line-clamp(3); }
.preview { @include t.fade-clamp(6em, 2em, #fbfcfe); }
.file-path { @include t.truncate-start; }
```

## Why it fits EaseMotion CSS

`text-overflow: ellipsis` is one of the most frequently broken declarations in
CSS, and almost always for the same reason: flex and grid items default to
`min-width: auto`, which refuses to shrink below their content's intrinsic size.
The text never overflows its own box, so the ellipsis never appears and the
*container* overflows instead — pushing siblings out of the layout.

Because the symptom looks nothing like the cause, authors usually add
`overflow: hidden` in more places rather than resetting `min-width: 0`. Baking
that reset into the mixin means the fix cannot be forgotten.

`fade-clamp` exists because an ellipsis is a semantic claim — it says "there is
more text here". For a preview where the full text is a click away that is right;
for a decorative excerpt a soft fade reads better and does not imply the sentence
was cut mid-word.

`truncate-start` handles the case where the *end* of the string is the informative
part, such as a deep file path. The `direction: rtl` technique needs
`unicode-bidi: plaintext` on children, or punctuation gets visually reordered — a
subtle bug in most copy-pasted versions of this trick.
