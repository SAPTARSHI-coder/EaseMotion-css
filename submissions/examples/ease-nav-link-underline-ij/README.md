# ease-nav-link-underline

A horizontal navigation bar where each link's underline expands from the center on hover. The active link maintains a persistent underline with a color change.

## Features

- Underline animates from center via `::after` pseudo-element with `scaleX` transition
- Active link retains permanent underline and custom text color
- CSS custom properties for easy theming
- JavaScript toggles active state on click

## Usage

Add `class="nlu-link"` to anchor elements inside a `nav.nlu-nav`. The first link is active by default. Click any link to mark it active. Customize via `:root` variables:

```css
--nlu-underline-color  /* underline color */
--nlu-underline-height /* underline thickness */
--nlu-transition-duration  /* animation speed */
--nlu-active-color /* active link text color */
```
