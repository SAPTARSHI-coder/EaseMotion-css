# ease-range-slider-sap

A styled native range slider with a live-filling track, animated thumb hover/active states, and a synced value readout.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="range-slider-sap">
     <div class="range-label">
       <span>Volume</span>
       <span class="range-value" id="rangeValue">50</span>
     </div>
     <input type="range" min="0" max="100" value="50" id="rangeInput" style="--fill: 50%;">
   </div>
```
3. Attach the `input` listener from `demo.html` to update `--fill` and the value label live.

## Customization
- `--fill` custom property: drives the filled-vs-unfilled track split; must be updated in JS to match the current value's percentage.
- Thumb size/border/hover scale in `::-webkit-slider-thumb` / `::-moz-range-thumb`.
- Track colors in the `linear-gradient()` background.

## Notes
- The filled-track effect uses a `linear-gradient` background with a `--fill` custom property as the color-stop percentage — this needs to be recalculated in JS on every `input` event since native range inputs don't expose fill percentage via CSS alone.
- Thumb styling is duplicated across `-webkit-` and `-moz-` prefixes since range thumb pseudo-elements aren't standardized across browsers.
- Respects `prefers-reduced-motion`: thumb hover/active scale transitions are disabled.