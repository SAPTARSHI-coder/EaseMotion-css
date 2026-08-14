## quotes-automatic

Demonstrates the CSS `quotes` property paired with `<q>` elements and the `open-quote` / `close-quote` values of the `content` property. Automatic quote pairing is shown across English, French, German, and Japanese with appropriate custom quote characters per language.

### Key Techniques

- `quotes` property defines up to four quote pairs: outer open/close and inner open/close for nesting
- `content: open-quote` and `content: close-quote` insert the correct character from the `quotes` list
- `quotes: inherit` on `<q>` ensures nested `<q>` elements pick up the parent language's quote set
- Language-specific quotes are scoped via `[lang="fr"]`, `[lang="de"]`, `[lang="ja"]` attribute selectors

### Accessibility Notes

- Screen readers may or may not announce `open-quote`/`close-quote` content; do not rely on quotes alone for comprehension
- Quote characters rendered via pseudo-elements are decorative and should not carry semantic weight
- `prefers-reduced-motion` disables transitions when the user requests reduced motion
