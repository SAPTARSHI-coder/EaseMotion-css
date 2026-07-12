# ease-temperature-converter

An interactive Celsius / Fahrenheit / Kelvin converter with a live-updating
animated gauge that fills and shifts color (blue -> yellow -> red) based on
the current temperature.

## Usage

Copy `style.css` and the markup/script from `demo.html` into your project.
Editing any one field live-updates the other two and the gauge.

```html
<div class="ease-temp">
  <div class="ease-temp__gauge">
    <div class="ease-temp__gauge-fill" id="gaugeFill"></div>
  </div>

  <div class="ease-temp__fields">
    <div class="ease-temp__field" data-unit="celsius">
      <label for="celsius">Celsius</label>
      <input type="number" id="celsius" value="25" step="0.1">
    </div>
    <!-- fahrenheit, kelvin fields follow the same pattern -->
  </div>
</div>
```

## How it works

- **Conversion formulas**:
  - `F = C * 9/5 + 32`
  - `K = C + 273.15`
- **Gauge**: maps a Celsius range of -30C to 60C onto a 0-100% fill width
  via the `--temp-fill` CSS custom property, animated with a
  `cubic-bezier(0.4, 0, 0.2, 1)` transition on `width`.
- **Color shift**: the gauge's `--temp-color` custom property switches
  between blue (cold, <=15C), yellow (warm, 15-30C), and red (hot, >30C),
  transitioning smoothly via `background-color` transition.
- **Update pulse**: whenever a field is recalculated from another field's
  input, a brief `scale()` keyframe pulse (`ease-temp-pulse`) plays on that
  field's input to give clear visual feedback of the update.

## Files

- `demo.html` - interactive demo with live two-way conversion
- `style.css` - all styles and animation
- `README.md` - this file

## Accessibility

Each input has an associated `<label>` via `for`/`id`. Inputs are native
`<input type="number">` elements, so they're keyboard operable and work with
screen readers and OS-level numeric input controls out of the box.
