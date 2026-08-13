# Metric Counter

An analytics dashboard with easing count-up numbers, filling progress bars, and a staggered sparkline that grows from zero.

## How is it used?

Drop a target value into `data-target` and let the container class drive the motion:

```html
<section class="metrics played">
  <article class="metric">
    <span class="m-value" data-target="184200">0</span>
    <div class="m-track"><span class="m-bar"></span></div>
  </article>
</section>
```

Removing and re-adding `.played` replays the staggered card reveal, the `width` transition on every `.m-bar`, the `spGrow` sparkline bars, and the JS count-up.

## Why is it useful?

Animated numbers and bars turn dry statistics into a digestible story on dashboards and landing pages. This component shows a tidy pattern — declarative `data-target` values, one state class, and GPU-friendly `transform`/`width` animations — that fits EaseMotion's goal of readable, reusable motion utilities.
