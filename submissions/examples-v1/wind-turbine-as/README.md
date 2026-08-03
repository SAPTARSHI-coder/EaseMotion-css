# Wind Turbine

### What does this do?

It shows a wind turbine on a hill against a blue sky with drifting clouds. A tapered white tower holds a hub with three long blades that spin steadily. Under reduced motion the blades and clouds hold still.

### How is it used?

```html
<div class="turbine">
  <span class="tower"></span>
  <div class="rotor"><span class="blade b1"></span><span class="blade b2"></span><span class="blade b3"></span><span class="hub"></span></div>
</div>
```

The tower is a `clip-path` trapezoid, and the three blades sit in a `rotor` that spins with `rotor-spin`. Each blade is a tapered shape rotated to 120 degree spacing around the hub, so the rotor turns as one.

### Why is it useful?

Energy dashboards, sustainability pages, and scenic loaders use a wind turbine. This builds a spinning turbine with pure CSS shapes and rotation, no images, with a reduced motion fallback.
