# Involute Gear

A pure CSS/HTML pair of meshing gears with the tooth profile that nearly every gear on Earth uses: the involute.

## What it shows

A gear tooth is not any old bump. Its flank is a very specific curve, the **involute of a circle**: the path traced by the end of a string as you unwind it from a spool.

```
x = rb·(cos a + a·sin a)
y = rb·(sin a − a·cos a)
```

The reason every modern gear uses this one curve is a property called **conjugate action**. As two involute teeth push on each other, the point of contact slides along a single straight line (the line of action), and the ratio of the two gears' speeds stays *exactly constant* through the whole engagement. No speeding up and slowing down as each tooth passes, which would mean vibration, noise, and wear. Cut the teeth as involutes and the gears transmit motion perfectly smoothly.

The involute has a second gift: it does not care about the exact distance between the gear centres. Push the shafts slightly apart and involute gears still mesh correctly at the same speed ratio. Almost no other tooth shape tolerates that, which is why the involute won.

The speed ratio itself is set only by the tooth counts. Here a 12-tooth pinion drives an 18-tooth wheel, so the little one turns **exactly 1.5 times** for every turn of the big one.

## How it is built

- **The teeth are real involutes.** Each flank is generated from the involute equation and cut into the gear's `clip-path` polygon (144 points for the 12-tooth gear, 216 for the 18-tooth). The defining involute identity, `r = rb·√(1 + a²)`, holds to **0.000000** at every sampled point.
- **The speed ratio is the law of gearing, and it is measured.** The browser check reads the two gears' animation durations (6s and 9s) and computes their angular-speed ratio: **exactly 1.5**, matching `Zb/Za = 18/12`. That inverse-tooth-count ratio is the whole point of a gear pair, and the involute profile is what keeps it constant rather than just average.
- **They mesh at the right distance.** The check measures the gear centres in the rendered DOM: **90px apart**, exactly `rpA + rpB`, the sum of the two pitch radii. The dashed pitch circles are drawn so you can see the gears behave as if those circles were rolling on each other.
- **They counter-rotate.** The driven wheel turns the opposite way to the pinion, as meshed external gears must.

No images, no JavaScript, no external assets.

## Accessibility

`prefers-reduced-motion: reduce` pauses both gears in mesh.

## Files

- `demo.html` - markup
- `style.css` - the whole component
