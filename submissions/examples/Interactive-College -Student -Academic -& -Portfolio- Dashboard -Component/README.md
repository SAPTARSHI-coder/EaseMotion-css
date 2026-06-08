# Infinite Scrolling Ticker/Marquee Component

A hardware-accelerated, pure-CSS infinite horizontal scrolling component designed to build logo walls, news alerts, and brand tracks without relying on third-party JavaScript scripts.

## How It Works
The utility relies on duplicate structural child nodes containing identical widths. By sliding the parent track wrapper back by exactly `-50%` via CSS 2D transformations, the track resets perfectly over its own duplicate copy, establishing an seamless loop pattern.

## Utility Modifiers Applied

| Class Designation | Functional Output |
| --- | --- |
| `.ease-marquee` | Standard container initialization (Scrolls Left) |
| `.ease-marquee-right` | Alters layout vectors to scroll toward the right |
| `.ease-marquee-fast` | Increases loop frequency (Cycles in 8s) |
| `.ease-marquee-slow` | Reduces loop frequency (Cycles in 30s) |
| `.ease-marquee-pause` | Pauses structural animation on hover trigger states |

## Integration

```html
<div class="ease-marquee ease-marquee-pause">
    <div class="ease-marquee-track">
        <span>Item A</span>
        <span>Item B</span>
        <span>Item A</span>
        <span>Item B</span>
    </div>
</div>