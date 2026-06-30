# ease-click-ripple

Click ripple animation for EaseMotion CSS.

## Usage

```html
<button class="ripple-btn">Click me</button>
```

```js
el.addEventListener("click", (e) => {
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--rx", e.clientX - rect.left + "px");
  el.style.setProperty("--ry", e.clientY - rect.top + "px");
  el.classList.remove("rippling");
  void el.offsetWidth;
  el.classList.add("rippling");
  setTimeout(() => el.classList.remove("rippling"), 700);
});
```

## CSS Variables

`--rx` and `--ry` are set by JS on click.
