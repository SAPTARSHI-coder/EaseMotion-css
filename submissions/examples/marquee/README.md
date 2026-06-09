# ease-marquee

Infinite scrolling ticker/marquee animation using `translateX` keyframes. Zero JavaScript required.

## Usage

```html
<div class="ease-marquee">
  <div class="ease-marquee-track">
    <span>Item 1</span>
    <span>Item 2</span>
    <!-- Duplicate items for seamless loop -->
    <span>Item 1</span>
    <span>Item 2</span>
  </div>
</div>
```

## Variants

| Class | Description |
|---|---|
| `ease-marquee` | Base infinite horizontal scroll |
| `ease-marquee-pause` | Pauses animation on hover |
| `ease-marquee-reverse` | Scrolls in reverse direction |
| `ease-marquee-fast` | 8s duration |
| `ease-marquee-slow` | 40s duration |
| `ease-marquee-y` | Vertical scroll variant |

## Notes

- Duplicate track items for a seamless infinite loop
- `ease-marquee-track` is the required inner scrolling element
- Combine `ease-marquee-pause` with `ease-marquee-reverse` freely

## Submission

- **Author:** sudha09-git
- **Issue:** #2344
- **Files:** `style.css`, `demo.html`
