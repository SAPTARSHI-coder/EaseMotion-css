# ease-tab

> CSS-only animated tab switcher with sliding indicator for EaseMotion CSS

## What it does

A fully CSS-only tab component using radio inputs and sibling selectors
to switch panels, with an animated sliding underline (or pill) indicator
and fade transitions between panels. Zero JavaScript.

## Usage

    <div class="ease-tab">
      <input type="radio" name="tabs" id="tab1" checked />
      <input type="radio" name="tabs" id="tab2" />
      <input type="radio" name="tabs" id="tab3" />

      <div class="ease-tab-bar">
        <label class="ease-tab-label" for="tab1">Tab 1</label>
        <label class="ease-tab-label" for="tab2">Tab 2</label>
        <label class="ease-tab-label" for="tab3">Tab 3</label>
        <span class="ease-tab-indicator"></span>
      </div>

      <div class="ease-tab-panels">
        <div class="ease-tab-panel" data-panel="1">Content 1</div>
        <div class="ease-tab-panel" data-panel="2">Content 2</div>
        <div class="ease-tab-panel" data-panel="3">Content 3</div>
      </div>
    </div>

## Pill variant

Add `ease-tab-pill` to the root `.ease-tab` element for a sliding
pill-style indicator instead of an underline.

    <div class="ease-tab ease-tab-pill">...</div>

## Class Reference

| Class | Description |
|---|---|
| ease-tab | Root container |
| ease-tab-bar | Tab label row |
| ease-tab-label | Individual tab label (use `for` to link radio input) |
| ease-tab-indicator | Animated underline/pill that slides between tabs |
| ease-tab-panels | Wrapper for content panels |
| ease-tab-panel | Individual content panel (use `data-panel` to match) |
| ease-tab-pill | Modifier for pill-style indicator |

## How it works

Radio inputs (`#tab1`, `#tab2`, etc.) are hidden and linked to labels
via `for`. The `:checked` pseudo-class on each radio combined with the
general sibling selector (`~`) toggles the active label color, slides
the indicator using `left`/`width`, and shows the matching panel.

## Notes on the indicator

For 3+ tabs, set `left` and `width` percentages per tab index (e.g.
33.33% per tab for 3 tabs). Adjust these values based on your tab count
and label widths.

## Accessibility

Respects `prefers-reduced-motion` -- indicator transitions and panel
fade animations are disabled when reduced motion is requested.

## Browser support

| Feature | Chrome | Edge | Firefox | Safari |
|---|---|---|---|---|
| :checked + sibling selectors | yes | yes | yes | yes |
| CSS transitions | yes | yes | yes | yes |
| prefers-reduced-motion | yes | yes | yes | yes |

Submitted under MIT License · EaseMotion CSS · 2026
