# Animated Gauge/Meter Submission

## 1. What does this do?
It provides beautiful, animated gauge/meter components in three variants: circular gauges, linear gauges, and semi-circular gauges. Perfect for dashboards, analytics pages, performance monitoring, and KPI tracking.

## 2. How is it used?
Add gauge elements with `data-value` and `data-max` attributes. JavaScript calculates the percentage and animates the fill using SVG stroke-dasharray/stroke-dashoffset for circular gauges and width transitions for linear gauges. All animations trigger on scroll using Intersection Observer.

## 3. Why is it useful?
- Essential component for dashboards and analytics
- Three gauge types: circular, linear, and semi-circular
- Smooth animated fill transitions with easing
- Color-coded gauges for different metrics
- Scroll-triggered animations using Intersection Observer
- Shimmer effect on linear gauges
- Fully responsive design for all devices
- Accessible with `prefers-reduced-motion` support
- Easy to customize values, colors, and sizes
- Maintainer can easily standardize this as `.ease-gauge-[YOUR_INITIALS]` in the core library.