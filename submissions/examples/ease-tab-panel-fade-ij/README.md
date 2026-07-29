# ease-tab-panel-fade

A tab panel component where the active panel fades in using opacity transitions.

## Features

- Three tabs with corresponding content panels
- Active panel fades in smoothly
- JavaScript sets `--tpf-active` CSS custom property
- Customizable via CSS custom properties

## Usage

Click a tab to activate it. The corresponding panel fades in while others remain hidden.

Customize via `:root` variables:

```css
--tpf-transition-duration: 0.35s;
--tpf-active-color: #333;
--tpf-inactive-color: #999;
```