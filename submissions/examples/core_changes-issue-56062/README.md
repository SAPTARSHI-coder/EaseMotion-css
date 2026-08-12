# Fix: Tooltip Gets Hidden Behind Nearby Elements

Fixes **#56062** — tooltips rendering behind neighboring elements when
used inside containers with overlapping content or differing stacking
contexts.

## Root cause

The original tooltip relied on a high `z-index` on the tooltip element
alone. That's not enough. `z-index` only ranks elements **within the
same stacking context** — and a child's `z-index`, however high,
cannot lift it above a sibling of its *parent* if the parent itself
doesn't out-rank that sibling.

Concretely, in the reported reproduction:

```html
<div class="card">
  <button class="tooltip-trigger">
    Hover Me
    <span class="tooltip">Tooltip Content</span>
  </button>
</div>
```

If `.card` has no stacking context of its own (no `position` +
`z-index`), and a neighboring `.card` happens to paint after it in DOM
order or overlaps it visually, the neighbor's entire box can render on
top of the first card's contents — tooltip included — regardless of
the tooltip's own `z-index`.

## The fix

Three changes, all in `style.css`:

**1. Give each card its own stacking context at rest.**
```css
.card {
  position: relative;
  z-index: 1;
}
```

**2. Raise the whole card — not just the tooltip — on hover/focus.**
```css
.card:hover,
.card:focus-within {
  z-index: 50;
}
```
This is the actual fix. Lifting the entire card's stacking context
above its siblings brings everything inside it, including the
tooltip, above any neighboring card in one step — a high z-index on
the tooltip alone can't do this on its own.

**3. Keep a locally high z-index on the tooltip itself.**
```css
.tooltip {
  z-index: 100;
}
```
This ensures the tooltip still wins against other content *inside*
its own (now-lifted) card.

No `overflow: hidden` is used anywhere in the ancestor chain, since
that would clip the tooltip regardless of z-index.

## Why this approach

It's a pure-CSS fix with no JavaScript and no structural changes to
existing markup — any project already using `.tooltip-trigger` /
`.tooltip` gets the fix by updating the stylesheet alone. It also
doesn't require `position: fixed` (which has its own edge cases with
scrolling and JS-measured positioning), keeping the component fully
static and CSS-only, in line with EaseMotion's philosophy.

## How to verify

Open `demo.html`. Two cards sit side by side with a deliberate visual
overlap, reproducing the layout described in the issue. Hover the
"Hover Me" button in the first card — the tooltip now renders fully
above the second, overlapping card.

## Files

- `demo.html` — reproduces the issue's exact card/tooltip scenario,
  with the fix applied.
- `style.css` — the fixed tooltip and card styling, with the root
  cause and each fix step documented inline.
- `README.md` — this file.
