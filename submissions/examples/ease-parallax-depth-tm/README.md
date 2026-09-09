# ease-parallax-depth

CSS scroll-linked parallax depth effect for EaseMotion CSS.

## Layer Speed Multipliers

| Layer | Speed | Description |
|---|---|---|
| Background | 0.15 | Slowest |
| Midground | 0.35 | Medium |
| Foreground | 0.55 | Fastest |

## Usage

```html
<div class="parallax-wrapper">
  <div class="parallax-layer bg" id="bgLayer"></div>
  <div class="parallax-layer mid" id="midLayer"></div>
  <div class="parallax-content">Title</div>
</div>
```

```js
window.addEventListener('scroll', () => {
  bg.style.transform = 'translateY(' + (scrollProgress * 0.15) + 'px)';
  mid.style.transform = 'translateY(' + (scrollProgress * 0.35) + 'px)';
});
```
