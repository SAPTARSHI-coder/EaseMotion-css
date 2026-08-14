# Scale-Hover Tooltip (`scale-hover-tooltip-hr18`)

A pure-CSS animated tooltip with a "Scale-Hover" entrance, styled for
gaming hub inventory layouts, built for issue
[#56489](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/56489).

## What it does

Hovering — or tabbing to, with a keyboard — an inventory item reveals a
stat tooltip that springs open from `scale(0.4)` to `scale(1)` with a
slight overshoot, rather than just fading or growing linearly into place.
Both the show/hide behavior and the scale animation are pure CSS, driven
by `:hover`/`:focus-within` and a single `transform`/`opacity` transition
— no JavaScript anywhere in this component.

The demo applies it to a 5-item inventory grid with rarity-colored items
(Common, Rare, Epic) and per-item stat breakdowns in each tooltip.

## Installation

Nothing to install — `demo.html` is self-contained and opens directly in a
browser (double-click the file). It links a single local `style.css`; no
build step, package manager, or external CDN.

## Usage

```html
<span class="sht-item-wrap-hr18">
  <span class="sht-item-hr18" tabindex="0">&#9876;</span>
  <span class="ease-tooltip-scale-hr18" role="tooltip">
    <span class="sht-tooltip-name-hr18">Frost Blade</span>
    <span class="sht-tooltip-rarity-hr18">Rare</span>
    <span class="sht-tooltip-stat-hr18"><span>Damage</span><span>+42</span></span>
  </span>
</span>
```

`tabindex="0"` on the trigger is what makes it focusable by keyboard when
it isn't already a naturally interactive element like a `<button>` — if
your trigger already is one, the `tabindex` isn't needed.

### Tuning the animation

| Property | Default | Controls |
|---|---|---|
| `--ease-scale-duration-hr18` | `260ms` | How long the scale-in takes |
| `--ease-scale-easing-hr18` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | The overshoot curve that gives it a slight spring |

```css
.sht-item-wrap-hr18.snappy {
  --ease-scale-duration-hr18: 140ms;
}
```

## Accessibility notes

- The tooltip shows on `:focus-within` as well as `:hover`, so keyboard
  users see the same content sighted mouse users do.
- The tooltip carries `role="tooltip"`.
- Rarity is conveyed through text ("Common" / "Rare" / "Epic") in
  addition to color, so it's never communicated by color alone.
- The tooltip contains only text — no interactive content — matching the
  WAI-ARIA tooltip pattern's expectations.
- `@media (prefers-reduced-motion: reduce)` shortens the transition to a
  near-instant opacity fade with no scaling motion, so feedback is
  preserved without any movement.

## Responsiveness

The inventory grid runs 5 columns wide, dropping to 3 under a `480px`
viewport width so items stay a comfortable tap size on a phone.

## Why this fits EaseMotion CSS

A pure-CSS, zero-JavaScript component — a single transition rule — with
its timing and easing exposed as tunable custom properties, matching the
issue's "no external JS frameworks" and "smooth CSS transitions and
keyframe animations" requirements directly.

All classes, custom properties, and the folder itself use a `-hr18`
suffix to avoid colliding with any other contributor's submission under
`submissions/examples/`.
