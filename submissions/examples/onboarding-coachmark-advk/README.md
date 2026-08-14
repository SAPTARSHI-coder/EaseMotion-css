# Coach Marks

## What does this do?

A product-tour step that dims the whole page while leaving one control fully
visible, with a tooltip explaining it.

## How is it used?

```html
<button class="cch-b cch-spot">Publish</button>

<div class="cch-tip" role="dialog" aria-modal="false" aria-labelledby="cch-t">
  <h2 id="cch-t">Publish when ready</h2>
  <p>Explanation.</p>
</div>
```

## Why is it useful?

The spotlight is normally built as four absolutely positioned overlay panels
surrounding the target, whose coordinates have to be recalculated on every resize,
scroll and font change — and which visibly misalign whenever that recalculation
lags.

`box-shadow: 0 0 0 100vmax rgba(...)` on the target element does the whole thing
in one declaration. The shadow spreads far beyond the viewport in every direction,
and because a shadow is never painted underneath its own element, the target stays
clear. The hole tracks the element automatically — no geometry, no listeners, and
it stays correct if the button moves or resizes.

`aria-modal="false"` is deliberate. Coach marks look modal but should not trap
focus: the user must be able to tab away and dismiss the tour, and a genuinely
modal tour is a common accessibility complaint.

The `forced-colors` branch is essential rather than cosmetic here. `box-shadow` is
not painted in High Contrast mode, so the entire spotlight would silently vanish —
the fallback swaps to a `Highlight` outline so the target is still identifiable.
