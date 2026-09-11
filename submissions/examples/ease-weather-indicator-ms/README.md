# Ease Weather Indicator

## What does this do?

Adds a compact weather condition display with CSS-only icons, temperatures, condition labels, and multiple visual states.

## How is it used?

Place the indicator markup inside any dashboard, travel, or location-aware interface and choose a state class such as `sunny`, `cloudy`, `rainy`, or `storm`.

```html
<article class="weather-indicator sunny">
  <span class="weather-icon" aria-hidden="true"></span>
  <div>
    <span class="weather-temp">31&deg;C</span>
    <span class="weather-condition">Sunny</span>
  </div>
</article>
```

## Why is it useful?

It gives EaseMotion CSS a polished, responsive status component that communicates weather at a glance while staying lightweight, accessible, and dependency-free.
