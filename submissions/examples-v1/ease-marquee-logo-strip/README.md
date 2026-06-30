# ease-marquee-logo-strip

An infinite scrolling marquee logo strip for EaseMotion CSS.

## Usage

```html
<div class="ease-marquee">
  <div class="ease-marquee-track">
    <span class="ease-marquee-item">OpenAI</span>
    <span class="ease-marquee-item">Google</span>
    <span class="ease-marquee-item">GitHub</span>
    <!-- Duplicate items for seamless loop -->
    <span class="ease-marquee-item">OpenAI</span>
    <span class="ease-marquee-item">Google</span>
    <span class="ease-marquee-item">GitHub</span>
  </div>
</div>
```

## Variants

```html
<!-- Reverse direction -->
<div class="ease-marquee ease-marquee-reverse">...</div>

<!-- Slow speed -->
<div class="ease-marquee ease-marquee-slow">...</div>

<!-- Fast speed -->
<div class="ease-marquee ease-marquee-fast">...</div>
```

## Classes

| Class                  | Description                        |
| ---------------------- | ---------------------------------- |
| `ease-marquee`         | Outer wrapper with overflow hidden |
| `ease-marquee-track`   | Scrolling inner track              |
| `ease-marquee-item`    | Individual logo/brand item         |
| `ease-marquee-reverse` | Scroll in reverse direction        |
| `ease-marquee-slow`    | Slow speed (25s)                   |
| `ease-marquee-fast`    | Fast speed (8s)                    |

## Features

- Infinite seamless loop
- Pauses on hover
- Reverse direction variant
- Speed variants (slow, fast)
- Edge fade using mask-image
- Respects prefers-reduced-motion
- Uses EaseMotion CSS design tokens
