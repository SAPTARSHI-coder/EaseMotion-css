# Selection Styling

## What does this do?

Text selection colours with checked contrast, including separate pairs for code
blocks and pull quotes.

## How is it used?

```css
::selection { background: #c7d5ff; color: #14204a; text-shadow: none; }

.code-block ::selection { background: #3d5bbf; color: #ffffff; }
```

## Why is it useful?

Branded selection colours are a common finishing touch and a common accessibility
regression. Authors pick a background that matches the brand and leave `color`
unset, so the selected text keeps its original foreground — which may be near-
invisible against the new background. Selection is text the user is actively
trying to read, usually to copy it, so illegible selection is a real failure.

Both halves of the pair have to be declared together and checked. The values here
are around 8.6:1, well above the 4.5:1 minimum.

A single global rule is not enough on a page with dark code blocks: a light
selection background against light code text is unreadable. Scoping a second
`::selection` inside `.sel-code` is what keeps syntax legible while selected.

`text-shadow: none` matters because syntax-highlighted or heading text often
carries a shadow that smears against the selection fill. It is also one of only
four properties `::selection` actually honours — `color`, `background-color`,
`text-shadow` and `text-decoration` — so anything else in that rule is silently
dropped.

Under `forced-colors` the custom pair is replaced with `Highlight` and
`HighlightText`, handing selection back to the user's own theme.
