# ease-hover-magnetic

Magnetic cursor pull hover effect for EaseMotion CSS.

## Usage

Add `data-magnetic` attribute to elements and include the JS handler.

```js
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 120) {
      el.style.setProperty("--tx", dx * (1 - dist / 120) * 0.4 + "px");
      el.style.setProperty("--ty", dy * (1 - dist / 120) * 0.4 + "px");
    } else {
      el.style.setProperty("--tx", "0px");
      el.style.setProperty("--ty", "0px");
    }
  });
});
```

## CSS Variables

`--tx` and `--ty` for X/Y translation.
