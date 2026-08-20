# Tab Slider

A pill-style tab bar whose indicator slides to the active tab with a spring curve, while the panel content fades in below.

## How is it used?

Give the tabs container an indicator span and set its width/position from the active tab:

```html
<nav class="tabs" id="tabs">
  <span class="tab-indicator" id="tabIndicator"></span>
  <button class="tab active">Monthly</button>
  <button class="tab">Yearly</button>
</nav>
```

```js
indicator.style.width = tab.offsetWidth + 'px';
indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
```

The indicator's `transition` animates both `width` and `transform`, producing the sliding-pill effect; `.panel.visible` runs a small `panelIn` fade.

## Why is it useful?

Sliding tab indicators are a staple of dashboard and pricing UIs because they make active state obvious. This component shows a clean, dependency-free implementation — a single absolutely-positioned pill driven by two transitions — and responds to window resizes, keeping the pattern production-usable for EaseMotion examples.
