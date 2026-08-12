# Glass Card Text Token Fix — Issue #10240

**Fixes:** #10240

## What does this do?

Replaces the undefined `--ease-color-text-dark` token in the
`.ease-card-glass` dark mode block with `--ease-color-text` — the
correct existing token that is properly overridden in dark mode.

## The problem

`components/cards.css` line 182:

```css
@media (prefers-color-scheme: dark) {
  .ease-card-glass {
    color: var(--ease-color-text-dark, #f8fafc); /* undefined token */
  }
}
```

`--ease-color-text-dark` does not exist in `variables.css` — not in
`:root`, not in the dark mode block, not anywhere. The browser always
falls through to the hardcoded fallback `#f8fafc`. Any developer who
tries to override this color by setting `--ease-color-text-dark` in
their own CSS gets no effect — the token was never defined.

## The fix

```css
@media (prefers-color-scheme: dark) {
  .ease-card-glass {
    color: var(--ease-color-text, #e2e8f0); /* correct existing token */
  }
}
```

`--ease-color-text` is defined in `variables.css` and overridden to
`#e2e8f0` in dark mode. It is the same token used by every other
dark-mode text in the framework. No new tokens needed.

## Why not Option B (declare the missing token)?

The issue proposed two options. Option A (used here) is preferred
because `--ease-color-text` already carries the correct dark value.
Introducing `--ease-color-text-dark` as a new token would create two
tokens with the same purpose and no clear distinction, increasing
cognitive overhead for users of the framework.

## Demo

The demo shows a side-by-side comparison on a dark background — the
broken card always shows `#f8fafc` regardless of token overrides; the
fixed card correctly uses `--ease-color-text`. Enable dark mode in
Chrome DevTools → Rendering to also see the real `.ease-card-glass`
class updated by `style.css`.
