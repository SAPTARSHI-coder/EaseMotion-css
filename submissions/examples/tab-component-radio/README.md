# tab-component-radio

CSS-only tabbed interface using hidden `<input type="radio">` elements with `:checked` toggling content panels.

## How It Works

Each tab label links to a hidden radio with the same `name`. When checked, its sibling content panel receives `display: block` (or `opacity` + `pointer-events`). A slender animated underline tracks the active tab using `:has()` or general sibling combinators.

## Usage

Open `demo.html` and click any tab label. Content fades with a smooth transition. The `prefers-reduced-motion` query disables the slide and fade. All state is managed by the CSS cascade — no JavaScript, no hash routing.
