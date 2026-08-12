# Star Rating Fill Hover

Interactive star rating with fill-on-hover using the CSS sibling selector trick and click-to-select persistence.

## Features

- Hover to fill stars with animated color transition
- Previous siblings fill via `:hover ~ .srfh-star` with `flex-direction: row-reverse`
- Click to select rating (persists via `data-rating`)
- Scale animation on hover
- Customizable via CSS custom properties

## Usage

Include `style.css` and `demo.html`. Customize via `:root` variables:

```css
--srfh-star-color       /* default star color */
--srfh-active-color     /* selected star color  */
--srfh-hover-color      /* hover fill color      */
--srfh-star-size        /* star font-size        */
--srfh-transition-duration /* color transition  */
```

Set `data-rating="0"` to `"5"` on `.srfh-container` to programmatically control selection.
