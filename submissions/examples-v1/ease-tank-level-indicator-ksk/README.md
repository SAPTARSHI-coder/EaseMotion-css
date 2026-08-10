# Tank Level Indicator (`ease-tank-level-indicator-ksk`)

1. What does this do?  
An animated cylindrical tank liquid level indicator. Using overlapping, rotating wave blocks with irregular border-radii (`border-radius: 43% 47% 44% 40%`), it creates an organic fluid sloshing wave motion at the surface. Selecting a percentage level triggers a smooth transition of the liquid's height and warning colors (Red for 25% critical, Orange for 50%, Blue for 75% optimal, Green for 100% full).

2. How is it used?  
Define four radio inputs named `level-group` (`#level-25`, `#level-50`, `#level-75`, `#level-100`) immediately before the card `.tank-card`. Use `<label>` buttons to switch values. Customize properties via:

```css
.tank-card {
  --tank-width:           160px;
  --tank-height:          280px;
  --tank-radius:          50px;
  --tank-liquid-color:    #0ea5e9;
  --tank-duration:        1.2s;
  --tank-easing:          cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

3. Why is it useful?  
Provides a fluid dynamics visualization widget for dashboard gauges, storage tank monitoring layouts, progress reports, and IoT control panels—fully functional with zero JavaScript scripting.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #49015.*
