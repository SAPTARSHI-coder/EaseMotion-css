# CSS Sonar Ping Loader

A responsive sonar-style loading animation built entirely with HTML and CSS.

The loader creates expanding ping circles from a central scanning point,
giving the component a radar/sonar-inspired visual effect.

## Features

- Pure HTML and CSS
- No JavaScript required
- Three staggered expanding ping circles
- Pulsing center indicator
- Responsive design
- Dark sonar-inspired interface
- Accessible loading status
- `prefers-reduced-motion` support
- Lightweight implementation

## Files

- `demo.html` — Demo page and loader markup
- `style.css` — Complete loader styling and animations

## How It Works

The loader uses three absolutely positioned circles:

```html
<span class="ping ping-one"></span>
<span class="ping ping-two"></span>
<span class="ping ping-three"></span>