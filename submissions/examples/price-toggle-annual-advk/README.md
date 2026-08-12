# Pricing Toggle

## What does this do?

A monthly/annual billing switch where each price rolls vertically to its new
value instead of being replaced.

## How is it used?

```html
<label class="pta-sw">
  <input class="pta-in" type="checkbox" role="switch" />
  <span class="pta-tr"><span class="pta-th"></span></span>
  <span class="pta-lbl">Billed annually</span>
</label>

<p class="pta-p"><span class="pta-roll"><b>29</b><b>23</b></span><small>/mo</small></p>
```

Each `.pta-roll` holds both figures; the annual one is second.

## Why is it useful?

Pricing toggles almost always swap the number instantly, which is the one moment
on the page where the user most wants to perceive a change. Rolling the figure
makes the reduction legible as a movement — the eye tracks the old price leaving
and the new one arriving, which communicates "this got cheaper" far better than a
new static number.

Both figures are real text in the DOM rather than generated content, so the annual
price is present for find-in-page and is read by assistive technology, and the
component works with no script at all — the checkbox state drives everything
through `:has()`.

`font-variant-numeric: tabular-nums` keeps the digits from reflowing as the
values change width, and the fixed `2.2rem` cell height means the roll distance
is exactly one line regardless of font size.

`role="switch"` on the checkbox reports the on/off nature of the control, which a
plain checkbox role would understate for a two-state billing choice.
