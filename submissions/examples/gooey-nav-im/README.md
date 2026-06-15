# Gooey Elastic Tab Navigation

## What does this do?
A premium tab navigation where the active indicator slides between tabs with a "gooey" liquid/elastic stretch effect — stretching into a bubble while moving, then contracting back into a pill on arrival. Pure CSS, zero JavaScript.

## How it works
1. **SVG goo filter** — `feGaussianBlur` + `feColorMatrix` + `feComposite` applied to `.ease-gooey-nav` merges overlapping blurred edges into a liquid metaball look
2. **Hidden radio inputs + sibling selectors** — `#tab:checked ~ .indicator` positions the indicator under the active tab, no JS needed
3. **Asymmetric transition curves** — `left` and `right` edges of the indicator use different `cubic-bezier` timings, so one edge moves faster than the other, creating the stretch-then-settle effect

## How to use it
```html
<!-- Include the SVG filter once per page -->
<svg style="position: absolute; width: 0; height: 0;">
  <defs>
    <filter id="ease-gooey-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
      <feColorMatrix in="blur" mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
      <feComposite in="SourceGraphic" in2="goo" operator="atop" />
    </filter>
  </defs>
</svg>

<!-- 3-tab nav -->
<div class="ease-gooey-nav-container">
  <div class="ease-gooey-nav">
    <input type="radio" id="tab-1" name="tabs" checked>
    <label for="tab-1" class="ease-gooey-tab">Dashboard</label>

    <input type="radio" id="tab-2" name="tabs">
    <label for="tab-2" class="ease-gooey-tab">Analytics</label>

    <input type="radio" id="tab-3" name="tabs">
    <label for="tab-3" class="ease-gooey-tab">Settings</label>

    <div class="ease-gooey-indicator ease-gooey-indicator--3"></div>
  </div>
</div>
```

## Variants
- `.ease-gooey-indicator--3` / `.ease-gooey-indicator--4` — 3-tab and 4-tab layouts
- `.ease-gooey-nav--4` — adjusts tab width for 4-tab layout
- `.ease-gooey-nav--green` — color variant for the indicator
- Responsive breakpoint included for screens under 420px

## Why it fits EaseMotion CSS
Aligns directly with the v1.2 milestone to expand CSS-only tab components. Fully implemented in plain HTML/CSS — no JS required for layout calculation or morph triggers. Brings high-fidelity fluid motion (macOS-dock style liquid feel) to core tab layouts. `prefers-reduced-motion` removes both the goo filter and the stretch transition, degrading to an instant position swap.
