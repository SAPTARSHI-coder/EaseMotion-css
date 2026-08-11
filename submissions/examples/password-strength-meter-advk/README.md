# Password Strength Meter

## What does this do?

A password strength indicator built on a native `<meter>` element. A small
script computes an integer score (0-4) and writes it to `data-score`; every
colour and width comes from CSS reacting to that attribute.

## How is it used?

```html
<meter id="psm-meter" class="psm-meter" data-score="0" min="0" max="4" value="0"></meter>
<script>
  meter.setAttribute('data-score', String(score));
  meter.value = score;
</script>
```

The script's only job is producing a number. All presentation — bar colour
per level, transitions, dark mode, forced-colors — lives in `style.css`
keyed off `[data-score="N"]`.

## Why is it useful?

Strength meters are usually built by setting inline `style.width` and
`style.background` from JavaScript, which means every visual change requires
touching the script and duplicates state between JS and CSS. Routing the
score through a single data attribute keeps JS and CSS cleanly separated:
designers can restyle every level without reading the script, and the score
computation can be swapped (e.g. for a zxcvbn-style estimator) without
touching a single style rule.

Using `<meter>` instead of a `<div>` bar also means the value participates in
the accessibility tree with correct min/max semantics for free, and the
visible text label is wired through `aria-live="polite"` so assistive tech
announces strength changes as the user types.
