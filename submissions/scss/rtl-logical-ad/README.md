# RTL Logical mixin

> Issue: [#63805](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63805)

Logical properties with physical fallbacks — and, more importantly, an explicit way to mark what must *not* mirror.

## Mixins

### `logical($property, $value)`

```scss
.card { @include logical("margin-left", 1rem); }
// → margin-left: 1rem;
//   @supports (margin-inline-start: 0) { margin-left: revert; margin-inline-start: 1rem; }
```

Supported: `margin-left/right` · `padding-left/right` · `border-left/right` · `left` · `right`. Anything else raises a build error.

### `logical-inset($side, $value)` — `start` or `end`
### `logical-text-align($side)` — `start` or `end`
### `rtl-preserve` — mark an element direction-neutral
### `rtl-flip-icon` — mirror a directional icon
### `rtl-only` / `ltr-only` — direction-scoped `@content` blocks

## Why it fits EaseMotion

**The usual RTL failure is not "nothing flipped" — it is "everything flipped".** A blanket `transform: scaleX(-1)` or a mirrored stylesheet breaks four categories that must stay put:

| Must not mirror | Why |
|---|---|
| Media controls | Play still points right in RTL; a mirrored play button reads as rewind. |
| Progress bars, timelines | Time runs left-to-right regardless of script direction. |
| Numbers, code, Latin text | Embedded LTR runs have their own direction. |
| Logos and brand marks | They are images of a fixed thing. |

So the module deliberately splits the two cases: logical properties handle what *should* mirror, `rtl-flip-icon` handles directional icons that should, and `rtl-preserve` explicitly marks what should not.

**`rtl-preserve` sets `unicode-bidi: isolate`, not just `direction: ltr`.** Without isolation, an LTR run inside RTL text reorders the punctuation around it — a code snippet or a number in an Arabic sentence can drag the neighbouring comma or bracket to the wrong side. `direction` alone fixes the element and breaks its surroundings.

**The physical property comes first, then `revert` inside `@supports`.** Emitting only the logical property would leave older engines with no layout at all for that side. Emitting both unconditionally would leave the physical value winning on specificity ties. `revert` inside the feature query cleanly hands over once logical support is confirmed.

`ltr-only` matches `:root:not([dir="rtl"])` as well as an explicit `[dir="ltr"]`, since most LTR documents never set the attribute at all.
