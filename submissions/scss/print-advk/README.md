# print-advk

Print stylesheet mixins for a framework whose main output is motion — which
paper cannot reproduce.

## API

| Mixin | Purpose |
|---|---|
| `print` | Wrap `@content` in `@media print`. |
| `print-only` / `screen-only` | Medium-specific visibility. |
| `no-break` | Prevent splitting across pages. |
| `print-reset($expand-links)` | Baseline print treatment for an article page. |
| `page-break($before, $after)` | Force page breaks. |

## Usage

```scss
@use "print-advk" as p;

@include p.print-reset;

.site-nav { @include p.screen-only; }
.print-header { @include p.print-only; }
.invoice-section { @include p.page-break(false, true); }
```

## Why it fits EaseMotion CSS

Printing is the one medium where an animation-first framework has nothing to say,
and that is exactly why it needs handling. Elements mid-animation can be captured
at an arbitrary keyframe — a card printed at `opacity: 0` from an entrance
animation simply does not appear on the page. Killing all animation and transition
in `@media print` prevents snapshots of transient states.

The link expansion is the highest-value rule. A printed document full of "click
here" conveys nothing, so `a[href^="http"]::after { content: " (" attr(href) ")" }`
restores the destination. Internal anchors and `mailto:` links are excluded because
appending `(#section-2)` to body text is noise.

`thead { display: table-header-group }` makes column headers repeat on every page
of a long table, without which page two onward is a grid of unlabelled numbers.

`break-after: avoid` on headings prevents the classic orphan — a section title
alone at the foot of a page with its content overleaf. Both modern and legacy
break properties are emitted, since print engines lag behind browsers.
