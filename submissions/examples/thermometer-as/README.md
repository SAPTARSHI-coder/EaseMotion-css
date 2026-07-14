# Thermometer

### What does this do?

It shows a row of thermometers. Each has a tube with a rising fill, a filled bulb at the base, and scale ticks. The fill height is set by a `--t` custom property and the color follows a state class (cold blue, warm orange, hot red), with a temperature and label below.

### How is it used?

```html
<figure class="thermo warm" style="--t: 58%;">
  <div class="th-stem">
    <span class="th-fill"></span>
    <i class="th-tick" style="--p: 40%;"></i>
  </div>
  <span class="th-bulb"></span>
  <figcaption><b>21&deg;</b><em>Indoor</em></figcaption>
</figure>
```

Set the reading with `--t` on the figure and pick `cold`, `warm`, or `hot`. The fill takes `height: var(--t)`, the bulb is always filled as the reservoir, and each tick sits at `bottom: var(--p)` on the tube.

### Why is it useful?

Weather widgets, IoT dashboards, and appliance UIs show temperature on a thermometer. This builds one entirely with CSS, driven by a single height custom property, with no images or script.
