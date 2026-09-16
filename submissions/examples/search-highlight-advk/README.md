# Search Highlight

## What does this do?

Highlights matched search terms using `<mark>`, distinguishing the current match
from the others by outline as well as fill.

## How is it used?

```html
<h2><mark class="is-current">reduced</mark>-motion audit</h2>
<p>Twenty-five stylesheets have no <mark>reduced</mark>-motion block.</p>
```

## Why is it useful?

Search results usually wrap matches in a `<span class="highlight">`, which makes
them visible but semantically inert. `<mark>` means "relevant in the current
context", which is exactly what a search hit is — some screen readers expose it,
and it is the element browsers' own find-in-page conceptually mirrors.

Distinguishing the *current* match matters once a result set has many hits. Doing
it with a stronger fill alone fails for anyone who cannot separate two shades of
yellow, so the current match also takes an `outline` — a shape difference that
survives both colour vision deficiency and High Contrast.

`box-decoration-break: clone` is the detail most implementations miss: when a
highlighted phrase wraps across lines, the default is a single box stretched
across the break, leaving the second line without its background edge. `clone`
gives each fragment its own padding and radius.

Under `forced-colors`, `mark` is switched to `Highlight`/`HighlightText` with
`forced-color-adjust: none`, because the highlight *is* the information and
letting the system flatten it would erase the search results entirely.
