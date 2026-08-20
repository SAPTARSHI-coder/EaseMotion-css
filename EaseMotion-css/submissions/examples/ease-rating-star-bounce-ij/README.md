# Rating Star Bounce

Interactive star rating with a staggered bounce animation on selection. Stars animate one after another with a configurable delay.

## Features

- Click to rate with staggered bounce animation
- Each star bounces sequentially with configurable delay
- Hover effect with scale and color transition
- Reset button to clear selection
- Fully customizable via CSS custom properties

## Usage

Include `style.css` and `demo.html`. Customize via `:root` variables:

```css
--star-duration        /* bounce animation duration (default: 0.5s)       */
--star-delay-base      /* per-star stagger delay (default: 0.08s)         */
--star-color           /* default unselected star color                   */
--star-selected-color  /* selected star color                             */
--star-size            /* star font-size                                  */
--star-hover-color     /* hover fill color                                */
```

Set `data-rating="0"` to `"5"` on `.rsb-stars` to programmatically control selection. Add/remove `.rsb-animate` class to trigger the bounce animation.
