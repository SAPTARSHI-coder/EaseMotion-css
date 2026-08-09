# Text Balance mixin

> Issue: [#63799](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/63799)

Headline wrapping that avoids orphaned words, with a real fallback and the right tool per text type.

## Mixins

### `text-balance($measure, $center)` — for headings

```scss
.hero__title { @include text-balance(34ch, $center: true); }
```

| Parameter | Type | Default | Description |
|---|---|---|---|
| `$measure` | `Number` | `34ch` | Fallback max-width where `balance` is unsupported. |
| `$center` | `Bool` | `false` | Centre the block within its parent. |

### `text-pretty($measure)` — for body copy

### `text-clamp-lines($lines)` — hard line cap for card titles

### `text-no-orphan` — last-resort, markup-dependent

### `text-balance-headings($levels)` — apply across a heading scale

## Configuration

```scss
@use "text-balance" with ($text-balance-measure: 30ch);
```

## Why it fits EaseMotion

**`text-wrap: balance` is a headings-only tool, and that is not a style preference.** Browsers cap it at a small line count — four in Chromium at time of writing — because the algorithm is expensive. Applied to body copy it is silently ignored past that cap, which looks like a browser bug rather than a documented limit. `text-balance-headings` therefore deliberately does **not** touch `p`.

`text-wrap: pretty` is the correct choice for long text: it targets orphans and ragged edges without the line-count cap, at far lower cost. Offering both, clearly separated, is the point of the module.

**The fallback is ordered deliberately.** `max-width` is declared first and then released to `none` inside `@supports (text-wrap: balance)`. Where balance works, the measure would fight it — an artificially narrow column forces breaks the algorithm was trying to avoid. Where it does not, a bounded `ch` measure at least prevents a full-width headline dropping one word onto its own line, which is the exact ugliness balance exists to fix.

`text-no-orphan` is included because it is the only technique that works everywhere, but its markup dependency is documented rather than hidden — it needs a span around the final two words, so it is a fallback rather than a default.
